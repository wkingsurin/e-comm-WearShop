import { IProduct } from "@/types/store/ui.types";

export async function searchProducts(query: string): Promise<IProduct[]> {
    const response = await fetch(`/api/search?q=${query}`);

    if (!response.ok) {
        throw new Error("Failed to search products");
    }

    return response.json();
}
