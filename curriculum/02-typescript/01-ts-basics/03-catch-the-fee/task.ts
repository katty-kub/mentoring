// Bug report (hlášení chyby): lístek za 15 plus poplatek 5 má stát 20. Obchod ukazuje 155.
// Oprav to. A ať TypeScript takovou chybu příště chytí sám.

const price: number = 15;
const feeFromForm: string = "5"; // z form field (políčka formuláře)
const fee: number = Number(feeFromForm);

const total: number = price + fee;
console.log(total);

// node task.ts má vypsat: 20

/*
Cíl úkolu

Opravit výpočet ceny lístku. Lístek stojí 15 a poplatek 5, takže celkem má být 20. Program ale vypisuje 155, protože poplatek přišel z formuláře jako text.

Proč vznikla chyba

const price = 15;   // číslo
const fee = "5";    // text, protože je v uvozovkách
const total = price + fee;

V JavaScriptu může operátor + čísla sčítat, ale také spojovat text. Když se spojí číslo 15 a text "5", vznikne text "155". Proto se místo sčítání provedlo spojení.

Opravený kód

const price: number = 15;
const feeFromForm: string = "5";
const fee: number = Number(feeFromForm);

const total: number = price + fee;
console.log(total);

Výstup:

20

Co znamenají jednotlivé řádky

price: number – cena má být číslo.

feeFromForm: string – hodnota z formuláře přichází jako text.

Number(feeFromForm) – převede text "5" na číslo 5.

fee: number – uložený poplatek má být číslo.

total: number – výsledek má být číslo.

price + fee – sečte číslo 15 a číslo 5.

Dvojtečka a typ za ní jsou TypeScriptová anotace. Říkají, jaký druh hodnoty má proměnná mít.

Obecný a konkrétní typ

Pro představu si typy můžeš rozdělit na obecné a konkrétní:

Obecný typ number povoluje různá čísla, například 5, 10 nebo -2.

Konkrétní typ 5 povoluje pouze přesně číslo 5. Tomuto typu se říká literálový typ.

let count: number = 5;
count = 10; // v pořádku: number může být jiné číslo

let onlyFive: 5 = 5;
onlyFive = 10; // TypeScript chyba: typ 5 dovoluje jen hodnotu 5

U const max = 5 TypeScript obvykle pozná konkrétní hodnotu 5 sám, protože const nelze přepsat. Jsou to ale dvě různé věci: const zakazuje změnit proměnnou, zatímco typ 5 omezuje, jakou hodnotu proměnná může mít. U běžných proměnných většinou stačí obecné typy number, string a boolean.

Jak pomůže TypeScript

TypeScript kontroluje typy ještě před spuštěním programu. Například když má být fee číslo a omylem se mu přiřadí text, TypeScript ohlásí chybu.

Anotace total: number také pomůže odhalit, kdyby se při výpočtu omylem použil text z formuláře přímo a výsledek byl text místo čísla.

TypeScript ale sám nekontroluje, jestli text z formuláře opravdu obsahuje platné číslo. Například Number("abc") vrátí NaN. V opravdové aplikaci by se takový vstup musel ještě ověřit.

Příklady input → output

Cena 10, poplatek z formuláře "2" → celkem 12. Bez převodu by se spojily na "102".

Cena 7, poplatek z formuláře "3" → celkem 10. Bez převodu by se spojily na "73".

Edge case (okrajový případ)

Když uživatel do políčka místo čísla napíše "abc", převod Number("abc") vrátí NaN (neplatné číslo). Program by měl takový vstup zachytit a uživateli říct, že má zadat číslo.

Plan (plán)

Poplatek z formuláře je text, proto ho převedu na číslo.

U proměnné fee uvedu typ number, aby TypeScript hlídal, že v ní má být číslo.

Sečtu cenu a číselný poplatek.

Spustím program a ověřím, že výsledek je 20.

What if (co kdyby)

Pokud musím zachovat původní text z formuláře, ponechám ho třeba v feeFromForm a vytvořím další proměnnou:

const fee: number = Number(feeFromForm);

Původní text zůstane zachovaný a pro výpočet použiju převedené číslo.

Jak úkol spustit a zkontrolovat

Z kořene repozitáře lze spustit soubor:

node curriculum/02-typescript/01-ts-basics/03-catch-the-fee/task.ts

Program má vypsat 20.

TypeScriptové typy zkontroluje příkaz:

npx tsc

node soubor spouští. npx tsc kontroluje TypeScript a vypíše případné typové chyby.
*/