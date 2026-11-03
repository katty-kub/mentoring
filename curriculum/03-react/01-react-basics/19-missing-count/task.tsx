// Bug report (hlášení chyby): karta Frontend ukazuje „Poznámky:“ bez čísla. Má ukázat 0.
// Oprav to. A ať TypeScript takovou chybu příště chytí sám.

const notebooks = [
  { id: "starter", name: "Starter", notes: 12 },
  { id: "api", name: "API", notes: 7 },
  { id: "backend", name: "Backend", notes: 5 },
  { id: "frontend", name: "Frontend", note: 0 },
];

export const Task = () => (
  <ul>
    {notebooks.map((notebook) => (
      <li key={notebook.id}>
        <h2>{notebook.name}</h2>
        <p>Poznámky: {notebook.notes}</p>
      </li>
    ))}
  </ul>
);

// stránka má ukázat:
// Starter / Poznámky: 12
// API / Poznámky: 7
// Backend / Poznámky: 5
// Frontend / Poznámky: 0
