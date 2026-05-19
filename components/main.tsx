interface IProps {
	children: React.ReactNode;
}

export default function Main({ children }: IProps) {
	return (
		<main className="flex flex-col items-center gap-[20px] mt-[150px]">
			{children}
		</main>
	);
}
