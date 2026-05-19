import Link from "next/link";

interface IProps {
	href: string;
	children: string | React.ReactNode;
}

export default function ServiceLink({ href, children }: IProps) {
	return (
		<Link href={href} className="flex gap-[6px] items-center">
			{children}
		</Link>
	);
}
