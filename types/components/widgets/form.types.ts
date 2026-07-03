import { HTMLInputTypeAttribute } from "react";

interface IFormOptions {
	title: string;
	subtitle?: { value: string; linkText: string; linkRef: string };
	emailField?: boolean;
	codeField?: boolean;
	terms?: { label: string };
	buttonText: string;
}

export interface IFormProps {
	onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
	children: React.ReactNode;
	className?: string;
}
// export interface IFormProps {
// 	options: IFormOptions;
// 	onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
// 	onPrevStep: (e: React.MouseEvent) => void;
// }

export interface IDigitFieldProps {
	name: string;
}

export interface IFormInputProps {
	name: string;
	label: string;
	props: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface IPasswordFieldProps {
	id: string;
	label: string;
	name: string;
	placeholder: string;
}

export interface ITermsFieldProps {
	children: string | React.ReactNode;
}
