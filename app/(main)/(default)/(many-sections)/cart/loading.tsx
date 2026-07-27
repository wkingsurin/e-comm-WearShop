"use client";

import CartSkeleton from "@/features/cart/components/skeleton/cart-skeleton";
import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import BackButton from "@/components/shared/back-button";
import SectionTitle from "@/components/shared/section-title";
import { useSession } from "next-auth/react";
import ProtectedState from "@/components/shared/protected-state";
import { Lock } from "lucide-react";

export default function CartLoading() {
    const { status } = useSession();

    if (status === "unauthenticated") {
        return (
            <Section>
                <Container className="px-0! md:px-4!">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 lg:flex-row items-center lg:gap-4 px-3 md:px-0!">
                            <BackButton />
                            <SectionTitle>Cart</SectionTitle>
                        </div>
                        <div className="flex items-center justify-center min-h-[598px] w-full">
                            <ProtectedState
                                icon={Lock}
                                description="Save your cart, track your orders and checkout faster."
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        );
    }

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
