"use client";

import { Button } from "@/components/ui/button";
import ShippingForm from "@/features/checkout/components/shipping-form/form";
import { useUIStore } from "@/lib/store/ui.store";
import { Clock4 } from "lucide-react";

export default function Shipping({
	shippingData,
}: {
	shippingData: {
		country: string;
		city: string;
		address: string;
		postalCode: string;
	};
}) {
	const openDialog = useUIStore((s) => s.openDialog);

	// const initialCheckout = {
	// 	address: "714 Green St, Apt 2B",
	// 	city: "San Francisco",
	// 	country: "United States",
	// 	postalCode: "CA 94108",
	// 	paymentMethod: null,
	// };

	const handleChange = () =>
		openDialog({
			title: "Change address",
			content: <ShippingForm initialValues={shippingData} />,
		});

	const hasAddress =
		shippingData.country &&
		shippingData.address &&
		shippingData.city &&
		shippingData.postalCode;

	return (
		<div className="flex flex-col gap-3 min-h-[94px] bg-white rounded-xl p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
			<div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
				<span className="tracking-wide font-medium text-black/75 uppercase">
					Shipping
				</span>
				{hasAddress && (
					<Button
						className="h-5 px-4 rounded-[6px] text-sm bg-transparent text-black border-black hover:text-white"
						onClick={handleChange}
					>
						Edit
					</Button>
				)}
			</div>

			{hasAddress ? (
				<div className="flex flex-col gap-2 tracking-wider">
					<p className="font-bold">Jane Doe</p>
					<p>{shippingData.address}</p>
					<p>
						{shippingData.city}, {shippingData.postalCode}
					</p>
					<p>{shippingData.country}</p>
				</div>
			) : (
				<div className="flex flex-col items-start gap-2">
					<span>Not yet address</span>
					<Button
						className="h-7 px-4 rounded-[6px] text-sm bg-transparent text-black border-black hover:text-white"
						onClick={handleChange}
					>
						Add address
					</Button>
				</div>
			)}

			<div className="flex items-center gap-3 text-black/50 tracking-wider text-sm pt-4 border-t-[1px] border-[#E5E7EB]">
				<Clock4 className="size-4 stroke-[1px]" />
				<p>Standard delivery (3-5 days)</p>
			</div>
		</div>
	);
}
