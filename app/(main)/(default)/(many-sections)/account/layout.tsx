import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { IAccountProps } from "@/types/account/account.types";

export default async function AccountLayout({ children }: IAccountProps) {
    return (
        <Section>
            <Container className="px-0! md:px-4!">{children}</Container>
        </Section>
    );
}
