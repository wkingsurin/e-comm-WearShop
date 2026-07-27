"use server";

interface IProps {
    children: React.ReactNode;
}

export default async function CategoryLayout({ children }: IProps) {
    return <>{children}</>;
}
