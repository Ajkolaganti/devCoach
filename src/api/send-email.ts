import { Resend } from 'resend';

const resend = new Resend('re_dp4h1kvu_3AoZ4Jurg6gjGh8XZakwkJyo');

export async function sendEmail(formData: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'DevCoach <onboarding@resend.dev>',
      to: 'your-email@example.com', // Replace with your email address
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' };
  }
} 