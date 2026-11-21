// Dej contacts type (typ) Contact[]. Petr telefon nemá, a to je v pořádku.

type Contact = { name: string; phone?: string };

const contacts: Contact[] = [
  { name: "Eva", phone: " 777 123 " },
  { name: "Petr" },
];

for (const contact of contacts) {
  console.log(contact.name);
}

// node task.ts má vypsat:
// Eva
// Petr

/*
Cíl úkolu

Vytvořit typ Contact pro seznam kontaktů. Každý kontakt musí mít jméno, ale telefon mít nemusí. V seznamu je Eva s telefonem a Petr bez telefonu.

Úkol procvičuje nepovinnou vlastnost objektu a typ seznamu objektů.

Zadání a výchozí data

type Contact = { name: string; phone: string };

const contacts = [
  { name: "Eva", phone: " 777 123 " },
  { name: "Petr" },
];

V původním typu Contact je phone povinný. Petr ale vlastnost phone nemá. Kdybychom seznam označili jako Contact[], TypeScript by oznámil, že Petrův objekt neodpovídá typu Contact.

Opravený kód

type Contact = {
  name: string;
  phone?: string;
};

const contacts: Contact[] = [
  { name: "Eva", phone: " 777 123 " },
  { name: "Petr" },
];

for (const contact of contacts) {
  console.log(contact.name);
}

Výstup:

Eva
Petr

Co znamená otazník u phone?

Zápis phone?: string znamená, že vlastnost phone je nepovinná:

kontakt může mít phone s textovou hodnotou;

kontakt může vlastnost phone úplně vynechat.

Otazník se píše za názvem vlastnosti. Zápis phone: string by naopak znamenal, že ji musí mít každý kontakt.

Co znamená Contact[]?

Contact je typ jednoho kontaktu. Hranaté závorky za typem znamenají seznam:

Contact – jeden objekt kontaktu.

Contact[] – seznam objektů kontaktu.

Zápis const contacts: Contact[] říká TypeScriptu, že každý prvek seznamu musí odpovídat typu Contact. Jména jsou povinná; telefony jsou nepovinné.

Proč upravit typ Contact, a ne Petra?

Podle zadání je správně, že Petr telefon nemá. Data Petra tedy není nutné měnit. Typ Contact musí popisovat skutečná povolená data: každý kontakt má jméno, telefon může chybět.

Kdybychom přidali Petrovi vymyšlený telefon jen proto, aby TypeScript přestal hlásit chybu, neodpovídalo by to zadání.

Typ při čtení nepovinného telefonu

Když najedu myší na contact.phone, editor obvykle ukáže:

string | undefined

Důvod:

pokud telefon existuje, je to text typu string;

pokud telefon chybí, jeho hodnota při čtení je undefined.

Vlastnost je nepovinná, proto musí TypeScript počítat s oběma možnostmi.

Naopak contact.name má vždy typ string, protože jméno je v typu Contact povinné.

Co se vypíše při čtení chybějícího telefonu?

Kdybychom přidali:

console.log(contact.phone);

u Evy se vypíše její telefon a u Petra se vypíše undefined. Undefined znamená, že hodnota není zadaná.

Při použití telefonu jako textu je potřeba počítat s tím, že může chybět. Například bezpečný výpis s náhradním textem:

console.log(contact.phone ?? "Telefon není uveden");

Operátor ?? použije text vpravo, pokud je hodnota vlevo null nebo undefined.

Příklady input → output

Kontakt { name: "Eva", phone: "777 123" } → při výpisu jména se zobrazí Eva.

Kontakt { name: "Petr" } → při výpisu jména se zobrazí Petr; při výpisu telefonu by se zobrazilo undefined.

Edge case (okrajový případ)

Kontakt bez telefonu je důležitý okrajový případ. Typ ho musí povolit a kód, který telefon čte nebo používá, musí počítat s tím, že jeho hodnota může být undefined.

Jak by se zobrazila chyba, kdyby phone zůstalo povinné?

Když typ obsahuje phone: string, ale objekt Petra phone neobsahuje, TypeScript ohlásí, že vlastnost phone v objektu chybí, přestože je v typu požadovaná.

Po změně na phone?: string tento objekt odpovídá typu:

{ name: "Petr" }

Plan (plán)

// 1. Ponechám typ Contact, protože popisuje jeden kontakt.
// 2. U phone přidám ?, protože telefon může chybět.
// 3. Seznam contacts označím jako Contact[].
// 4. Spustím npx tsc a ověřím, že typy souhlasí.

Explain (vysvětlení vlastními slovy)

„Vlastnost phone je nepovinná, protože některé kontakty telefon nemají. Zápis phone?: string dovolí, aby telefon byl text, nebo aby v objektu chyběl. Při čtení má proto typ string | undefined.“

Kontrola a spuštění

Kontrola TypeScriptu z kořene repozitáře:

npx tsc

Spuštění úlohy:

node curriculum/02-typescript/01-ts-basics/06-optional-field/task.ts

Program má vypsat jména Eva a Petr.

Větev pro tento úkol

Podle pravidla modulu se větev jmenuje:

ts-basics/optional-field

Číselné složky z cesty k tasku se do názvu větve nepřidávají.
*/