interface IFormOptions {
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

export interface IFormProps {
	options: IFormOptions;
}

export interface IInputFieldProps {
	id: string;
	label: string;
	type: string;
	placeholder: string;
}

export interface IPasswordFieldProps {
	id: string;
	label: string;
	placeholder: string;
}

export interface ITermsFieldProps {
	children: string | React.ReactNode;
}
