import SectionTitle from "@/components/shared/section-title";
import CheckoutClinet from "./client";
import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

export default function Checkout() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col gap-5">
                    <SectionTitle>Review & Place order</SectionTitle>
                    <CheckoutClinet />
                </div>
            </Container>
        </Section>
    );
}
