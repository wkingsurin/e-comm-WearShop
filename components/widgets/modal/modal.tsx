import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface IProps {
	children: React.ReactNode;
}

export default function Modal({ children }: IProps) {
	return (
		<div className="relative max-w-[720px]">
			<div className="w-full p-4 bg-white rounded-xl">
				{children}
			</div>
			<Button className="absolute top-0 -right-[52px] w-[40px] h-[40px] p-0 bg-white rounded-[50%] shadow-[0_0_9px_-3px_var(--black)]/50 hover:bg-white">
				<X className="size-4 stroke-[1.5px] stroke-black" />
			</Button>
		</div>
	);
}
