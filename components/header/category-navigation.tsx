"use client";

import Link from "next/link";
import { useState } from "react";

export default function CategoryNavigation() {
	const [activeId, setActiveId] = useState<string>("1");

	const list: { id: string; label: string; text: string }[] = [
		{ id: "1", label: "", text: "All" },
		{ id: "2", label: "hoodies", text: "Hoodies" },
		{ id: "3", label: "jeans", text: "Jeans" },
		{ id: "4", label: "t-shirts", text: "T-Shirts" },
		{ id: "5", label: "sneakers", text: "Sneakers" },
		{ id: "6", label: "caps", text: "Caps" },
	];

	const changeCategory = (categoryId: string) => {
		setActiveId((prevId) => (prevId === categoryId ? prevId : categoryId));
	};

	return (
		<nav className="hidden md:flex flex-wrap justify-between md:flex-nowrap md:justify-normal gap-3 text-black/50">
			{list.map((item) => (
				<Link
					key={item.id}
					href={`/products/${item.label}`}
					className={`hover:text-black transition-brand ${
						item.id === activeId ? "text-black" : "text-black/50"
					}`}
					onClick={() => changeCategory(item.id)}
					prefetch={false}
				>
					{item.text}
				</Link>
			))}
		</nav>
	);
}
