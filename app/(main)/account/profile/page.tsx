import Form from "@/components/widgets/form/form";

export default function Profile() {
	return (
		<div className="flex w-full">
			<Form
				options={{
					title: "PERSONAL DATA",
					nameField: true,
					lastNameField: true,
					emailField: true,
					buttonText: "Save",
				}}
			/>
		</div>
	);
}
