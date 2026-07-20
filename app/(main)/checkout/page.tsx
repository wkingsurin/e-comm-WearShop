import SectionTitle from "@/components/shared/section-title";
import CheckoutClinet from "./client";
import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import BackButton from "@/components/shared/back-button";

export default function Checkout() {
    return (
        <Section>
            <Container className="px-0! md:px-4!">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3 px-3 md:px-0!">
                        <BackButton />
                        <SectionTitle>Review & Place order</SectionTitle>
                    </div>
                    <CheckoutClinet />
                </div>
            </Container>
        </Section>
    );
}
