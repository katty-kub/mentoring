// scores mají být jen čísla. Dej scores takový type (typ), aby tam text nešel dát.
// [90, 85, 70] → [ 90, 85, 70 ]

const scores: number[] = [90, 85, 70];

console.log(scores);

// node task.ts má vypsat: [ 90, 85, 70 ]

/*
Cíl úkolu

Seznam scores má obsahovat pouze čísla. V původním kódu je hodnota "85" zapsaná v uvozovkách, takže je to text (typ string), ne číslo (typ number). Úkolem je to opravit a říct TypeScriptu, že jde o seznam čísel.

Původní kód a problém

const scores = [90, "85", 70];

console.log(scores);

Čísla 90 a 70 jsou správně. Hodnota "85" je ale text, protože je v uvozovkách. Seznam tak obsahuje různé typy hodnot.

Opravený kód

const scores: number[] = [90, 85, 70];

console.log(scores);

Očekávaný výstup:

[ 90, 85, 70 ]

Uvozovky kolem 85 jsou odstraněné a za název proměnné je přidaný typ number[].

Co znamená number[]

number znamená jedno číslo, například 90.

number[] znamená seznam čísel.

Značky [] za typem říkají TypeScriptu, že to není jen jedno číslo, ale pole (array) čísel.

const oneScore: number = 90;         // jedno číslo
const scores: number[] = [90, 85];   // seznam čísel

Podobně existují například string[] pro seznam textů a boolean[] pro seznam hodnot true a false.

Jak TypeScript pomůže

Zápis number[] říká: „Každá položka v tomto seznamu musí být číslo.“

const scores: number[] = [90, 85, 70];

scores.push(95);     // v pořádku, 95 je číslo
scores.push("90");   // TypeScript chyba, "90" je text

Uvozovky znamenají text, i když uvnitř vidíme číslice. Číslo 90 a text "90" nejsou stejný typ.

TypeScript typy kontroluje před spuštěním. Chybný kód může JavaScript spustit, ale kontrola TypeScriptem má na problém upozornit.

Co dělá push

scores.push(hodnota) přidá novou hodnotu na konec seznamu scores.

scores.push(95) přidá číslo 95.

scores.push("90") se seznamem typu number[] TypeScript odmítne, protože text není číslo.

Pozor: const zakazuje znovu přiřadit proměnnou scores, ale samo o sobě nezakazuje měnit obsah pole. Proto lze přidat číslo pomocí push.

Příklady input → output

Vstupní seznam [90, 85, 70] → výpis [ 90, 85, 70 ].

Vstupní seznam [100, 0, 75] → výpis [ 100, 0, 75 ].

console.log(scores) seznam vypíše; hodnoty nemění.

Edge case (okrajový případ)

Když se někdo pokusí přidat text místo čísla, například scores.push("90"), TypeScript ohlásí chybu. Je to žádoucí: TypeScript tak pomáhá dodržet pravidlo, že seznam obsahuje jen čísla.

Prázdný seznam [] je pro typ number[] povolený. Neobsahuje žádnou špatnou položku; později do něj lze přidávat pouze čísla.

Plan (plán)

// 1. Nastavím scores typ number[], protože je to seznam čísel.
// 2. Odstraním uvozovky kolem 85, aby to bylo číslo, ne text.
// 3. Vypíšu scores a ověřím, že seznam obsahuje jen čísla.

Explain (vysvětlení vlastními slovy)

„Typ number[] říká TypeScriptu, že všechny položky v scores musí být čísla. Kdybych napsala scores.push("90"), TypeScript ohlásí chybu, protože "90" je text. scores.push(90) je v pořádku.“

Jak úkol spustit a zkontrolovat

Z kořene repozitáře lze spustit soubor:

node curriculum/02-typescript/01-ts-basics/04-typed-list/task.ts

Program má vypsat seznam čísel. TypeScriptové typy zkontroluješ příkazem:

npx tsc

node soubor spouští. npx tsc kontroluje TypeScriptové typy a vypíše případné typové chyby.
*/