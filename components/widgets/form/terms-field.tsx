import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface IProps {
	children: string | React.ReactNode;
}

export default function TermsField({ children }: IProps) {
	return (
		<div className="flex gap-3 w-full">
			<Checkbox id="terms" className="size-5" />
			<Label htmlFor="terms" className="leading-md">
				{children}
			</Label>
		</div>
	);
}
