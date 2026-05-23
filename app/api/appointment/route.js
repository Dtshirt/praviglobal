import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'appointments.json');

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      service, 
      doctor, 
      preferredDate, 
      preferredTime, 
      message 
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate date is not in the past
    const appointmentDate = new Date(preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (appointmentDate < today) {
      return NextResponse.json(
        { error: 'Appointment date cannot be in the past' },
        { status: 400 }
      );
    }

    // --- STEP 1: SAVE APPOINTMENT TO BACKUP DATABASE ---
    try {
      let appointments = [];
      try {
        const fileContent = await fs.readFile(DB_PATH, 'utf-8');
        appointments = JSON.parse(fileContent);
      } catch (err) {}

      appointments.push({
        id: `appointment_${Date.now()}`,
        name,
        email,
        phone,
        service,
        doctor: doctor || 'Any available',
        preferredDate,
        preferredTime,
        message: message || '',
        submittedAt: new Date().toISOString()
      });

      await fs.writeFile(DB_PATH, JSON.stringify(appointments, null, 2));
    } catch (dbErr) {
      console.error('Failed to save appointment to local backup:', dbErr);
    }

    // --- STEP 2: SEND SMTP ALERT IN BACKGROUND ---
    const key_id = process.env.SMTP_USER;
    const key_pass = process.env.SMTP_PASS;

    if (key_id && key_pass) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
          auth: {
            user: key_id,
            pass: key_pass,
          },
        });

        const Mails = [
          'praviglobalinfo@praviivf.in',
          'ritshukla@gmail.com',
          'deepakbaradwaj933@gmail.com'
        ];

        const mailOptions = {
          from: `"Pravi IVF Clinic" <${process.env.SMTP_USER}>`, // Sender address
          to: Mails, // Where you receive contact emails
          subject: `New Appointment Request - ${name}`,
          html: `
            <h2>New Appointment Request</h2>
            <p><strong>Patient Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Doctor:</strong> ${doctor || 'Any available'}</p>
            <p><strong>Preferred Date:</strong> ${preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
            <p><strong>Message:</strong> ${message || 'None'}</p>
          `,
        };

        // Fire email in background to prevent blocking UI execution
        transporter.sendMail(mailOptions).catch(emailErr => {
          console.error('Background appointment email dispatch failed:', emailErr);
        });
      } catch (smtpInitErr) {
        console.error('SMTP Transporter initialization failed (Safe bypass):', smtpInitErr);
      }
    } else {
      console.log('Appointment received in Mock Mode (No SMTP credentials configured). Saved to appointments.json.');
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Appointment request received successfully. We will contact you within 24 hours.',
        appointmentDetails: {
          name,
          service,
          preferredDate,
          preferredTime
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Appointment booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later or call us directly.' },
      { status: 500 }
    );
  }
}