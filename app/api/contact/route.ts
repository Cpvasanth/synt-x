import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple HTML-escaping utility to sanitize user inputs
function sanitize(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/`/g, '&#x60;')
    .trim();
}

// Basic RFC5322 email validation
function isValidEmail(email: string): boolean {
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}

// Basic SQL Injection filter
function isInjectionAttempt(value: string): boolean {
  const pattern = /(drop\s+table|union\s+select|insert\s+into|update\s+\w+|delete\s+from)/i;
  return pattern.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let {
      name, email, phone, country, company, subject, message, subscription
    } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    name = sanitize(name);
    email = sanitize(email);
    phone = phone ? sanitize(phone) : '';
    country = sanitize(country);
    company = company ? sanitize(company) : '';
    subject = sanitize(subject);
    message = sanitize(message);

    // Validations
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address provided.' },
        { status: 422 }
      );
    }

    if (subject.length > 120) {
      return NextResponse.json(
        { error: 'Subject exceeds length limit.' },
        { status: 422 }
      );
    }

    if (isInjectionAttempt(subject) || isInjectionAttempt(message)) {
      return NextResponse.json(
        { error: 'Suspicious content blocked.' },
        { status: 403 }
      );
    }

    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD || !process.env.RECEIVER_EMAIL) {
      return NextResponse.json(
        { error: 'Email server is not configured properly.' },
        { status: 500 }
      );
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
        <p><strong>Active Synt-X Subscription:</strong> ${subscription ? 'Yes' : 'No'}</p>
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
          <p>Your message has been received. Our team will respond shortly.</p>
          <br/>
          <p style="font-size:14px;color:#888">Synt-X Web Engineering</p>
        </div>
      `
    };

    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail)
    ]);

    return NextResponse.json({
      success: true,
      message: 'Emails successfully sent.'
    });

  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
