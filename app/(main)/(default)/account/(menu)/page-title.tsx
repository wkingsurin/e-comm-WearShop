"use client";

import { useSegment } from "@/app/(main)/use-segment";
import BackButton from "@/components/shared/back-button";
import SectionTitle from "@/components/shared/section-title";

export default function PageTitle() {
    const segment = useSegment();

    return (
        <div className="flex gap-3 lg:flex-row items-center lg:gap-4 px-3 md:px-0!">
            <BackButton />
            <SectionTitle>{segment}</SectionTitle>
        </div>
    );
}
