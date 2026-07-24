"use client";

import { SessionProvider } from "next-auth/react";
import QueryProvider from "./query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <QueryProvider>{children}</QueryProvider>
        </SessionProvider>
    );
}
