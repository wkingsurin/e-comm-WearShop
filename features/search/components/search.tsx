import { useEffect, useRef, useState } from "react";
import SearchInput from "./search-input";
import SearchResults from "./search-results";
import { useSearch } from "../hooks/use-search";

export default function Search() {
    const [query, setQuery] = useState("");
    const [opened, setOpened] = useState<boolean>(false);

    const { data: products = [] } = useSearch(query);

    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setQuery("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative flex-1 w-full md:w-auto" ref={searchRef}>
            <SearchInput
                query={query}
                changeQuery={setQuery}
                setOpened={setOpened}
            />
            {opened && query.length > 1 && products.length > 0 && (
                <SearchResults
                    products={products}
                    onClose={() => setOpened(false)}
                />
            )}
        </div>
    );
}
