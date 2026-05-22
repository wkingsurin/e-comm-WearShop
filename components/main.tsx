import Overlay from "./shared/overlay";

interface IProps {
	children: React.ReactNode;
}

export default function Main({ children }: IProps) {
	return (
		<main className="relative flex flex-col items-center gap-[20px] mt-[150px] [&>*]:py-[60px] [&>*:first-child]:pt-0">
			{children}
			<Overlay />
		</main>
	);
}
