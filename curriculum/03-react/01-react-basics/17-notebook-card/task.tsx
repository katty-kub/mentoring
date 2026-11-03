// Karta notebooku (sešitu) je napsaná přímo v map.
// Ať je to component (komponenta) NotebookCard, která dostane data přes props (vstupy).

const notebooks = [
  { id: "starter", name: "Starter", notes: 12 },
  { id: "api", name: "API", notes: 7 },
  { id: "backend", name: "Backend", notes: 5 },
  { id: "frontend", name: "Frontend", notes: 0 },
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

// stránka má ukázat (stejně jako teď):
// Starter / Poznámky: 12
// API / Poznámky: 7
// Backend / Poznámky: 5
// Frontend / Poznámky: 0
