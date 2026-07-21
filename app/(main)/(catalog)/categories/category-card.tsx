import Link from "next/link";

interface IProps {
    category: { id: string; label: string; href: string };
}

export default function CategoryCard({ category }: IProps) {
    return (
        <Link
            href={category.href}
            className="flex items-center justify-center rounded-md bg-white p-3 font-medium tracking-wider leading-base hover:no-underline"
        >
            {category.label}
        </Link>
    );
}
