import { ITermsFieldProps } from "@/app/types/components/widgets/form.types";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
