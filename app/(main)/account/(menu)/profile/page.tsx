import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import DashboardWrapperTitle from "@/components/shared/dashboard-wrapper-title";
import ProfileClient from "./client";

export default async function Profile() {
    return (
        <DashboardWrapper
            pageTitle={<DashboardWrapperTitle title="Profile" />}
            className="min-h-auto"
        >
            <ProfileClient />
        </DashboardWrapper>
    );
}
