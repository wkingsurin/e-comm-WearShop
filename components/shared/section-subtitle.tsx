interface IProps {
	children: string | React.ReactNode;
}

export default function SectionSubtitle({ children }: IProps) {
	return <span className="font-medium tracking-wider uppercase text-black/50">{children}</span>;
}
