"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { normalizeSegment } from "./(default)/account/normalize-segment";

export function useSegment() {
    const segment = useSelectedLayoutSegment();

    if (!segment) {
        throw new Error("Incorrect segment type");
    }

    return normalizeSegment(segment);
}
