"use client";

import Form from "@/components/widgets/form/form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm, FormProvider } from "react-hook-form";
import { stepOneSchema } from "@/lib/validation/step-one.schema";
import { stepTwoSchema } from "@/lib/validation/step-two.schema";
import TelegramButton from "@/components/widgets/form/telegram-button";

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
				<Form
					options={{
						title: step === 1 ? "SIGN IN / REGISTRATION" : "CONFIRMATION",
						subtitle:
							step === 2
								? {
										value: `Code sent to ${userEmail}`,
										linkText: "Change email",
										linkRef: "#",
								  }
								: undefined,
						emailField: step === 1,
						codeField: step === 2,
						buttonText: methods.formState.isSubmitting
							? "Processing..."
							: step === 1
							? "Send code"
							: "Verify & Sign In",
					}}
					onSubmit={methods.handleSubmit(onSubmit)}
					onPrevStep={handleBackToStepOne}
				></Form>
			</FormProvider>
			{step === 1 && <TelegramButton />}
		</div>
	);
}
