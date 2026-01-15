import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Skribe Backend API' });
});

app.post('/api/send-demo-request', async (req, res) => {
  const { fullName, workEmail, phone, organisation, employees } = req.body;

  const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.ADMIN_EMAIL,
  subject: 'New Demo Request - Skribe',
  html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
      <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 5px;">New Demo Request for Skribe</h2>
      <p><strong style="color: #3498db;">Name:</strong> ${fullName || 'N/A'}</p>
      <p><strong style="color: #3498db;">Email:</strong> ${workEmail || 'N/A'}</p>
      <p><strong style="color: #3498db;">Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong style="color: #3498db;">Organisation:</strong> ${organisation || 'N/A'}</p>
      <p><strong style="color: #3498db;">Employees:</strong> ${employees || 'N/A'}</p>
      <p style="margin-top: 20px; font-size: 0.9em; color: #777;">
        This message was sent from your website's Request a Demo form.
      </p>
    </div>
  `
};


  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
