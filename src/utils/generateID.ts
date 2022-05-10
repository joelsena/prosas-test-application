export function GenerateID(tam: number) {
    let id = "";
    for (let c = 0; c < tam; c++) {
        id += String(Math.ceil(Math.random() * 9));
    }

    return id;
}
