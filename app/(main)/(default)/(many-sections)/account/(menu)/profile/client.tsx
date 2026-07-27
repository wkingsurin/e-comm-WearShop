"use client";

import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import ProtectedState from "@/components/shared/protected-state";
import { Button } from "@/components/ui/button";
import AddressForm from "@/features/profile/components/address-form/form";
import ProfileCard from "@/features/profile/components/profile-card/card";
import ProfileForm from "@/features/profile/components/profile-form/form";
import ProfileSkeleton from "@/features/profile/components/skeleton/profile-skeleton";
import { EMPTY_USER_PROFILE } from "@/features/profile/constants";
import useUserProfile from "@/features/profile/hooks/use-user-profile";
import ValidAddress from "@/features/profile/validate-address";
import { useUIStore } from "@/lib/store/ui.store";
import {
    Globe,
    Lock,
    LogOut,
    Mail,
    MapPinHouse,
    Pen,
    UserRound,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default function ProfileClient() {
    const router = useRouter();

    const session = useSession();
    const authorized = session.status === "authenticated";

    const { data: profile = EMPTY_USER_PROFILE, isPending } = useUserProfile();

    const openDialog = useUIStore((s) => s.openDialog);

    const shippingData = {
        country: profile.address.country ?? "",
        city: profile.address.city ?? "",
        street: profile.address.street ?? "",
        postalCode: profile.address.postalCode ?? "",
    };

    const handleChangeAddress = () =>
        openDialog({
            title: "Add address",
            content: <AddressForm initialValues={shippingData} />,
        });

    const handleChangeProfile = () => {
        openDialog({
            title: "Change profile data",
            content: (
                <ProfileForm
                    initialValues={{
                        firstName: profile.name.split(" ")[0],
                        lastName: profile.name.split(" ")[1],
                    }}
                />
            ),
        });
    };

    if (!authorized) {
        return (
            <ProtectedState
                icon={Lock}
                description="Edit your personal data and address."
            />
        );
    }

    if (isPending) {
        return <ProfileSkeleton />;
    }

    return (
        <DashboardWrapper className="px-1! md:px-6!">
            <ProfileCard title="Personal information">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center w-7 h-7 bg-black/15 rounded-md">
                            <UserRound className="size-4 stroke-[1.5px] stroke-white" />
                        </div>
                        <span className="tracking-wider leading-base">
                            {profile.name}
                        </span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center w-7 h-7 bg-black/15 rounded-md">
                            <Mail className="size-4 stroke-[1.5px] stroke-white" />
                        </div>
                        <span className="tracking-wider leading-base">
                            {profile.email}
                        </span>
                    </div>
                    <Button
                        variant="link"
                        className="gap-2 hover:no-underline h-auto py-1 px-2 rounded-md text-md hover:bg-black hover:text-white transition-brand"
                        onClick={handleChangeProfile}
                    >
                        Edit <Pen className="size-3" />
                    </Button>
                </div>
            </ProfileCard>
            <ProfileCard title="Default delivery information">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center w-7 h-7 bg-black/15 rounded-md">
                            <MapPinHouse className="size-4 stroke-[1.5px] stroke-white" />
                        </div>
                        <span className="tracking-wider leading-base w-[calc(100%-28px-12px)]">
                            {profile.address.street ? (
                                `${profile.address.street}, ${profile.address.city}, ${profile.address.postalCode}`
                            ) : (
                                <span className="text-black/50 tracking-wider leading-base">
                                    No address
                                </span>
                            )}
                        </span>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center w-7 h-7 bg-black/15 rounded-md">
                            <Globe
                                className={`size-4 stroke-[1.5px] stroke-white`}
                            />
                        </div>
                        <span className="tracking-wider leading-base w-[calc(100%-28px-12px)]">
                            {profile.address.country || (
                                <span className="text-black/50 tracking-wider leading-base">
                                    No country
                                </span>
                            )}
                        </span>
                    </div>
                    <Button
                        variant="link"
                        className="gap-2 hover:no-underline h-auto py-1 px-2 rounded-md text-md hover:bg-black hover:text-white transition-brand"
                        onClick={handleChangeAddress}
                    >
                        {ValidAddress(shippingData) ? (
                            <>
                                Edit <Pen className="size-3" />
                            </>
                        ) : (
                            "Add address"
                        )}
                    </Button>
                </div>
            </ProfileCard>
            <Button
                variant="link"
                className="md:hidden group/log-out flex justify-start gap-3 w-full h-[50px] px-3 rounded-xl bg-[#F51E1E]/10 transition duration-100 no-underline! cursor-pointer"
                onClick={async () => {
                    await signOut({ redirect: false });
                    router.refresh();
                    redirect("/auth");
                }}
            >
                <LogOut className="size-5 stroke-[1.5px] stroke-[#F51E1E]" />
                <p className="font-mono tracking-wide text-[#F51E1E]/75">
                    Sign out
                </p>
            </Button>
        </DashboardWrapper>
    );
}
