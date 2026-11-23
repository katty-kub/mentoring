# SUMMARY.md — TypeScript základy

Tahák k anotacím typů, odvozování typů, polím, objektům, union typům, funkcím a závěrečnému úkolu.

## Spuštění a kontrola

| Příkaz | Co dělá |
|---|---|
| `node task.ts` | Spustí kód a vypíše výsledek. Node nekontroluje TypeScriptové typy. |
| `npx tsc` | Zkontroluje TypeScriptové typy a vypíše chyby. Kód nespouští. |

Úkol je hotový, když program vypíše správný výsledek a `npx tsc` nehlásí chyby.

## 1. Type annotation (anotace typu)

Anotace typu říká TypeScriptu, jaký typ hodnoty má proměnná mít. Píše se za její jméno a před `=`:

```ts
let city: string = "Brno";
let temperature: number = 21;
let isRaining: boolean = false;
```

- `string` = text.
- `number` = číslo.
- `boolean` = `true` nebo `false`.
- Typy se v TypeScriptu obvykle píšou malými písmeny.

Když proměnné `temperature` přiřadíme text, například `temperature = "21"`, `npx tsc` ohlásí, že `string` nelze přiřadit k `number`.

## 2. Type inference (odvození typu)

Type inference znamená, že TypeScript odvodí typ z hodnoty. Když je typ jasný, nemusíme ho psát:

```ts
let count = 5; // number
const max = 5; // přesná hodnota 5
let tags = ["new", "sale"]; // string[]
let user = { name: "Eva", age: 30 };
// { name: string; age: number }
```

- `let count = 5` může později dostat jiné číslo, proto je jeho typ obecný `number`.
- `const max = 5` nelze přepsat, proto TypeScript může odvodit přesný typ `5`.
- U běžných lokálních proměnných typ často nemusíme psát. Typy jsou obzvlášť užitečné tam, kde data vstupují do programu, například u formulářů, API a parametrů funkcí.

## 3. Jak typy chytají bug před spuštěním

JavaScriptový operátor `+` může sčítat čísla nebo spojovat texty:

```ts
15 + "5"; // "155"
```

Proto může poplatek z formuláře, který přišel jako text `"5"`, způsobit chybný součet. Převod na číslo problém opraví:

```ts
const price: number = 15;
const feeFromForm: string = "5";
const fee: number = Number(feeFromForm);

const total: number = price + fee;
console.log(total); // 20
```

- Uvozovky znamenají text, i když uvnitř jsou číslice.
- `Number(feeFromForm)` převede text `"5"` na číslo `5`.
- Anotace `: number` pomáhají `npx tsc` zachytit, když se do číselného výpočtu dostane text.
- TypeScript kontroluje kód, ne obsah vstupu za běhu. Například `Number("abc")` vrátí `NaN`, a text je potřeba ještě ověřit.

## 4. Typ pole (array)

Typ pole se zapisuje jako `typ[]`. Část před hranatými závorkami říká, jaké hodnoty pole obsahuje:

```ts
const scores: number[] = [90, 85, 70];
```

- `number[]` = pole čísel.
- `string[]` = pole textů.
- `Array<number>` znamená totéž co `number[]`.
- `scores.push(95)` je v pořádku; `scores.push("90")` vyvolá typovou chybu.
- `const` brání přiřadit proměnné nové pole, ale obsah pole lze měnit.

## 5. Type alias (pojmenovaný typ objektu)

Type alias pojmenuje tvar objektu, abychom ho mohli používat na více místech:

```ts
type Book = {
  title: string;
  pages: number;
};

const dune: Book = { title: "Dune", pages: 412 };
const hobbit: Book = { title: "The Hobbit", pages: 310 };
```

- `type Book = ...` vytvoří jméno pro typ.
- `: Book` říká TypeScriptu, že objekt musí odpovídat tomuto typu.
- Typ popisuje vlastnosti a jejich typy, například `title: string`; konkrétní hodnoty patří do objektu.
- Povinná vlastnost, například `pages`, nesmí chybět.

## 6. Optional property (nepovinná vlastnost)

Otazník za názvem vlastnosti znamená, že ji objekt může vynechat:

```ts
type Contact = {
  name: string;
  phone?: string;
};

const contacts: Contact[] = [
  { name: "Eva", phone: "777 123" },
  { name: "Petr" },
];
```

Při čtení má `contact.phone` typ `string | undefined`: telefon buď obsahuje text, nebo chybí.

## 7. Kontrola nepovinné hodnoty a narrowing

Před použitím hodnoty, která může chybět, ji zkontrolujeme:

```ts
for (const contact of contacts) {
  if (contact.phone) {
    console.log(contact.phone.trim());
  } else {
    console.log("no phone");
  }
}
```

- Smyčka postupně zpracuje každý kontakt.
- `trim()` odstraní mezery na začátku a na konci textu.
- Uvnitř větve `if` TypeScript ví, že telefon je `string`.
- Toto zpřesnění typu podle kódu se nazývá narrowing (zúžení typu).
- Pozor: `""` je také falsy, takže spadne do větve `else`.
- `if (contact.phone)` používáme, když prázdný text chceme považovat za chybějící hodnotu. Přesná kontrola chybění je `contact.phone === undefined`.

## 8. Union type (sjednocený typ)

Svislá čára `|` znamená „nebo“:

```ts
let orderId: number | string = 1042;
console.log(orderId);

orderId = "A-1042";
console.log(orderId);
```

