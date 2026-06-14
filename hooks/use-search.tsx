// import { useMemo, useState } from "react";
// import useDebounce from "./use-debounce";
// import { searchProducts } from "@/lib/search/search-products";

// export default function useSearch() {
// 	const [query, setQuery] = useState("");

// 	const debouncedQuery = useDebounce(query);

// 	const results = useMemo(() => {
// 		return searchProducts(debouncedQuery);
// 	}, [debouncedQuery]);

// 	return { query, setQuery, results };
// }
