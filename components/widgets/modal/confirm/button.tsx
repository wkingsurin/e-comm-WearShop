import { Button } from "@/components/ui/button";
import { IConfirmModalButtonProps } from "@/types/components/widgets/modal.types";

export default function ConfirmModalButton({
	text,
	onClick,
}: IConfirmModalButtonProps) {
	return (
		<Button className="flex-1" onClick={onClick}>
			{text}
		</Button>
	);
}
