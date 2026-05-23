import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'consultations.json');

export async function POST(req) {
  try {
    const { name, email, phone, country, message } = await req.json();

    if (!name || !email || !phone || !country) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // --- STEP 1: SAVE LEAD TO BACKUP DATABASE ---
    try {
      let leads = [];
      try {
        const fileContent = await fs.readFile(DB_PATH, 'utf-8');
        leads = JSON.parse(fileContent);
      } catch (err) {}

      leads.push({
        id: `lead_${Date.now()}`,
        name,
        email,
        phone,
        source: country,
        message: message || '',
        submittedAt: new Date().toISOString()
      });

      await fs.writeFile(DB_PATH, JSON.stringify(leads, null, 2));
    } catch (dbErr) {
      console.error('Failed to save lead to local backup:', dbErr);
    }

    // --- STEP 2: SEND SMTP ALERT IN BACKGROUND (SAFE TRANSITION) ---
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

        // Fire email in background to prevent blocking UI execution
        transporter.sendMail({
          from: `"Pravi IVF Clinic" <${process.env.SMTP_USER}>`,
          to: Mails,
          subject: `New Online Consultation Booking - ${name}`,
          html: `
            <h2>New Consultation Request</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Source/Location:</b> ${country}</p>
            <p><b>Message:</b> ${message || 'Quick Consultation Request'}</p>
          `,
        }).catch(emailErr => {
          console.error('Background consultation email dispatch failed:', emailErr);
        });
      } catch (smtpInitErr) {
        console.error('SMTP Transporter initialization failed (Safe bypass):', smtpInitErr);
      }
    } else {
      console.log('Consultation received in Mock Mode (No SMTP credentials configured). Saved to consultations.json.');
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Consultation booked successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Consultation API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
