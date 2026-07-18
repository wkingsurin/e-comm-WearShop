import { IUser, UpdateUserAddressDTO, UpdateUserProfileDTO } from "../types";

export async function getUserProfile(): Promise<IUser> {
    const response = await fetch("/api/profile", { credentials: "include" });

    if (!response.ok) {
        const error = await response.json();

        console.error(error);

        throw new Error(error.message);
    }

    return response.json();
}

export async function updateUserAddress(data: UpdateUserAddressDTO) {
    const response = await fetch("/api/profile/update", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to update address");
    }
}

export async function updateUserProfile(data: UpdateUserProfileDTO) {
    const response = await fetch("/api/profile", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to update profile");
    }
}
