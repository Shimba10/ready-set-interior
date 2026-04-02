import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, project_type, location, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured.' },
        { status: 500 }
      );
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const clientEmail = process.env.CLIENT_EMAIL || 'diane@readysetredesign.com';

    // ── Notification to Diane ─────────────────────────────────────
    await resend.emails.send({
      from: 'Ready Set ReDesign Website <onboarding@resend.dev>',
      to: clientEmail,
      replyTo: email,
      subject: `New quote request from ${name}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #fdf8f3; color: #1e1a17;">

          <div style="background: #c85a2a; padding: 28px 32px;">
            <p style="color: rgba(255,255,255,0.7); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 4px;">Ready Set ReDesign</p>
            <h1 style="color: white; font-size: 22px; font-weight: 700; margin: 0;">New Quote Request 🏡</h1>
          </div>

          <div style="padding: 32px; background: white; border-left: 1px solid #e8d5c4; border-right: 1px solid #e8d5c4;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; width: 120px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #c85a2a; font-weight: 600;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; font-size: 15px; color: #1e1a17;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #c85a2a; font-weight: 600;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #c85a2a;">${email}</a>
                </td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #c85a2a; font-weight: 600;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; font-size: 15px;"><a href="tel:${phone}" style="color: #c85a2a;">${phone}</a></td>
              </tr>` : ''}
              ${location ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #c85a2a; font-weight: 600;">Location</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; font-size: 15px; color: #1e1a17;">${location}</td>
              </tr>` : ''}
              ${project_type ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #c85a2a; font-weight: 600;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8e0; font-size: 15px; color: #1e1a17;">${project_type}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #c85a2a; font-weight: 600; vertical-align: top; padding-top: 16px;">Message</td>
                <td style="padding: 12px 0; font-size: 15px; color: #1e1a17; line-height: 1.6; padding-top: 16px;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>

          <div style="padding: 20px 32px; background: #fdf8f3; border: 1px solid #e8d5c4; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #c85a2a; color: white; padding: 12px 28px; text-decoration: none; font-size: 13px; font-weight: 600; border-radius: 6px; letter-spacing: 0.05em;">
              Reply to ${name} →
            </a>
          </div>

          <div style="padding: 16px 32px; text-align: center;">
            <p style="font-size: 11px; color: #a89a8e;">Sent from your Ready Set ReDesign website · readysetredesign.com</p>
          </div>
        </div>
      `,
    });

    // ── Auto-reply to client ──────────────────────────────────────
    await resend.emails.send({
      from: 'Diane @ Ready Set ReDesign <onboarding@resend.dev>',
      to: email,
      subject: `Got your request, ${name.split(' ')[0]}! 🏡`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #fdf8f3; color: #1e1a17;">

          <div style="background: #c85a2a; padding: 28px 32px;">
            <p style="color: rgba(255,255,255,0.7); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 4px;">Ready Set ReDesign</p>
            <h1 style="color: white; font-size: 22px; font-weight: 700; margin: 0;">Thanks for reaching out!</h1>
          </div>

          <div style="padding: 36px 32px; background: white; border-left: 1px solid #e8d5c4; border-right: 1px solid #e8d5c4;">
            <p style="font-size: 16px; margin: 0 0 16px;">Hi ${name.split(' ')[0]},</p>

            <p style="font-size: 15px; line-height: 1.7; color: #4a3f38; margin: 0 0 16px;">
              I received your request and I&apos;m excited to hear about your space!
              I&apos;ll be in touch shortly with your <strong style="color: #c85a2a;">free pre-quoted flat rate</strong> — no hourly surprises, promise.
            </p>

            <p style="font-size: 15px; line-height: 1.7; color: #4a3f38; margin: 0 0 24px;">
              In the meantime, if you have questions or want to chat sooner, feel free to call me directly at
              <a href="tel:2109880366" style="color: #c85a2a; font-weight: 600;">(210) 988-0366</a>.
            </p>

            <div style="background: #fdf8f3; border-left: 3px solid #c85a2a; padding: 16px 20px; margin: 0 0 24px; border-radius: 0 8px 8px 0;">
              <p style="font-size: 13px; color: #7a6b62; margin: 0; font-style: italic;">
                Remember: you get a complete Design Plan in your hands the <strong>same day</strong> as your appointment —
                paint colors, layout, and a shopping board with pictures of everything.
              </p>
            </div>

            <p style="font-size: 15px; line-height: 1.7; color: #4a3f38; margin: 0;">
              Talk soon,<br/>
              <strong style="font-size: 18px; color: #1e1a17;">Diane</strong><br/>
              <span style="color: #a89a8e; font-size: 13px;">Ready Set ReDesign · San Antonio, TX</span>
            </p>
          </div>

          <div style="padding: 20px 32px; text-align: center; background: #fdf8f3; border: 1px solid #e8d5c4;">
            <p style="font-size: 12px; color: #a89a8e; margin: 0;">
              (210) 988-0366 · 340 Treeline Park, San Antonio TX 78209
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Got it! Diane will reach out with your free quote shortly. Check your inbox for a confirmation.",
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please call (210) 988-0366 directly.' },
      { status: 500 }
    );
  }
}
