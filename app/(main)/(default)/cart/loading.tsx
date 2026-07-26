"use client";

import CartSkeleton from "@/features/cart/components/skeleton/cart-skeleton";
import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import LastSeenSkeleton from "@/features/last-seen/components/skeleton/last-seen-skeleton";
import Skeleton from "@/components/shared/skeleton";

export default function CartLoading() {
    return (
        <>
            <Section>
                <Container className="px-0! md:px-4!">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 lg:flex-row items-center lg:gap-4 px-3 md:px-0!">
                            <Skeleton className="w-[70px] h-[18px]" />
                            <Skeleton className="w-30 h-6" />
                        </div>
                        <CartSkeleton />
                    </div>
                </Container>
            </Section>
            <LastSeenSkeleton />
        </>
    );
}
