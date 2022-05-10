export function toBRCurrency(n: number) {
    return n.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
}
