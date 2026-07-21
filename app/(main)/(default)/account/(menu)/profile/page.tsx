import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import ProfileClient from "./client";

export default async function Profile() {
    return (
        <DashboardWrapper className="min-h-auto px-1! md:px-6!">
            <ProfileClient />
        </DashboardWrapper>
    );
}
