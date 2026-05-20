interface IProps {
	className?: string;
	children: React.ReactNode;
}

export default function Section({ className, children }: IProps) {
	const style = className ? className : "default";

	return (
		<section className={`flex flex-col gap-5 w-full ${style}`}>
			{children}
		</section>
	);
}
