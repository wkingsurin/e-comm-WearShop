import { auth } from "@/auth";
import {
    addLastSeen,
    getLastSeen,
} from "@/features/last-seen/services/last-seen.service";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();

    if (!session?.user.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const lastSeen = await getLastSeen(session.user.id);

    return NextResponse.json(lastSeen);
}

export async function POST(request: Request) {
    const session = await auth();

    if (!session?.user.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const { productId } = await request.json();

        const product = await addLastSeen(session.user.id, productId);

        return NextResponse.json({ product });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : "Internal server error",
            },
            { status: 500 },
        );
    }
}
