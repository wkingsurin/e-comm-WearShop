"use client";

import { useEffect } from "react";
import { signIn } from "next-auth/react";
import Script from "next/script";
import { Button } from "@/components/ui/button";

export default function TelegramButton() {
	useEffect(() => {
		(window as any).onTelegramAuth = async (data: any) => {
			console.log("[Данные от Telegram]:", data);

			await signIn("telegram", {
				telegram_jwt: data,
				callbackUrl: "/",
			});
		};

		return () => {
			delete (window as any).onTelegramAuth;
		};
	}, []);

	return (
		<div className="flex flex-col items-center justify-center w-full mt-4 border-t pt-4 border-black/5">
			<p className="text-xs text-black/40 mb-3 uppercase tracking-wider font-medium">
				Or sign in with
			</p>

			<Script
				async
				src="https://oauth.telegram.org/js/telegram-login.js?5"
				data-client-id="8800444941"
				data-onauth="onTelegramAuth(data)"
				data-request-access="write"
			/>

			<Button
				type="button"
				className="tg-auth-button w-full max-w-[260px] bg-[#54a9eb] hover:bg-[#4397d7] text-white font-medium"
			>
				Sign In with Telegram
			</Button>
		</div>
	);
}
