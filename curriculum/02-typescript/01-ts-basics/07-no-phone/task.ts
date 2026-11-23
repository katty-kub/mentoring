// Vypiš telefon každého kontaktu bez mezer okolo. Kdo telefon nemá: vypiš "no phone".
// " 777 123 " → 777 123

type Contact = { name: string; phone?: string };

const contacts: Contact[] = [
  { name: "Eva", phone: " 777 123 " },
  { name: "Petr" },
];

// tvůj kód

for (const contact of contacts) {
  if (contact.phone) {
    console.log(contact.phone.trim());
  } else {
    console.log("no phone");
  }
}

// node task.ts má vypsat:
// 777 123
// no phone
 /*
 Data a typ
type Contact = { name: string; phone?: string };

const contacts: Contact[] = [
  { name: "Eva", phone: " 777 123 " },
  { name: "Petr" },
];
- Contact[] znamená pole kontaktů.
- phone?: string znamená, že vlastnost phone je nepovinná.
- Telefon tedy může být text (string) nebo může chybět. Když chybí, jeho hodnota je za běhu undefined.
- Otazník u vlastnosti neznamená, že telefon má hodnotu null; v tomto příkladu může být string | undefined.

Řešení pomocí smyčky a podmínky
for (const contact of contacts) {
  if (contact.phone) {
    console.log(contact.phone.trim());
  } else {
    console.log("no phone");
  }
}
Jak kód funguje
1. for (const contact of contacts) postupně vezme každý kontakt z pole.
2. if (contact.phone) ověří, zda má telefon truthy hodnotu.
3. Ve větvi if TypeScript ví, že contact.phone je string, takže lze bezpečně zavolat .trim().
4. trim() odstraní mezery jen z obou konců textu. Vnitřní mezera v 777 123 zůstane.
5. Ve větvi else vypíšeme náhradní text no phone.
Přesné chování truthiness:
- neprázdný řetězec, například " 777 123 ", je truthy,
- prázdný řetězec "" je falsy,
- undefined je falsy.
TypeScript zpřesňuje typ podle toho, kterou větví kód pokračuje; říká se tomu zúžení typu (narrowing). V části if je telefon string. V části else může být string | undefined, protože tam spadne i prázdný řetězec. Obecný typ string zahrnuje také "".
Kontrola prázdného řetězce
Když změníme Petrova data na:
{ name: "Petr", phone: "" }
výpis bude stále:
777 123
no phone
Je to proto, že "" je falsy, takže podmínka if (contact.phone) neprojde a vykoná se else. Pro tento úkol je to praktické: prázdné telefonní číslo bereme jako chybějící.

Pozor: kontrola truthiness také považuje za chybějící hodnotu, které jsou prázdné. Pokud bychom chtěli rozlišovat mezi „vlastnost chybí“ a „vlastnost obsahuje prázdný řetězec“, kontrolovali bychom konkrétně contact.phone === undefined.
 */