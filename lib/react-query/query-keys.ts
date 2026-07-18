export const queryKeys = {
    profile: ["profile"],
    favorites: ["favorites"],
    cart: ["cart"],
    checkout: ["checkout"],
    orders: () => ["orders"],
    order: (id: string) => ["orders", id],
    search: (query: string) => ["search", query],
};
