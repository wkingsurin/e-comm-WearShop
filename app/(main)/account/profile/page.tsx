import DashboardWrapper from "@/components/shared/dashboard-wrapper";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Profile() {
	const session = await auth();

	if (!session) {
		redirect("/auth");
	}

	return (
		<DashboardWrapper pageTitle="Profile">
			<div>
				<span>ID:</span>
				<span>{session?.user?.id}</span>
			</div>
			<div>
				<span>Email:</span>
				<span>{session?.user?.email}</span>
			</div>
			<div>
				<span>Username:</span>
				<span>{session?.user?.name}</span>
			</div>
			<div>
				<span>Image:</span>
				<span>{session?.user?.image}</span>
			</div>
		</DashboardWrapper>
	);
}
