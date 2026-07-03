import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ITermsFieldProps } from "@/types/components/widgets/form.types";

export default function TermsField({ children }: ITermsFieldProps) {
	return (
		<div className="flex gap-3 w-full">
			<Checkbox id="terms" className="size-5" />
			<Label htmlFor="terms" className="leading-md">
				{children}
			</Label>
		</div>
	);
}
