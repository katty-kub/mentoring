// Vypiš telefon každého kontaktu bez mezer okolo. Kdo telefon nemá: vypiš "no phone".
// " 777 123 " → 777 123

type Contact = { name: string; phone?: string };

const contacts: Contact[] = [
  { name: "Eva", phone: " 777 123 " },
  { name: "Petr" },
];

// tvůj kód


// node task.ts má vypsat:
// 777 123
// no phone
