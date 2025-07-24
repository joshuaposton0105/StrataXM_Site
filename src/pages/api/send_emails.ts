import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_EMAIL,
      pass: process.env.OUTLOOK_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"StrataXM Website" <${process.env.OUTLOOK_EMAIL}>`,
      to: process.env.OUTLOOK_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Message from StrataXM Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ error: 'Email sending failed' });
  }
}
