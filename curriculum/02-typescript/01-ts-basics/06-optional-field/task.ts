// Dej contacts type (typ) Contact[]. Petr telefon nemá, a to je v pořádku.

type Contact = { name: string; phone: string };

const contacts = [
  { name: "Eva", phone: " 777 123 " },
  { name: "Petr" },
];

for (const contact of contacts) {
  console.log(contact.name);
}

// node task.ts má vypsat:
// Eva
// Petr
