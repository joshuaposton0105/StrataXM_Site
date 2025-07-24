import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Only allow POST
  }

  const { name, email, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'josh@strataxm.com',
      pass: process.env.OUTLOOK_APP_PASSWORD, // 🔐 App password or OAuth token
    },
  });

  try {
    await transporter.sendMail({
      from: 'StrataXM Contact <josh@strataxm.com>',
      to: 'josh@strataxm.com',
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Email sending error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}

