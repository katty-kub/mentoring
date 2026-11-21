// Napiš type (typ) Book pro tyhle dvě knihy a dej ho oběma.
// type Point = { x: number; y: number }


// tvůj kód

type Book = {
    title: string;
    pages: number;
};

const dune: Book = { title: "Dune", pages: 412 }
const hobbit: Book = { title: "The Hobbit", pages: 310 };

console.log(dune.title, dune.pages);
console.log(hobbit.title, hobbit.pages);

// node task.ts má vypsat:
// Dune 412
// The Hobbit 310

/*
Cíl úkolu

Vytvořit pojmenovaný typ Book pro dvě knihy a přiřadit ho oběma proměnným. Typ popisuje, jaké vlastnosti má mít objekt knihy a jaké hodnoty v nich mají být.

Obě knihy mají stejný tvar:

title – název knihy, tedy text typu string.

pages – počet stran, tedy číslo typu number.

Type alias (typový alias)

Type alias je jméno, které dáme typu. Díky tomu můžeme stejný popis používat na více místech.

type Point = { x: number; y: number };

Point je jméno typu.

{ x: number; y: number } je tvar objektu.

Objekt typu Point musí mít vlastnosti x a y, obě jako čísla.

Stejný princip použijeme pro knihy.

Řešení

type Book = {
  title: string;
  pages: number;
};

const dune: Book = { title: "Dune", pages: 412 };
const hobbit: Book = { title: "The Hobbit", pages: 310 };

console.log(dune.title, dune.pages);
console.log(hobbit.title, hobbit.pages);

Očekávaný výstup:

Dune 412
The Hobbit 310

Jak číst zápis

const dune: Book = { title: "Dune", pages: 412 };

const vytvoří proměnnou, kterou později nelze znovu přiřadit.

dune je jméno proměnné.

: Book říká TypeScriptu, že objekt musí odpovídat typu Book.

Objekt za znakem = obsahuje konkrétní hodnoty knihy.

Book není další proměnná. Vytvořili jsme ho pomocí type Book = ... a potom ho použili jako popis obou objektů.

Proč píšeme typ jen jednou

Bez type aliasu bychom museli tvar knihy opakovat u každé knihy. S typem Book napíšeme pravidla jednou a použijeme je znovu:

const dune: Book = { title: "Dune", pages: 412 };
const hobbit: Book = { title: "The Hobbit", pages: 310 };

Názvy a počty stran se mohou lišit. Vlastnosti a jejich typy zůstávají stejné.

Co TypeScript hlídá

Chybějící vlastnost

Typ Book vyžaduje title i pages. Když u hobita vynecháme pages:

const hobbit: Book = { title: "The Hobbit" };

TypeScript vypíše chybu podobnou:

Property 'pages' is missing in type '{ title: string; }' but required in type 'Book'.

To znamená: „Objekt má název, ale chybí mu povinný počet stran.“

Vlastnost navíc

Když do knihy přidáme author, ale typ Book ji nepopisuje:

const dune: Book = {
  title: "Dune",
  pages: 412,
  author: "Frank Herbert",
};

TypeScript u tohoto objektového zápisu ohlásí, že vlastnost author není v typu Book.

Údaj může být pravdivý, ale objekt musí odpovídat popsanému typu. Pro tuto úlohu odstraňujeme author. Pokud by zadání chtělo autora ukládat, přidali bychom ho také do typu:

type Book = {
  title: string;
  pages: number;
  author: string;
};

Chyba kvůli neplatnému znaku

Pokud TypeScript ukáže chybu Invalid character, podívej se na znak označený vlnovkou ~. V tomto tasku byl omylem vložen znak ¨ za číslo stran.

Vlnovka ukazuje přibližně místo chyby. Odstraň neplatný znak a spusť kontrolu znovu. Následná chyba syntaxe může být jen důsledkem prvního neplatného znaku.

Jak číst výpis z tsc

Příklad:

task.ts:13:7 - error TS2741
Property 'pages' is missing ...

task.ts – soubor s chybou.

13 – číslo řádku.

7 – pozice/sloupec v řádku.

TS2741 – kód chyby.

Text chyby vysvětluje, co TypeScriptu chybí nebo neodpovídá.

Vlnovka ~ ukazuje místo, které kontrola označila.

Častá chyba: deklarace dvakrát

Pokud v souboru necháš původní const dune a pod něj přidáš další const dune, proměnná bude deklarovaná dvakrát. Uprav původní řádek na const dune: Book = ... místo přidávání druhého řádku. Totéž platí pro hobbit.

Kontrola a spuštění

Z kořene repozitáře zkontroluj TypeScript:

npx tsc

Pokud se po opravě nevypíše žádná chyba, kontrola prošla.

Soubor můžeš spustit:

node curriculum/02-typescript/01-ts-basics/05-book-type/task.ts

Výpis má být:

Dune 412
The Hobbit 310

npx tsc kontroluje typy a syntaxi. node program spouští a vypíše jeho výstup.

Shrnutí vlastními slovy

type Book pojmenuje očekávaný tvar knihy. Když napíšu const dune: Book, TypeScript kontroluje, že kniha má správné vlastnosti a hodnoty — v této úloze title jako text a pages jako číslo.
*/