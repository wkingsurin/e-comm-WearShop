import { auth } from "@/auth";

export default async function getCurrentUser() {
    const session = await auth();

    if (!session?.user.id) {
        return null;
    }

    return {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        cartId: session.user.cartId,
    };
}
