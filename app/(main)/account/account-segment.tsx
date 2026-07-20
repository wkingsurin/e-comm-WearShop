"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { normalizeSegment } from "./normalize-segment";

export function AccountSegment() {
    const segment = useSelectedLayoutSegment();

    if (!segment) {
        throw new Error('Incorrect segment type')
    }

    return normalizeSegment(segment);
}
