import Form from "@/components/widgets/form/form";

export default function Security() {
	return (
		<div className="flex w-full">
			<Form
				options={{
					title: "SECURITY DATA",
					oldPasswordField: true,
					newPasswordField: true,
					newPasswordConfirmField: true,
					buttonText: "Send code",
				}}
			/>
		</div>
	);
}
