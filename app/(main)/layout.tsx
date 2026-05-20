import Header from "@/components/header";
import Footer from "@/components/footer";

interface IProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: IProps) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
