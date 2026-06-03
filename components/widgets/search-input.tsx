"use client";

import { Search } from "lucide-react";
import useSearch from "../hooks/use-search";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { IProduct } from "@/lib/store/ui.store";

export default function SearchInput() {
	const { query, setQuery, results } = useSearch();

	return (
		<div className="relative hidden md:flex gap-4 flex-1">
			<Input
				type="text"
				placeholder="Search..."
				className="bg-black/5"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button size="icon-lg" onClick={() => {}}>
				<Search className="size-4 stroke-[2px]" />
			</Button>
			{query && (
				<div className="absolute left-0 top-12 w-full min-h-[240px] bg-white border-[1px] border-black/10 rounded-xl">
					{results.map((product: IProduct) => (
						<div key={product.id}>{product.title}</div>
					))}
				</div>
			)}
		</div>
	);
}
