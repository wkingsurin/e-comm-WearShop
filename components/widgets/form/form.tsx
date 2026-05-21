"use client";

import InputField from "./input-field";
import PasswordField from "./password-field";
import Link from "next/link";
import TermsField from "./terms-field";
import { Button } from "@/components/ui/button";

interface IOptions {
	title: string;
	subtitle?: { value: string; linkText: string; linkRef: string };
	nameField?: boolean;
	lastNameField?: boolean;
	emailField?: boolean;
	oldPasswordField?: boolean;
	newPasswordField?: boolean;
	newPasswordConfirmField?: boolean;
	passwordField?: boolean;
	confirmField?: boolean;
	terms?: { label: string };
	buttonText: string;
}

interface IProps {
	options: IOptions;
}

export default function Form({ options }: IProps) {
	const {
		title,
		subtitle,
		nameField,
		lastNameField,
		emailField,
		oldPasswordField,
		newPasswordField,
		newPasswordConfirmField,
		passwordField,
		confirmField,
		terms,
		buttonText,
	} = options;

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="flex flex-col items-center gap-7 max-w-[480px] w-full bg-black/10 rounded-lg p-[30px] border-[0.5px] border-black/5">
			<div className="flex flex-col gap-4 items-center">
				<span className="uppercase text-lg font-medium leading-md tracking-wider">
					{title}
				</span>
				{subtitle && (
					<div className="flex gap-3">
						<p className="text-md leading-md tracking-wider text-black/50">
							{subtitle.value}
						</p>
						<Link
							href={subtitle.linkRef}
							className="text-md leading-md tracking-wider text-black/75 hover:text-black"
						>
							{subtitle.linkText}
						</Link>
					</div>
				)}
			</div>

			<form
				className="flex flex-col items-center gap-[10px] w-full"
				onSubmit={onSubmit}
			>
				{nameField && (
					<InputField
						id="firstName"
						label="First name"
						placeholder="First name"
						type="text"
					/>
				)}
				{lastNameField && (
					<InputField
						id="lastName"
						label="Last name"
						placeholder="Last name"
						type="text"
					/>
				)}
				{emailField && (
					<InputField
						id="email"
						label="Email"
						placeholder="Enter email"
						type="email"
					/>
				)}
				{passwordField && (
					<PasswordField
						id="password"
						label="Password"
						placeholder="Enter password"
					/>
				)}
				{confirmField && (
					<PasswordField
						id="confirm"
						label="Confirm password"
						placeholder="Enter password"
					/>
				)}
				{oldPasswordField && (
					<PasswordField
						id="old-password"
						label="Old password"
						placeholder="Enter old password"
					/>
				)}
				{newPasswordField && (
					<PasswordField
						id="new-pass"
						label="New password"
						placeholder="Enter  password"
					/>
				)}
				{newPasswordConfirmField && (
					<PasswordField
						id="new-pass-confirm"
						label="New password again"
						placeholder="Enter new password"
					/>
				)}
				<div className="flex flex-col items-center gap-4 w-full mt-[10px]">
					{terms && <TermsField>{terms.label}</TermsField>}
					<Button type="submit" className="min-w-[240px]">
						{buttonText}
					</Button>
				</div>
			</form>
		</div>
	);
}
