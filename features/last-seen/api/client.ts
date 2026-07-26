import { IProduct } from "@/types/store/ui.types";

export async function getLastSeen(): Promise<IProduct[]> {
    const response = await fetch("/api/last-seen", { credentials: "include" });

    if (!response.ok) {
        throw new Error("Failed to fetch last seen products");
    }

    return response.json();
}

export async function addLastSeen(productId: string) {
    const response = await fetch("/api/last-seen", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
        throw new Error("Failed to add product to last seen");
    }

    return response.json() as Promise<IProduct>;
}
