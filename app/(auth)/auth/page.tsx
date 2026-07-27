import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import OTPAuthForm from "../OTP-auth-form";

export default async function SignIn() {
    return (
        <Main>
            <Section>
                <Container>
                    <div className="relative flex flex-col items-center w-full">
                        <div className="absolute top-10 flex justify-center w-full">
                            <OTPAuthForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </Main>
    );
}
