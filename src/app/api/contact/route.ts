import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  company: z.string().optional(), // honeypot field
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = ContactSchema.parse(body);

    // Check honeypot field (should be empty for real users)
    if (validatedData.company && validatedData.company.length > 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "sadikcqu@gmail.com",
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-top: 20px;">
              <p style="color: #4b5563; margin: 10px 0;">
                <strong style="color: #1f2937;">Name:</strong><br>
                <span style="color: #111827;">${validatedData.name}</span>
              </p>
              
              <p style="color: #4b5563; margin: 10px 0;">
                <strong style="color: #1f2937;">Email:</strong><br>
                <a href="mailto:${
                  validatedData.email
                }" style="color: #3b82f6; text-decoration: none;">
                  ${validatedData.email}
                </a>
              </p>
              
              <p style="color: #4b5563; margin: 10px 0;">
                <strong style="color: #1f2937;">Message:</strong>
              </p>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 10px; color: #111827; white-space: pre-wrap; line-height: 1.6;">
${validatedData.message}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p style="margin: 5px 0;">Submitted: ${new Date().toLocaleString()}</p>
              <p style="margin: 5px 0;">You can reply directly to this email to respond to ${
                validatedData.name
              }.</p>
            </div>
          </div>
        </div>
      `,
      replyTo: validatedData.email, // So you can reply directly
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
