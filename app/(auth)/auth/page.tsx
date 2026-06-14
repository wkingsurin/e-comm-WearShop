import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import OTPAuthForm from "../OTP-auth-form";
import Logo from "@/components/shared/logo";

export default async function SignIn() {
	return (
		<Main auth>
			<Section className="py-[30px]">
				<Container>
					<div className="relative flex flex-col items-center w-full">
						<Logo />
						<div className="absolute top-[215px] flex justify-center w-full">
							<OTPAuthForm />
						</div>
					</div>
				</Container>
			</Section>
		</Main>
	);
}
