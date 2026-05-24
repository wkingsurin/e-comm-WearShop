import Overlay from "./shared/overlay";

interface IProps {
	children: React.ReactNode;
}

export default function Main({ children }: IProps) {
	return (
		<main className="relative flex flex-col items-center md:min-h-[calc(100dvh-134px-80px)] mt-[134px] [&>*]:py-[60px] [&>*:first-child]:pt-5">
			{children}
			<Overlay />
		</main>
	);
}
