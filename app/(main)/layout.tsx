import Header from "@/components/header/header";
import Footer from "@/components/footer";
import { auth } from "@/auth";
import { redirect, RedirectType } from "next/navigation";

interface IProps {
	children: React.ReactNode;
}

export default async function MainLayout({ children }: IProps) {
	const session = await auth();
	console.log(`[session]:`, session);

	if (!session) {
		redirect("/auth", RedirectType.replace);
	}

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
