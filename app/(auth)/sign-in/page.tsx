import Main from "@/components/main";
import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import Form from "@/components/widgets/form/form";

export default function SignIn() {
	return (
		<Main>
			<Section className="py-[30px]">
				<Container>
					<div>
						<Form
							options={{
								title: "Authorization",
								subtitle: {
									value: "Yet don`t have an account?",
									linkText: "Sign up",
									linkRef: "/sign-up",
								},
								emailField: true,
								passwordField: true,
								buttonText: "Sign in",
							}}
						></Form>
					</div>
				</Container>
			</Section>
		</Main>
	);
}
