'use server';

function formatEmailHTML(name: string, email: string, message: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #c4aa91;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #252220; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.5);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; background: linear-gradient(135deg, #c9b8a3 0%, #a89580 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #f5f1ed; font-size: 28px; font-weight: 700;">New Contact Message</h1>
              <p style="margin: 8px 0 0; color: #d4cfc9; font-size: 14px;">You have received a new message from your portfolio contact form</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Name -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #2f2b28; border-left: 4px solid #c9b8a3; border-radius: 4px;">
                    <p style="margin: 0 0 4px; color: #9a9389; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                    <p style="margin: 0; color: #f5f1ed; font-size: 16px; font-weight: 500;">${name}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Email -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #2f2b28; border-left: 4px solid #c9b8a3; border-radius: 4px;">
                    <p style="margin: 0 0 4px; color: #9a9389; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                    <p style="margin: 0;">
                      <a href="mailto:${email}" style="color: #c9b8a3; font-size: 16px; font-weight: 500; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 16px; background-color: #2f2b28; border-left: 4px solid #c9b8a3; border-radius: 4px;">
                    <p style="margin: 0 0 8px; color: #9a9389; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                    <p style="margin: 0; color: #f5f1ed; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #252220; border-radius: 0 0 8px 8px; border-top: 1px solid rgba(201, 184, 163, 0.15);">
              <p style="margin: 0; color: #9a9389; font-size: 13px; text-align: center;">
                This message was sent from your portfolio contact form on ${new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Riyadh'
  })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function formatEmailText(name: string, email: string, message: string): string {
  return `
NEW CONTACT FORM SUBMISSION
===========================

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent on: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Riyadh' })}
  `.trim();
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validate inputs
  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required' };
  }

  if (!email.includes('@')) {
    return { success: false, error: 'Invalid email address' };
  }

  // Check for required environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP configuration is missing');
    return { success: false, error: 'Email service is not configured' };
  }

  if (!process.env.EMAIL_TO) {
    console.error('EMAIL_TO is not configured');
    return { success: false, error: 'Email recipient is not configured' };
  }

  try {
    const emailHTML = formatEmailHTML(name, email, message);
    const emailText = formatEmailText(name, email, message);

    const nodemailer = await import('nodemailer');

    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: emailText,
      html: emailHTML,
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}
