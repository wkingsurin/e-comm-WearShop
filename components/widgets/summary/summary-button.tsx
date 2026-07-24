import { Button } from "@/components/ui/button";

interface ISummaryButton {
    text: string;
    disabled?: boolean;
    terms?: boolean;
    onClick: () => void;
}

export default function SummaryButton({
    text,
    disabled,
    terms,
    onClick,
}: ISummaryButton) {
    return (
        <div className="flex flex-col gap-2">
            <Button
                onClick={onClick}
                disabled={disabled}
                className="h-[50px] bg-black"
            >
                {text}
            </Button>
            {terms && (
                <p className="text-center font-mono text-sm leading-md text-black/50">
                    By clicking you agree to our Terms of Sale and Privacy
                    Policy.
                </p>
            )}
        </div>
    );
}
