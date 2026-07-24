import getCurrentUser from "@/lib/auth/get-current-user";
import { redirect } from "next/navigation";

interface IProps {
    children: React.ReactNode;
}

export default async function AuthLayout({ children }: IProps) {
    const user = await getCurrentUser();

    if (user) {
        redirect("/products");
    }

    return <div>{children}</div>;
}
