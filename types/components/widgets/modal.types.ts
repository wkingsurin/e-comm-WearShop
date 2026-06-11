export interface IModalProps {
	className?: string;
	children: React.ReactNode;
}

export interface IConfirmModalButtonProps {
	text: string;
	onClick: () => void;
}
