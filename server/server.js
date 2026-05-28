import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main order/consultation handler endpoint
app.post('/api/order', async (req, res) => {
  const { name, email, phone, service, dob, tob, pob, notes } = req.body;

  if (!name || !email || !phone || !service) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, email, phone number, and service selection are required.' 
    });
  }

  // Map service IDs to readable product names
  const serviceNames = {
    'addiction': 'Addiction Bracelet (₹2,100)',
    'love': 'Desired Love Bracelet (₹2,400)',
    'job': 'Job Bracelet (₹2,200)',
    'consultation': 'Personalized Crystal & Birth Chart Consultation (₹1,500)',
    'natal': 'Natal Chart Synthesis (₹4,100)',
    'synastry': 'Relationship Synastry (₹5,500)'
  };

  const selectedProduct = serviceNames[service] || service;

  console.log(`[Server] Received order from ${name} (${email}) for: ${selectedProduct}`);

  // 1. Configure the SMTP Transporter
  // If the user has custom SMTP variables in a .env file, we use them.
  // Otherwise, we fallback to a safe console-logging transporter or ethereal mock.
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER; // Your Gmail: sritammishra108@gmail.com
  const smtpPass = process.env.SMTP_PASS; // Your Gmail App Password (not your main password)

  const mailOptions = {
    from: smtpUser ? `"Barenyam Orders" <${smtpUser}>` : '"Barenyam Mock Mailer" <orders@barenyam.com>',
    to: 'sritammishra108@gmail.com',
    subject: `🔮 New Barenyam Order: ${selectedProduct} from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #d4af37; border-radius: 8px; padding: 20px; background-color: #0c0b1a; color: #cbd5e1;">
        <div style="text-align: center; border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 20px;">
          <h1 style="color: #f5d061; font-size: 24px; margin: 0;">Barenyam Astrology & Crystals</h1>
          <p style="color: #cbd5e1; font-size: 14px; margin: 5px 0 0 0;">Dr. Sasmitaa Dash Order System</p>
        </div>

        <h2 style="color: #f5d061; font-size: 18px; border-left: 3px solid #f5d061; padding-left: 10px; margin-bottom: 15px;">Order Summary</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="border-bottom: 1px solid #1e1b4b;">
            <td style="padding: 10px 0; font-weight: bold; color: #f5d061; width: 180px;">Selected Item:</td>
            <td style="padding: 10px 0;">${selectedProduct}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e1b4b;">
            <td style="padding: 10px 0; font-weight: bold; color: #f5d061;">Customer Name:</td>
            <td style="padding: 10px 0;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e1b4b;">
            <td style="padding: 10px 0; font-weight: bold; color: #f5d061;">Email Address:</td>
            <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #1e1b4b;">
            <td style="padding: 10px 0; font-weight: bold; color: #f5d061;">Phone Number:</td>
            <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #06b6d4; text-decoration: none;">${phone}</a></td>
          </tr>
        </table>

        <h2 style="color: #f5d061; font-size: 18px; border-left: 3px solid #f5d061; padding-left: 10px; margin-bottom: 15px;">Birth Celestial Details</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="border-bottom: 1px solid #1e1b4b;">
            <td style="padding: 10px 0; font-weight: bold; color: #f5d061; width: 180px;">Date of Birth:</td>
            <td style="padding: 10px 0;">${dob || 'Not Provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e1b4b;">
            <td style="padding: 10px 0; font-weight: bold; color: #f5d061;">Time of Birth:</td>
            <td style="padding: 10px 0;">${tob || 'Not Provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e1b4b;">
            <td style="padding: 10px 0; font-weight: bold; color: #f5d061;">Place of Birth:</td>
            <td style="padding: 10px 0;">${pob || 'Not Provided'}</td>
          </tr>
        </table>

        <h2 style="color: #f5d061; font-size: 18px; border-left: 3px solid #f5d061; padding-left: 10px; margin-bottom: 15px;">User Focus / Custom Question</h2>
        <div style="background-color: #161530; border: 1px solid #1e1b4b; border-radius: 4px; padding: 12px; font-style: italic; color: #cbd5e1; line-height: 1.6;">
          ${notes ? notes.replace(/\n/g, '<br>') : 'No additional comments provided.'}
        </div>

        <div style="margin-top: 30px; border-top: 1px solid #d4af37; padding-top: 15px; font-size: 12px; color: #64748b; text-align: center;">
          <p>This order email was automatically dispatched by the Barenyam web store.</p>
        </div>
      </div>
    `
  };

  try {
    if (!smtpUser || !smtpPass) {
      console.warn('[Server] WARNING: SMTP_USER or SMTP_PASS environment variables are missing! Falling back to simulated successful delivery.');
      return res.status(200).json({ 
        success: true, 
        message: 'Order simulated successfully. (To send real emails, please supply SMTP_USER and SMTP_PASS under .env!)',
        simulated: true 
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // True for port 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail(mailOptions);
    console.log('[Server] Email successfully sent to sritammishra108@gmail.com!');
    return res.status(200).json({ 
      success: true, 
      message: 'Your order request has been sent! Check your inbox shortly.',
      simulated: false 
    });

  } catch (err) {
    console.error('[Server] Nodemailer error occurred:', err);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send mail through SMTP. Please check credentials.',
      error: err.message 
    });
  }
});

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ 
      success: false, 
      message: 'Email address is required.' 
    });
  }

  console.log(`[Server] Received newsletter join request for: ${email}`);

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const mailOptions = {
    from: smtpUser ? `"Barenyam Newsletter" <${smtpUser}>` : '"Barenyam Mock Mailer" <newsletter@barenyam.com>',
    to: 'sritammishra108@gmail.com',
    subject: `📧 New Barenyam Newsletter Joining Request`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #d4af37; border-radius: 8px; padding: 20px; background-color: #0c0b1a; color: #cbd5e1;">
        <div style="text-align: center; border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 20px;">
          <h1 style="color: #f5d061; font-size: 24px; margin: 0;">Barenyam Newsletter System</h1>
          <p style="color: #cbd5e1; font-size: 14px; margin: 5px 0 0 0;">Dr. Sasmitaa Dash Subscriber Channels</p>
        </div>

        <p style="font-size: 15px; line-height: 1.6;">
          A new user has requested to join your monthly cosmic transits, crystal science, and numerology newsletter:
        </p>

        <div style="background-color: #161530; border: 1px solid #1e1b4b; border-radius: 4px; padding: 15px; text-align: center; margin: 20px 0;">
          <strong style="color: #f5d061; font-size: 18px;">Email: <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></strong>
        </div>

        <div style="margin-top: 30px; border-top: 1px solid #d4af37; padding-top: 15px; font-size: 12px; color: #64748b; text-align: center;">
          <p>This message was automatically generated by the Barenyam web portal.</p>
        </div>
      </div>
    `
  };

  try {
    if (!smtpUser || !smtpPass) {
      console.warn('[Server] WARNING: SMTP_USER or SMTP_PASS missing. Simulating subscriber email successfully.');
      return res.status(200).json({ 
        success: true, 
        message: 'Newsletter subscription simulated successfully.',
        simulated: true 
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail(mailOptions);
    console.log('[Server] Newsletter registration email sent successfully to sritammishra108@gmail.com!');
    return res.status(200).json({ 
      success: true, 
      message: 'Email successfully logged in our newsletter channel!',
      simulated: false 
    });

  } catch (err) {
    console.error('[Server] Nodemailer error occurred during subscription:', err);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to dispatch email. Please check SMTP parameters.',
      error: err.message 
    });
  }
});

// Root endpoint to verify server is active
app.get('/', (req, res) => {
  res.send('🌌 Barenyam Astrological Ordering Server is fully active!');
});

app.listen(PORT, () => {
  console.log(`🌌 Barenyam backend is active on http://localhost:${PORT}`);
});
