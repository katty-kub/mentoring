SUMMARY.md — Modern JavaScript
Tahák k funkcím, spread syntaxi, kopiím, objektům a destructuringu.
1. Arrow function
Arrow function (šipková funkce) je kratší zápis funkce pomocí =>.
const add = (a, b) => a + b;
Když má tělo funkce složené závorky, použijeme return, pokud má funkce vrátit hodnotu:
const add = (a, b) => {
  return a + b;
};
Funkce, která jen něco vypisuje pomocí console.log, nemusí vracet hodnotu.
2. Spread syntaxe ... u polí
Spread syntaxe rozbalí položky pole:
const sizes = ["S", "M"];
const copiedSizes = [...sizes]; // nové pole: ["S", "M"]
Spojení dvou polí bez změny původních:
const morning = ["coffee", "email"];
const afternoon = ["review", "deploy"];

const allTasks = [...morning, ...afternoon];
// ["coffee", "email", "review", "deploy"]
3. Přiřazení seznamu není kopie
Tento zápis nevytvoří nové pole:
const guestCart = menu;
Proměnné guestCart a menu pak odkazují na stejné pole. Změna přes jednu proměnnou se projeví i při čtení přes druhou.

Kopii pole vytvoříme takto:
const guestCart = [...menu];
4. Spread syntaxe u objektů
...user zkopíruje vlastnosti objektu do nového objektu:
const user = { name: "Eva", city: "Brno" };
const userCopy = { ...user };
Když se stejná vlastnost objeví víckrát, platí poslední hodnota:
const movedUser = { ...user, city: "Ostrava" };
// city je "Ostrava"

const originalCity = { city: "Ostrava", ...user };
// city je "Brno"
5. Změna vlastnosti bez změny původního objektu
Rozbal starý objekt do nového a potom přepiš jednu vlastnost:
const product = { name: "tea", price: 45 };
const newProduct = { ...product, price: 49 };
Výsledkem jsou dva objekty:
newProduct // { name: "tea", price: 49 }
product    // { name: "tea", price: 45 }
Pořadí je důležité: price: 49 musí být za ...product, aby přepsalo původní cenu v kopii.
6. Destructuring (rozložení)
Pole: podle pořadí
const sizes = ["S", "M", "L"];
const [first, second] = sizes;
// first je "S", second je "M"
Objekt: podle názvu vlastnosti
const product = { name: "tea", price: 45 };
const { name, price } = product;
// name je "tea", price je 45
Pokud vlastnost v objektu chybí, její hodnota je undefined. Výchozí hodnotu můžeme nastavit takto:
const { color } = product;       // color je undefined
const { stock = 0 } = product;   // stock je 0
7. Destructuring v parametru funkce
Místo přijetí celého objektu a psaní user.name nebo user.city můžeme vlastnosti vybrat rovnou v parametru:
const printUser = ({ name, city }) => {
  console.log(`${name} (${city})`);
  console.log(`Hi ${name}!`);
};

printUser({ name: "Eva", city: "Brno" });
Funkce dostane objekt, ale uvnitř používá přímo proměnné name a city. Další vlastnosti objektu, například age, může ignorovat.

Výchozí hodnota parametru funguje i zde:
const printUser = ({ name, city = "?" }) => {
  console.log(`${name} (${city})`);
};
8. Vrácení nového objektu z funkce
return pošle hodnotu z funkce zpět volajícímu kódu. console.log hodnotu pouze vypíše.
const markDone = (todo) => {
  return { ...todo, done: true };
};

const todo = { title: "Write SUMMARY", done: false };
const updatedTodo = markDone(todo);

console.log(updatedTodo); // done: true
console.log(todo);        // done: false
- ...todo zkopíruje původní vlastnosti.
- done: true nastaví novému objektu dokončený stav.
- return vrátí nový objekt.
- Původní todo zůstane beze změny.
Bez ...todo by se ostatní vlastnosti, například title, do nového objektu nezkopírovaly. Bez return by funkce vrátila undefined.
9. Použití funkce pro seznam úkolů
Funkce markDone upravuje jeden objekt. Pro vytvoření nového pole, kde bude hotový každý úkol, použijeme map:
const updatedTodos = todos.map(markDone);
map zavolá markDone pro každou položku a vrátí nové pole. Původní pole a úkoly zůstanou beze změny.
Rychlé zapamatování
- Pole se rozbaluje podle pořadí položek.
- Objekt se rozbaluje podle názvů vlastností.
- [...array] a { ...object } vytvoří mělkou kopii.
- Při přepsání vlastnosti rozhoduje pořadí; pozdější hodnota vyhrává.
- return vrací hodnotu z funkce, console.log ji jen vypisuje.