import { IMainProps } from "@/types/components/main.types";
import Overlay from "./shared/overlay";

export default function Main({ auth, children }: IMainProps) {
	return (
		<main
			className={`relative flex flex-col items-center min-h-[calc(100dvh-76px-159px)] md:min-h-[calc(100dvh-134px-80px)] [&>*]:py-[60px] [&>*:first-child]:pt-5 mt-[76px] md:mt-[134px]`}
		>
			{children}
			<Overlay />
		</main>
	);
}
