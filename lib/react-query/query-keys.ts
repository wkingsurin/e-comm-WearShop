export const queryKeys = {
    profile: ["profile"],
    favoritesMap: ["favoritesMap"],
    favorites: ["favorites"],
    cart: ["cart"],
    checkout: ["checkout"],
    orders: () => ["orders"],
    order: (id: string) => ["orders", id],
    lastSeen: ["lastSeen"],
    search: (query: string) => ["search", query],
};
