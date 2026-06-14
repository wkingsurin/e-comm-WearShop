"use client";

import InputField from "./input-field";
import TermsField from "./terms-field";
import { Button } from "@/components/ui/button";
import { IFormProps } from "@/types/components/widgets/form.types";
import DigitField from "./digit-field";

export default function Form({ options, onSubmit, onPrevStep }: IFormProps) {
	const { title, subtitle, emailField, codeField, terms, buttonText } = options;

	return (
		<div className="flex flex-col items-center gap-7 max-w-[480px] w-full bg-black/5 rounded-lg p-[30px] border-[0.5px] border-[#E5E7EB] shadow-[0_4px_12px_-3px_rgba(0,0,0,.10)]">
			<div className="flex flex-col gap-4 items-center">
				<span className="uppercase text-lg font-medium leading-md tracking-wider">
					{title}
				</span>
				{subtitle && (
					<div className="flex gap-3">
						<p className="text-md leading-md tracking-wider text-black/50">
							{subtitle.value}
						</p>
						<Button
							variant="link"
							className="w-auto h-auto no-underline! font-sans text-md leading-md tracking-wider text-black/75 hover:text-black"
							onClick={onPrevStep}
						>
							{subtitle.linkText}
						</Button>
					</div>
				)}
			</div>

			<form
				className="flex flex-col items-center gap-[10px] w-full"
				onSubmit={onSubmit}
			>
				{emailField && (
					<InputField
						id="email"
						name="email"
						label="Email"
						placeholder="Enter email"
						type="email"
					/>
				)}
				{codeField && <DigitField name="code" />}
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
