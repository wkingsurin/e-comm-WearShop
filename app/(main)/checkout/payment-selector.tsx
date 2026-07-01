"use client";

import { useState } from "react";
import PaymentMethod from "./payment-method";

export default function PaymentSelector() {
	const payments: { id: string; label: string; image: string }[] = [
		{ id: "1", label: "PayPal", image: "image-pay-1.png" },
		{ id: "2", label: "Visa", image: "image-pay-2.png" },
		{ id: "3", label: "Mastercard", image: "image-pay-3.png" },
	];

	const [selectedMethodId, setSelectedMethodId] = useState(payments[0].id);

	return (
		<div className="flex flex-col gap-3 min-h-[94px] rounded-xl border-[0.5px] border-[#E5E7EB] p-6 hover:shadow-[0_0_12px_-3px_rgba(0,0,0,.1)] transition-brand">
			<span className="tracking-wide font-medium text-black/75 uppercase pb-4 border-b border-[#E5E7EB]">
				Payment method
			</span>
			<div className="flex flex-col gap-2">
				{payments.map((item) => {
					const selected = item.id === selectedMethodId;

					return (
						<PaymentMethod
							key={item.id}
							item={item}
							checked={selected}
							onClick={setSelectedMethodId}
						/>
					);
				})}
			</div>
		</div>
	);
}
