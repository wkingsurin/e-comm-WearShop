import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import ProfileCardSkeleton from "../profile-card/skeleton/card-skeleton";

export default function ProfileSkeleton() {
    return (
        <DashboardWrapper className="min-h-auto px-1! md:px-6! min-h-[598px]!">
            <ProfileCardSkeleton />
            <ProfileCardSkeleton />
        </DashboardWrapper>
    );
}
