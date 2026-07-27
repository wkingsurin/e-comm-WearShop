"use client";

import ProtectedState from "@/components/shared/protected-state";
import FavoritesSkeleton from "@/features/favorites/components/skeleton/favorites-skeleton";
import { Lock } from "lucide-react";
import { useSession } from "next-auth/react";

export default function FavoritesLoading() {
    const { status } = useSession();

    if (status === "unauthenticated") {
        return (
            <ProtectedState
                icon={Lock}
                description="Sign in to keep your wishlist available on every device."
            />
        );
    }
    
    return <FavoritesSkeleton />;
}
