import { IMainProps } from "@/app/types/components/main.types";
import Overlay from "./shared/overlay";

export default function Main({ children }: IMainProps) {
	return (
		<main className="relative flex flex-col items-center md:min-h-[calc(100dvh-134px-80px)] mt-[134px] [&>*]:py-[60px] [&>*:first-child]:pt-5">
			{children}
			<Overlay />
		</main>
	);
}
