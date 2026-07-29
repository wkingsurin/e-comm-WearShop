"use client";

import Link from "next/link";
import { IServiceLinkProps } from "@/types/components/shared/shared.types";

export default function ServiceLink({ href, children }: IServiceLinkProps) {
    return (
        <Link
            href={href.includes("cart") ? `/${href}` : `/account/${href}`}
            className="flex gap-[6px] items-center"
            prefetch={false}
        >
            {children}
        </Link>
    );
}
