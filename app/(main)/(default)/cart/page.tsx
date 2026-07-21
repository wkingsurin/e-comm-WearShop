import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionTitle from "@/components/shared/section-title";
import LastSeenSection from "@/components/widgets/last-seen-section";
import CartClient from "./client";
import BackButton from "@/components/shared/back-button";

export default async function Cart() {
    const payments: { id: string; label: string; image: string }[] = [
        { id: "1", label: "PayPal", image: "image-pay-1.png" },
        { id: "2", label: "Visa", image: "image-pay-2.png" },
        { id: "3", label: "Mastercard", image: "image-pay-3.png" },
    ];

    return (
        <>
            <Section>
                <Container className="px-0! md:px-4!">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 lg:flex-row items-center lg:gap-4 px-3 md:px-0!">
                            <BackButton />
                            <SectionTitle>Cart</SectionTitle>
                        </div>
                        <CartClient payments={payments} />
                    </div>
                </Container>
            </Section>
            <LastSeenSection />
        </>
    );
}
