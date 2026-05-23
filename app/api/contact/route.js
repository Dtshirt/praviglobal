import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'contacts.json');

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    // --- STEP 1: SAVE INQUIRY TO BACKUP DATABASE ---
    try {
      let contacts = [];
      try {
        const fileContent = await fs.readFile(DB_PATH, 'utf-8');
        contacts = JSON.parse(fileContent);
      } catch (err) {}

      contacts.push({
        id: `contact_${Date.now()}`,
        name,
        email,
        phone,
        message,
        submittedAt: new Date().toISOString()
      });

      await fs.writeFile(DB_PATH, JSON.stringify(contacts, null, 2));
    } catch (dbErr) {
      console.error('Failed to save contact inquiry to local backup:', dbErr);
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
          subject: `New Inquiry from ${name}`,
          html: `
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr/>
            <p>Sent from your website contact form.</p>
          `,
        };

        // Fire email in background to prevent blocking UI execution
        transporter.sendMail(mailOptions).catch(emailErr => {
          console.error('Background contact email dispatch failed:', emailErr);
        });
      } catch (smtpInitErr) {
        console.error('SMTP Transporter initialization failed (Safe bypass):', smtpInitErr);
      }
    } else {
      console.log('Contact inquiry received in Mock Mode (No SMTP credentials configured). Saved to contacts.json.');
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for contacting us. We will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}