import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'registrations.json');

export async function POST(req) {
  try {
    const { name, email, phone } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    
    const registrationId = `reg_${Date.now()}`;

    // --- STEP 1: REGISTER LEAD (Pending Payment) ---
    try {
      let registrations = [];
      try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        registrations = JSON.parse(data);
      } catch (err) {}
      
      registrations.push({
        id: registrationId,
        name,
        email,
        phone,
        status: 'pending',
        registeredAt: new Date().toISOString()
      });
      await fs.writeFile(DB_PATH, JSON.stringify(registrations, null, 2));
    } catch (dbErr) {
      console.error('Failed to save lead:', dbErr);
    }

    // --- STEP 2: CREATE PAYMENT ORDER ---
    if (!key_id || !key_secret) {
      // Local Test Bypass if keys are not set
      return NextResponse.json({
        mockPayment: true,
        orderId: `order_mock_${Date.now()}`,
        registrationId,
        amount: 9900,
        message: 'No Razorpay keys found. Running in local mock mode.'
      });
    }

    const razorpay = new Razorpay({
      key_id: key_id,
      key_secret: key_secret,
    });

    const options = {
      amount: 9900, // Rs 99 in paise
      currency: "INR",
      receipt: registrationId
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      orderId: order.id,
      registrationId,
      amount: options.amount,
      key: key_id,
      mockPayment: false
    });

  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create payment order' }, { status: 500 });
  }
}
