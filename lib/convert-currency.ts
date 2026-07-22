import { CURRENCIES } from "./currencies";

export function convertCurrency(currency: string) {
    return CURRENCIES[currency];
}
