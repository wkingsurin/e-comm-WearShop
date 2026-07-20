import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useUIStore } from "@/lib/store/ui.store";
import ShippingForm from "@/features/checkout/components/shipping-form/form";

interface IProps {
    initialValues: {
        country: string;
        city: string;
        address: string;
        postalCode: string;
    };
    onCancel?: () => void;
}

export default function OrderReturn({ initialValues, onCancel }: IProps) {
    const openDialog = useUIStore((s) => s.openDialog);

    const handleEdit = () => {
        openDialog({
            title: "Edit address",
            content: <ShippingForm initialValues={initialValues} />,
        });
    };

    return (
        <div className="flex flex-col gap-4 bg-white rounded-xl px-3 py-6 md:p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
            <Button
                variant="link"
                className="flex gap-3 justify-start w-full h-10 px-0 hover:no-underline hover:bg-[#F8F9FA]"
                onClick={handleEdit}
            >
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#F8F9FA]">
                    <Pencil className="size-5 stroke-black/50" />
                </span>
                <p>Edit address</p>
            </Button>
            {onCancel !== undefined && (
                <Button
                    className="h-[50px] bg-[#F51E1E]/10 text-[#F51E1E]/75 md:bg-black/15 hover:bg-[#F51E1E]/10 md:text-black hover:text-[#F51E1E]/75"
                    onClick={() => onCancel()}
                >
                    Cancel order
                </Button>
            )}
        </div>
    );
}
