"use client";

import { Button } from "@/components/ui/button";
import { validateCart } from "@/features/orders/services/order.validation";
import AddressForm from "@/features/profile/components/address-form/form";
import ProfileCard from "@/features/profile/components/profile-card/card";
import ProfileForm from "@/features/profile/components/profile-form/form";
import { EMPTY_USER_PROFILE } from "@/features/profile/constants";
import useUserProfile from "@/features/profile/hooks/use-user-profile";
import ValidAddress from "@/features/profile/validate-address";
import { useUIStore } from "@/lib/store/ui.store";
import { Globe, Mail, MapPinHouse, Pen, UserRound } from "lucide-react";

export default function ProfileClient() {
    const { data: profile = EMPTY_USER_PROFILE } = useUserProfile();

    const openDialog = useUIStore((s) => s.openDialog);

    const shippingData = {
        country: profile.address.country,
        city: profile.address.city,
        street: profile.address.street,
        postalCode: profile.address.postalCode,
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

    return (
        <>
            <ProfileCard title="Personal information">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex gap-3 items-center">
                        <UserRound className="size-4 stroke-[1.5px]" />
                        <span className="tracking-wider leading-base">
                            {profile.name}
                        </span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Mail className="size-4 stroke-[1.5px]" />
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
                        <MapPinHouse
                            className={`size-4 stroke-[1.5px] ${profile.address.street ? "stroke-black" : "stroke-black/50"}`}
                        />
                        <span className="tracking-wider leading-base">
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
                        <Globe
                            className={`size-4 stroke-[1.5px] ${profile.address.country ? "stroke-black" : "stroke-black/50"}`}
                        />
                        <span className="tracking-wider leading-base">
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
        </>
    );
}
