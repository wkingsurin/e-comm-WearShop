"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CancelReason() {
	const data = {
		id: "prod-111",
		title: "Under Armour",
		slug: "basic-under-armour",
		options: {
			color: ["white", "navy"],
			size: [
				{ label: "S", value: "46" },
				{ label: "M", value: "48" },
				{ label: "L", value: "50" },
				{ label: "XL", value: "52" },
			],
		},
		variants: [
			{
				id: "var-1",
				sku: "HOOD-UA-WHT-S",
				price: 7790,
				stock: 15,
				attributes: { color: "White", size: "S" },
				href: {
					small: "/image-white-240.png",
					medium: "/image-white-480.png",
					large: "/image-white-720.png",
					original: "/image-white-1280.png",
				},
				images: [
					{ id: "1", name: "under-armour-1", path: "/image-white-480.png" },
					{ id: "2", name: "under-armour-2", path: "/image-white-480.png" },
					{ id: "3", name: "under-armour-3", path: "/image-white-480.png" },
					{ id: "4", name: "under-armour-4", path: "/image-white-480.png" },
					{ id: "5", name: "under-armour-5", path: "/image-white-480.png" },
				],
			},
			{
				id: "var-2",
				sku: "HOOD-UA-NAVY",
				price: 7790,
				stock: 0,
				attributes: { color: "Navy", size: "S" },
				href: {
					small: "/image-navy-240.png",
					medium: "/image-navy-480.png",
					large: "/image-navy-720.png",
					original: "/image-navy-1280.png",
				},
				images: [
					{ id: "1", name: "under-armour-1", path: "/image-navy-480.png" },
					{ id: "2", name: "under-armour-2", path: "/image-navy-480.png" },
					{ id: "3", name: "under-armour-3", path: "/image-navy-480.png" },
					{ id: "4", name: "under-armour-4", path: "/image-navy-480.png" },
					{ id: "5", name: "under-armour-5", path: "/image-navy-480.png" },
				],
			},
		],
		currency: "$",
	};
	const reasonsData: { id: string; text: string }[] = [
		{ id: "reason-1", text: "I want to reorder" },
		{ id: "reason-2", text: "I want another thing" },
		{ id: "reason-3", text: "Doesn’t fit in size" },
		{ id: "reason-4", text: "Too expensive" },
		{ id: "reason-5", text: "Another reason" },
	];

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="flex gap-[60px] min-h-[428px]">
			<div className="flex flex-col gap-4 max-w-[320px] w-full">
				<div className="group/product relative h-[384px] bg-[#F4F4F6] rounded-xl">
					<Image
						src={data.variants[0].href.medium}
						alt=""
						width={332}
						height={480}
						className="rounded-xl cursor-zoom-in w-full h-full object-contain"
					/>
					<Button className="absolute top-[calc(50%-16px)] left-3 flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 group-hover/product:opacity-100">
						<ArrowLeft className="size-4 stroke-[1.5px] stroke-black" />
					</Button>
					<Button className="absolute top-[calc(50%-16px)] right-3 flex w-8 h-8 rounded-[50%] bg-white opacity-0 hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 group-hover/product:opacity-100">
						<ArrowRight className="size-4 stroke-[1.5px] stroke-black" />
					</Button>
				</div>
				<div className="flex items-center justify-between w-full">
					<Link
						href="/"
						className="text-xl font-mono font-medium uppercase tracking-wider leading-lg"
					>
						{data.title}
					</Link>
					<span className="font-medium text-lg tracking-wider leading-md">
						{data.currency} {data.variants[0].price / 100 + "0"}
					</span>
				</div>
			</div>
			<div className="flex flex-col gap-6 pt-4">
				<span className="text-xl font-medium leading-lg tracking-wider">
					Tell us why you decide cancel the order?
				</span>
				<form className="flex flex-col justify-between gap-4" onSubmit={onSubmit}>
					<div className="flex flex-col gap-2">
						{reasonsData.map((item) => (
							<div
								key={item.id}
								className="group/reason flex items-center gap-3"
							>
								<Checkbox id={item.id} className="peer" />
								<Label
									htmlFor={item.id}
									className="text-base text-black/75 leading-md group-hover/reason:text-black peer-data-[checked]:text-black transition-brand"
								>
									{item.text}
								</Label>
							</div>
						))}
					</div>
					<div className="flex flex-col items-start gap-[6px]">
						<Label htmlFor="textarea" className="text-base text-black leading-md">
							Describe a reason
						</Label>
						<Textarea
							id="textarea"
							placeholder="Message..."
							className="min-h-[100px]"
						/>
					</div>
					<Button type="submit">Report</Button>
				</form>
			</div>
		</div>
	);
}