Proměnná může obsahovat číslo nebo text. Deklarovaný typ určuje povolené hodnoty. TypeScript zároveň podle přiřazení sleduje, jaký typ má hodnota právě na konkrétním řádku.

U parametru funkce, který může být číslo nebo text, je potřeba typ zkontrolovat před použitím metody pro text:

```ts
const printUppercase = (id: number | string) => {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
};
```

## 9. Literal type (doslovný typ)

Literal type omezuje hodnotu na přesný text nebo číslo. S unionem můžeme povolit jen několik konkrétních možností:

```ts
type Status = "open" | "closed";

let status: Status = "open";
let nextStatus: Status = "closed";
```

Přiřazení `status = "OPEN"` TypeScript odmítne. Literal types rozlišují velká a malá písmena, takže `"OPEN"` není totéž co `"open"`.

## 10. Function parameters (parametry funkce)

Typy parametrů popisují, jaké hodnoty funkce očekává:

```ts
const addVat = (price: number, rate: number) => {
  return price * rate;
};

const input = "100";
const rate = 1.21;

console.log(addVat(Number(input), rate)); // 121
```

- `price: number` a `rate: number` znamenají, že funkce čeká dvě čísla.
- `Number(input)` převede text z formuláře na číslo před voláním funkce.
- Typy hlídají také počet argumentů: pokud funkce vyžaduje dva a dostane jeden, `npx tsc` ohlásí chybu.
- Převod `Number("abc")` projde typovou kontrolou, ale za běhu vrátí `NaN`; vstup je potřeba ověřit.

## 11. Return type (návratový typ)

Návratový typ říká, jakou hodnotu funkce vrací. TypeScript ho obvykle odvodí z příkazů `return`:

| Příklad | Návratový typ |
|---|---|
| `return n * 2` | `number` |
| `return age >= 18` | `boolean` |
| `return "Hi " + name` | `string` |
| `return undefined` nebo text | `string \| undefined` |

Parametry jsou vstup do funkce, návratový typ je výstup. Když funkce má více `return` řádků, TypeScript spojí jejich typy do unionu. Návratový typ lze také uvést ručně za závorkou parametrů, například `(name: string): string => ...`.

## 12. Capstone (závěrečný úkol): produkty a slevy

U produktu může sleva chybět. Cena z formuláře přichází jako text, ale výpočet má pracovat s čísly. Text proto převedeme při vstupu do dat:

```ts
type Product = {
  name: string;
  price: number;
  discount?: number;
};

const penPriceFromForm = "35";

const products: Product[] = [
  { name: "Mug", price: 120, discount: 20 },
  { name: "Pen", price: Number(penPriceFromForm) },
  { name: "Bag", price: 400, discount: 50 },
];

for (const product of products) {
  const discount = product.discount ?? 0;
  const finalPrice = product.price - discount;

  console.log(product.name, finalPrice);
}
```

Výstup:

```
Mug 100
Pen 35
Bag 350
```

- `Product[]` říká, že jde o pole produktů.
- `price: number` zajišťuje, že výpočet používá čísla.
- `discount?: number` dovoluje slevu vynechat.
- `product.discount ?? 0` použije nulu, pokud sleva chybí. Oproti truthy kontrole zachová i platnou slevu `0`.
- Cena se odečítá v korunách: `price - discount`.

## Co jsem se naučila

- TypeScript rozlišuje deklarovaný typ `number | string` a typ, který podle dosavadního kódu zná na konkrétním řádku. Přiřazení hodnoty může typ zúžit; parametr funkce zůstává unionem, dokud ho neověřím třeba pomocí `typeof`.
- `.toUpperCase()` je dostupné jen pro řetězec.
- Když jsou data převedená už na vstupu, další převod není potřeba: hodnota zůstane číslem.
- Když `tsc` hlásí víc chyb, opravím první a spustím ho znovu.

**Jak typ chytí bug dřív, než se kód spustí?**
Když funkce nebo proměnná očekává `number`, TypeScript upozorní, pokud jí předám `string`. U poplatku přišlo `"5"` jako text, takže se při použití `+` s cenou `15` mohlo místo součtu vytvořit `"155"`. Převod `Number(feeFromForm)` z něj udělá číslo. `npx tsc` kontroluje typy ještě před spuštěním programu.

**Kdy typ psát a kdy ho nechat odvodit?**
Typ napíšu, když chci jasně popsat tvar dat nebo vytvořit pravidlo, které má TypeScript hlídat — třeba u objektu, pole, parametru funkce nebo hodnoty z formuláře. U jednoduché lokální proměnné s jasnou hodnotou, například `const count = 5`, ho TypeScript obvykle správně odvodí.

**Čím začnu, když dostanu nová data?**
Nejdřív si prohlédnu všechny hodnoty: jaké mají vlastnosti, které mohou chybět a které přišly jako text. Pak určím, jak mají data v programu vypadat, napíšu jejich typ a převedu nebo ošetřím vstupní hodnoty. Typové chyby mi potom ukážou, co ještě nesouhlasí.

## Rychlé zapamatování

- `string`, `number`, `boolean` popisují základní druhy hodnot.
- `typ[]` znamená pole hodnot daného typu.
- `type Name = ...` pojmenuje typ, který lze opakovaně použít.
- `?` označí nepovinnou vlastnost.
- `|` znamená „nebo“.
- `typeof` a podmínky pomáhají TypeScriptu zúžit typ.
- Formulářové hodnoty převáděj na správný typ a také ověř jejich obsah.
- `npx tsc` kontroluje typy; `node task.ts` spouští program.
