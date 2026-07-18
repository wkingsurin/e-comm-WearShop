export default function ValidAddress(data: {
    country: string;
    city: string;
    street: string;
    postalCode: string;
}) {
    if (data.country && data.city && data.street && data.postalCode) {
        return true;
    }

    return false;
}
