// Napiš arrow function (šipkovou funkci) markDone. Dostane todo, vrátí nové todo s done: true.
// Vypiš nové todo, pak původní. Původní se nesmí změnit.
// { title: "a", done: false } → { title: 'a', done: true }

const todo = { title: "Write SUMMARY", done: false };

// tvůj kód

const markDone = (todo) => {
    return { ...todo, done: true };
};

const newTodo = markDone(todo);

console.log(newTodo);
console.log(todo);

// node task.js má vypsat:
// { title: 'Write SUMMARY', done: true }
// { title: 'Write SUMMARY', done: false }


/*
Understand – zadání vlastními slovy
Vytvořím funkci markDone, která dostane úkol a vrátí nový objekt. Ten bude mít stejné vlastnosti jako původní úkol, ale done bude nastavené na true. Původní objekt se nezmění. Nejdřív vypíšu nový objekt a potom původní.
Příklady: input → output
1. Vstup: { title: "a", done: false }
   Nový objekt: { title: "a", done: true }
   Původní objekt zůstane: { title: "a", done: false }
2. Vstup: { title: "Buy milk", done: false }
   Nový objekt: { title: "Buy milk", done: true }
   Původní objekt zůstane: { title: "Buy milk", done: false }
Edge case: Úkol už má done: true. Funkce i tak vrátí nový objekt s done: true a původní objekt nezmění.

...todo vytvoří kopii původního úkolu, takže se zachová například jeho název. Hodnota done: true v kopii změní stav úkolu, aniž by upravila původní objekt. return pošle tuto novou kopii z funkce ven. Bez kopie bych přišla o ostatní vlastnosti úkolu a bez return by funkce vrátila undefined.

Funkce markDone je určená pro jeden úkol, tedy jeden objekt. Když jí předám celé pole, nevytvoří správně upravený seznam. Pro úpravu všech úkolů použiju todos.map(markDone): tím vznikne nové pole s novými úkoly, které mají done: true, a původní seznam zůstane beze změny.
*/