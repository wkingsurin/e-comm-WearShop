"use client";

import CartSkeleton from "@/features/cart/components/skeleton/cart-skeleton";
import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import BackButton from "@/components/shared/back-button";
import SectionTitle from "@/components/shared/section-title";

export default function CartLoading() {
    return (
        <Section>
            <Container className="px-0! md:px-4!">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3 lg:flex-row items-center lg:gap-4 px-3 md:px-0!">
                        <BackButton />
                        <SectionTitle>Cart</SectionTitle>
                    </div>
                    <CartSkeleton />
                </div>
            </Container>
        </Section>
    );
}
