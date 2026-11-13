// Predict (předpověz): jaký type (typ) TypeScript pozná sám? Napiš tip za každý řádek.
// Pak najeď myší na jméno proměnné ve VS Code a porovnej.
// let name = "Eva" → string

let count = 5; // tip: number
const max = 5; // tip: 5
let price = 9.5; // tip: number
let tags = ["new", "sale"]; // tip: string[]
let mixed = [1, "two"]; // tip: (string | number) []
let user = { name: "Eva", age: 30 }; // tip: { name: string; age: number}

console.log(count, max, price, tags, mixed, user);

/*
Stručné poznámky: Type inference
Type inference znamená, že TypeScript odhadne typ podle hodnoty. Když je typ jasný, nemusím ho psát sama.
let count = 5; // number
const max = 5; // 5
let price = 9.5; // number
let tags = ["new", "sale"]; // seznam textů: string[]
let mixed = [1, "two"]; // seznam čísel nebo textů: (number | string)[]
let user = { name: "Eva", age: 30 }; // name je string, age je number

- | znamená nebo.
- [] znamená seznam.
- const max = 5 má typ 5, protože jeho hodnota nejde změnit.
- tags.push(3) způsobí chybu, protože tags obsahuje texty a 3 je číslo.
*/