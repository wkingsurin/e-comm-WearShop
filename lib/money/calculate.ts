export function calculateItemTotal(price: number, quantity: number) {
    return price * quantity;
}

export function calculateSubtotal(
    items: { price: number; quantity: number }[],
) {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
