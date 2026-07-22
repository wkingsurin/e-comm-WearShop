import { formatMoney } from "./format-money";

export function getCartItemTotals(item: { price: number; quantity: number }) {
    const total = item.price * item.quantity;

    return {
        total,
        formattedMoney: formatMoney(total),
        formattedPrice: formatMoney(item.price),
    };
}
