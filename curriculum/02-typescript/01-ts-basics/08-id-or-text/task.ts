// orderId je někdy číslo, někdy text. Uprav jeho type (typ), aby šlo obojí.
// Pak do orderId ulož "A-1042" a vypiš ho.

let orderId: number | string = 1042;
console.log(orderId);

// tvůj kód

orderId = "A-1042";
console.log(orderId);

// node task.ts má vypsat:
// 1042
// A-1042
