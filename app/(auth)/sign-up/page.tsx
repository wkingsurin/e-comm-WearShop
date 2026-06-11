import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import Form from "@/components/widgets/form/form";

export default function SignUp() {
	return (
		<Main>
			<Section>
				<Container>
					<div className="flex justify-center">
						<Form
							options={{
								title: "REGISTRATION",
								subtitle: {
									value: "Already exists an account?",
									linkText: "Sign in",
									linkRef: "/sign-in",
								},
								nameField: true,
								lastNameField: true,
								emailField: true,
								passwordField: true,
								terms: {
									label: "I agree with the user agreement and privacy policy",
								},
								buttonText: "Sign up",
							}}
						></Form>
					</div>
				</Container>
			</Section>
		</Main>
	);
}
