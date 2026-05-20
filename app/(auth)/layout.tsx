interface IProps {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: IProps) {
	return <div>{children}</div>;
}
