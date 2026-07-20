"use client";

import BackButton from "@/components/shared/back-button";
import SectionTitle from "@/components/shared/section-title";
import { AccountSegment } from "../account-segment";

export default function PageTitle() {
    const segment = AccountSegment();

    return (
        <div className="flex gap-3 lg:flex-row items-center lg:gap-4 px-3 md:px-0!">
            <BackButton />
            <SectionTitle>{segment}</SectionTitle>
        </div>
    );
}
