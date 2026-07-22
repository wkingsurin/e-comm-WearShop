import { formatMoney } from "./format-money";

export function getItemPrices(price: number, oldPrice: number) {
    return {
        formattedPrice: formatMoney(price),
        formattedOldPrice: formatMoney(oldPrice),
    };
}
