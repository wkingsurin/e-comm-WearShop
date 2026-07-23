"use client";

import { Input } from "@/components/ui/input";

interface IProps {
    query: string;
    changeQuery: (value: string) => void;
    setOpened: (open: boolean) => void;
}

export default function SearchInput({ query, changeQuery, setOpened }: IProps) {
    return (
        <div className="flex gap-4 flex-1">
            <Input
                type="text"
                placeholder="Search..."
                className="bg-black/20 md:bg-black/5"
                value={query}
                onChange={(e) => changeQuery(e.target.value)}
                onFocus={() => setOpened(true)}
            />
        </div>
    );
}
