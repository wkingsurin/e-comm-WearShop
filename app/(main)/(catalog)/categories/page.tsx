import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import CategoriesClient from "./client";
import { headers } from "next/headers";
import { userAgent } from "next/server";
import { notFound } from "next/navigation";

export default async function Categories() {
    const ua = await headers();
    const { device } = userAgent({ headers: ua });

    if (device.type !== "mobile") {
        notFound();
    }

    const categories: { id: string; label: string; href: string }[] = [
        { id: "1", label: "All products", href: "/products" },
        { id: "2", label: "Hoodies", href: "/products/hoodies" },
        { id: "3", label: "Jeans", href: "/products/jeans" },
        { id: "4", label: "T-Shirts", href: "/products/t-shirts" },
        { id: "5", label: "Sneakers", href: "/products/sneakers" },
        { id: "6", label: "Caps", href: "/products/caps" },
    ];

    return (
        <Section className="h-[calc(100dvh-76px-50px)] pt-0! pb-5!">
            <Container className="h-full">
                <CategoriesClient categories={categories} />
            </Container>
        </Section>
    );
}
