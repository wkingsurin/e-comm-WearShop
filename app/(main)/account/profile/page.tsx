import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import Form from "@/components/widgets/form/form";

export default function Profile() {
	return (
		<DashboardWrapper pageTitle="Profile">
			<Form
				options={{
					title: "PERSONAL DATA",
					nameField: true,
					lastNameField: true,
					emailField: true,
					buttonText: "Save",
				}}
			/>
		</DashboardWrapper>
	);
}
