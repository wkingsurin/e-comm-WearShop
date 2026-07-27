import CheckoutClinet from "./client";
import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import getCurrentUser from "@/lib/auth/get-current-user";
import { notFound } from "next/navigation";
import LastSeenSection from "@/features/last-seen/components/last-seen-section";

export default async function Checkout() {
    const user = await getCurrentUser();

    if (!user) {
        return notFound();
    }

    return (
        <Section>
            <Container className="px-0! md:px-4!">
                <CheckoutClinet />
            </Container>
        </Section>
    );
}
