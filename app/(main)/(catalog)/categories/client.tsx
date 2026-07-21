"use client";

import CategoryCard from "./category-card";

interface IProps {
    categories: { id: string; label: string; href: string }[];
}

export default function CategoriesClient({ categories }: IProps) {
    return (
        <div className="grid grid-cols-2 gap-1 h-full">
            {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))}
        </div>
    );
}
