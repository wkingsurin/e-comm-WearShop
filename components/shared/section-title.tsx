interface IProps {
	children: string | React.ReactNode;
}

export default function SectionTitle({ children }: IProps) {
	return <h3 className="text-2xl font-bold tracking-wider leading-base">{children}</h3>;
}
