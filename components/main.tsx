import { IMainProps } from "@/types/components/main.types";
import Overlay from "./shared/overlay";

export default function Main({ auth, children }: IMainProps) {
	const isAuth = auth ? auth : "not-auth";

	return (
		<main
			className={`relative flex flex-col items-center md:min-h-[calc(100dvh-134px-80px)] ${
				isAuth === "not-auth" ? "mt-[134px]" : ""
			} [&>*]:py-[60px] [&>*:first-child]:pt-5`}
		>
			{children}
			<Overlay />
		</main>
	);
}
