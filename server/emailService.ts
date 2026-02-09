import nodemailer from 'nodemailer';

// SMTP configuration for Google Workspace
const SMTP_USER = 'admin@sparqgames.com';
const SMTP_PASS = process.env.GOOGLE_APP_PASSWORD;

export interface EmailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
}

export class EmailService {
  private static instance: EmailService;
  private transporter: nodemailer.Transporter | null = null;

  private constructor() {}

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async initialize() {
    try {
      this.transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      console.log('Email service initialized successfully');
    } catch (error) {
      console.error('Failed to initialize email service:', error);
      throw error;
    }
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    if (!this.transporter) {
      await this.initialize();
    }

    const mailOptions = {
      from: options.from || 'Sparq Inc. <admin@sparqgames.com>',
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    try {
      const result = await this.transporter!.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  }

  async sendBetaSignupNotification(userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    favoriteSport: string;
    updates?: boolean;
  }) {
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00bcd4;">New Beta Signup - Crown U!</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>User Information:</h3>
          <p><strong>Name:</strong> ${userInfo.firstName} ${userInfo.lastName}</p>
          <p><strong>Email:</strong> ${userInfo.email}</p>
          <p><strong>Favorite Sport:</strong> ${userInfo.favoriteSport}</p>
          <p><strong>Wants Updates:</strong> ${userInfo.updates ? 'Yes' : 'No'}</p>
        </div>
        <p style="color: #666;">This notification was automatically generated from the Sparq Inc. website.</p>
      </div>
    `;

    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #00bcd4;">Welcome to Crown U! Beta</h1>
        <p>Hi ${userInfo.firstName},</p>
        <p>Thank you for joining the Crown U! beta waitlist! We're excited to have you as part of our gaming community.</p>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>What happens next?</h3>
          <ul>
            <li>You'll receive updates about our beta launch progress</li>
            <li>Early access when beta testing begins</li>
            <li>Exclusive content and behind-the-scenes updates</li>
            <li>Direct feedback opportunities with our development team</li>
          </ul>
        </div>

        <p>We're building the ultimate NCAA gaming experience, and your feedback will be crucial in making Crown U! the best it can be.</p>
        
        <p>Stay tuned for more updates!</p>
        
        <p style="margin-top: 30px;">
          Best regards,<br>
          The Sparq Inc. Team
        </p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>Sparq Inc. | Building the Future of Collegiate Sports Gaming</p>
        </div>
      </div>
    `;

    // Send notification to admin
    await this.sendEmail({
      to: 'admin@sparqgames.com',
      subject: `New Beta Signup: ${userInfo.firstName} ${userInfo.lastName}`,
      html: adminEmailHtml,
    });

    // Send welcome email to user
    await this.sendEmail({
      to: userInfo.email,
      subject: 'Welcome to Crown U! Beta Waitlist',
      html: userEmailHtml,
    });
  }

  async sendContactFormNotification(contactInfo: {
    name: string;
    email: string;
    company?: string;
    message: string;
    type: 'general' | 'partnership' | 'support';
  }) {
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00bcd4;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Contact Information:</h3>
          <p><strong>Name:</strong> ${contactInfo.name}</p>
          <p><strong>Email:</strong> ${contactInfo.email}</p>
          ${contactInfo.company ? `<p><strong>Company:</strong> ${contactInfo.company}</p>` : ''}
          <p><strong>Type:</strong> ${contactInfo.type.charAt(0).toUpperCase() + contactInfo.type.slice(1)}</p>
          <div style="margin-top: 15px;">
            <strong>Message:</strong>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px;">
              ${contactInfo.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        <p style="color: #666;">This notification was automatically generated from the Sparq Inc. website contact form.</p>
      </div>
    `;

    await this.sendEmail({
      to: 'admin@sparqgames.com',
      subject: `Contact Form: ${contactInfo.type.charAt(0).toUpperCase() + contactInfo.type.slice(1)} - ${contactInfo.name}`,
      html: adminEmailHtml,
    });
  }
}

export const emailService = EmailService.getInstance();