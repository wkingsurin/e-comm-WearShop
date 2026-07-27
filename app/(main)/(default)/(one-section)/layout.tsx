import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Menu from "@/features/menu/components/menu";
import Main from "@/components/main";

interface IProps {
    children: React.ReactNode;
}

export default async function MainLayout({ children }: IProps) {
    return (
        <>
            <Header />
            <Main>
                {children}
                <Menu />
            </Main>
            <Footer />
        </>
    );
}
