"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm, FormProvider } from "react-hook-form";
import { stepOneSchema } from "@/lib/validation/step-one.schema";
import { stepTwoSchema } from "@/lib/validation/step-two.schema";
import TelegramButton from "@/components/shared/form/telegram-button";
import Form from "@/components/shared/form/form";
import DigitField from "@/components/shared/form/digit-field";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/shared/form/form-input";

interface IEmail {
	email: string;
}

interface IVerification {
	email: string;
	code: string;
}

type FormDataShape = {
	email: string;
	code: string;
};

export default function OTPAuthForm() {
	const router = useRouter();
	const [serverError, setServerError] = useState<string | null>(null);

	const [step, setStep] = useState<1 | 2>(1);
	const [userEmail, setUserEmail] = useState<string>("");

	const methods = useForm<FormDataShape>({
		resolver: zodResolver(step === 1 ? stepOneSchema : stepTwoSchema) as any,
		defaultValues: { email: "", code: "" },
	});

	const handleRequestCode = async (data: IEmail) => {
		setServerError(null);

		try {
			console.log(`[Sending code to ${data.email}...]`);

			const response = await fetch("/api/auth/otp/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: data.email }),
			});

			const result = await response.json();

			if (!response.ok || !result.success) {
				throw new Error(result.message || "Failed to send code");
			}

			setUserEmail(data.email);
			methods.setValue("email", data.email);

			methods.clearErrors();
			setStep(2);
		} catch (err) {
			console.error("[ERROR - handleRequestCode -]:", err);
			setServerError("Something went wrong. Try again.");
		}
	};

	const handleVerifyCode = async (data: IVerification) => {
		setServerError(null);
		console.log(`[Verification code ${data.code} for ${userEmail}...]`);

		const guestCart = localStorage.getItem("user-cart") || "[]";
		const guestFavorites = localStorage.getItem("user-favorites") || "[]";

		const result = await signIn("credentials", {
			email: userEmail,
			code: data.code,
			guestCart: guestCart,
			guestFavorites: guestFavorites,
			redirect: false,
		});

		if (result?.error) {
			setServerError("Invalid or expired verification code");
			return;
		}

		if (result.ok) {
			localStorage.removeItem("user-cart");
			localStorage.removeItem("user-favorites");
			router.push("/");
			router.refresh();
		}
	};

	const onSubmit = async (data: IEmail | IVerification) => {
		if (step === 1) {
			handleRequestCode(data as IEmail);
		} else {
			handleVerifyCode(data as IVerification);
		}
	};

	const handleBackToStepOne = (e: React.MouseEvent) => {
		e.preventDefault();
		setServerError(null);
		methods.setValue("code", "");
		methods.clearErrors();
		setStep(1);
	};

	useEffect(() => {
		console.log(`Form errors in current step:`, methods.formState.errors);
	}, [methods.formState.errors]);

	return (
		<div className="relative flex flex-col items-center w-full">
			{serverError && (
				<p className="absolute -top-8 text-red-500 text-center text-sm font-medium">
					{serverError}
				</p>
			)}
			<FormProvider {...methods}>
				<Form onSubmit={methods.handleSubmit(onSubmit)}>
					<div className="flex flex-col items-center gap-10 max-w-[480px] w-full p-6 rounded-xl bg-[#E5E7EB]/25 border border-[#E5E7EB]">
						<div className="flex flex-col items-center gap-4 w-full">
							<span className="text-lg text-center font-medium leading-md tracking-wider">
								{step === 1 ? "SIGN IN / REGISTRATION" : "CONFIRMATION"}
							</span>
							<hr className="w-full bg-[#E5E7EB]" />
							{step === 2 && (
								<div className="flex items-center gap-4">
									<p className="text-md tracking-wider leading-md text-black/50">
										Code sent to {userEmail}
									</p>
									<Button
										onClick={handleBackToStepOne}
										variant="link"
										className="hover:no-underline text-md text-black/75 hover:text-black h-auto w-auto p-0"
									>
										Change email
									</Button>
								</div>
							)}
						</div>

						<div className="flex flex-col items-center w-full gap-5">
							{step === 1 && (
								<FormInput
									name="email"
									label="Email"
									props={{ id: "email", type: " email" }}
								/>
							)}

							{step === 2 && (
								<div className="flex flex-col items-center gap-3">
									<p className="text-md tracking-wider leading-md text-black/75">
										Enter verification code
									</p>
									<DigitField name="code" />
								</div>
							)}

							<Button type="submit" className="w-[240px]">
								{methods.formState.isSubmitting
									? "Processing..."
									: step === 1
									? "Send code"
									: "Verify & Sign In"}
							</Button>
						</div>
					</div>
				</Form>
			</FormProvider>
			{step === 1 && <TelegramButton />}
		</div>
	);
}
