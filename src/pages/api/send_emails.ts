import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // ... validate and extract form data ...

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_EMAIL,
      pass: process.env.OUTLOOK_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.OUTLOOK_EMAIL,
    to: process.env.OUTLOOK_EMAIL,
    subject: 'New Contact Form Submission',
    html: `...`,
  });

  return res.status(200).json({ success: true });
}
