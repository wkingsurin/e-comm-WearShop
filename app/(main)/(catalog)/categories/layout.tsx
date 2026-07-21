import Header from "@/components/header/header";
import Main from "@/components/main";
import Menu from "@/features/menu/components/menu";

interface IProps {
    children: React.ReactNode;
}

export default function CategoriesLayout({ children }: IProps) {
    return (
        <>
            <Header />
            <Main>
                {children}
                <Menu />
            </Main>
        </>
    );
}
