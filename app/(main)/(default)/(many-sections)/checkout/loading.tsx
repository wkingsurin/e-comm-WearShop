import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import CheckoutSkeleton from "@/features/checkout/components/skeleton/checkout-skeleton";

export default function CheckoutLoading() {
    return (
        <Section>
            <Container className="px-0! md:px-4!">
                <CheckoutSkeleton />
            </Container>
        </Section>
    );
}
