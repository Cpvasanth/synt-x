import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function sanitize(input: string): string {
  return input.replace(/[<>&'"]/g, '');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { name, email, phone, country, company, subject, message, subscription } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }

    // Prevent injection inside email templates
    name = sanitize(name);
    email = sanitize(email);
    phone = sanitize(phone || '');
    country = sanitize(country || '');
    company = sanitize(company || '');
    subject = sanitize(subject);
    message = sanitize(message);

    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD || !process.env.RECEIVER_EMAIL) {
      return NextResponse.json({ error: 'Email server is not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
      }
    });

    const adminMail = {
      from: `"Synt-X Contact Bot" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Request: ${subject}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Active Subscription:</strong> ${subscription ? 'Yes' : 'No'}</p>
        <br/>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    const userMail = {
      from: `"Synt-X Team" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: `We received your request: ${subject}`,
      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2>Thank you for contacting Synt-X</h2>
          <p>Hello <strong>${name}</strong>,</p>
          <p>Your message has been successfully received. Our team will respond shortly.</p>
          <p style="margin-top:30px;font-size:14px;color:#888">Synt-X Web Engineering</p>
        </div>
      `
    };

    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail)
    ]);

    return NextResponse.json({ success: true, message: 'Emails successfully sent.' });
    
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
