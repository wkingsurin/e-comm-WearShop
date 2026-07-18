import { searchProducts } from "@/features/search/services/search.services";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const query = searchParams.get("q") ?? "";

    const products = await searchProducts(query);

    return NextResponse.json(products);
}
