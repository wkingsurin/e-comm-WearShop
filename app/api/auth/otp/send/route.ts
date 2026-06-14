import { prisma } from "@/lib/prisma";
import { sendOtpSchema } from "@/lib/validation/send-otp.schema";
import { Resend } from "resend";
import crypto from "crypto";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { email } = sendOtpSchema.parse(body);

		const otpCode = crypto.randomInt(100000, 999999).toString();

		const expires = new Date(Date.now() + 5 * 60 * 1000);

		await prisma.verificationToken.deleteMany({ where: { identifier: email } });

		await prisma.verificationToken.create({
			data: {
				identifier: email,
				token: otpCode,
				expires,
			},
		});

		if (process.env.NODE_ENV === "development" && !process.env.RESEND_API_KEY) {
			console.log(`\n--- [OTP CODE FOR ${email}]: ${otpCode} ---\n`);
		} else {
			await resend.emails.send({
				from: "Auth <onboarding@resend.dev>",
				to: email,
				subject: "Your Verification code",
				html: `
          <div style="font-family: sans-serif; padding: 20px; max-width: 400px; margin: 0 auto; border: 1px solid #e5e7eb; rounded: 8px;">
            <h2 style="text-align: center; text-transform: uppercase; tracking-spacing: 1px;">Sign In Verification</h2>
            <p style="color: #4b5563; font-size: 14px; text-align: center;">Use the code below to sign in to your account. It is valid for 5 minutes.</p>
            <div style="background-color: #f3f4f6; padding: 12px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 4px; margin: 20px 0; border-radius: 6px;">
              ${otpCode}
            </div>
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">If you didn't request this code, please ignore this email.</p>
          </div>
        `,
			});
		}
		return NextResponse.json({
			success: true,
			message: "Code sent successfully",
		});
	} catch (err) {
		if (err instanceof ZodError) {
			return NextResponse.json(
				{ success: false, errors: err.flatten().fieldErrors },
				{ status: 400 }
			);
		}

		console.error("Error sending OTP:", err);
		return NextResponse.json(
			{ success: false, message: "Internal server error" },
			{ status: 400 }
		);
	}
}
