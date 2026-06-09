import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Form from "@/components/widgets/form/form";

export default function Security() {
	return (
		<DashboardWrapper pageTitle="Security">
			<Form
				options={{
					title: "SECURITY DATA",
					oldPasswordField: true,
					newPasswordField: true,
					newPasswordConfirmField: true,
					buttonText: "Send code",
				}}
			/>
		</DashboardWrapper>
	);
}
