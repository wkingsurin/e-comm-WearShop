import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import LastSeenSection from "@/features/last-seen/components/last-seen-section";
import SuccessClient from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getOrder } from "@/features/orders/services/order.service";
import { auth } from "@/auth";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { queryKeys } from "@/lib/react-query/query-keys";

interface IProps {
    params: Promise<{ orderId: string }>;
}

export default async function SuccessPage({ params }: IProps) {
    const session = await auth();

    if (!session?.user.id) {
        throw new Error("Unauthorized");
    }

    const { orderId } = await params;

    return (
        <Section>
            <Container className="px-0! md:px-4!">
                <SuccessClient orderId={orderId} />
            </Container>
        </Section>
    );
}
