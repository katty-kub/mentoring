import type { ReactNode } from "react";

// Karta pro každý notebook (sešit). Components (komponenty) rozděl sama.
// Na kartě: název, description (popis) jen tam, kde je, clusters (okruhy) s tečkou v jejich barvě,
// počet poznámek a počet okruhů. Sešit bez poznámek: „Zatím žádné poznámky“ a čárkovaný rámeček.
// Všechno otypuj. Console (konzole) v browseru (prohlížeči), F12, bez varování.
// rámeček: <div style={{ border: "1px solid gray", padding: 8 }}>…</div>
// tečka: <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%" }} />

const notebooks = [
  {
    id: "starter",
    name: "Starter",
    notes: 12,
    clusters: [
      { id: "react", name: "React", color: "deepskyblue" },
      { id: "typescript", name: "TypeScript", color: "royalblue" },
      { id: "css", name: "CSS", color: "orchid" },
    ],
  },
  {
    id: "api",
    name: "API",
    description: "REST, GraphQL, gRPC",
    notes: 7,
    clusters: [
      { id: "basics", name: "Základy", color: "seagreen" },
      { id: "rest", name: "REST", color: "orange" },
      { id: "auth", name: "Auth", color: "crimson" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    notes: 5,
    clusters: [
      { id: "node", name: "Node.js", color: "olivedrab" },
      { id: "postgres", name: "PostgreSQL", color: "steelblue" },
    ],
  },
  { id: "frontend", name: "Frontend", notes: 0, clusters: [] },
];

export const Task = () => <h1>Notebooks</h1>;

// stránka má ukázat:
// Notebooks
// rámeček: Starter / ● React ● TypeScript ● CSS / Poznámky: 12 · Okruhy: 3
// rámeček: API / REST, GraphQL, gRPC / ● Základy ● REST ● Auth / Poznámky: 7 · Okruhy: 3
// rámeček: Backend / ● Node.js ● PostgreSQL / Poznámky: 5 · Okruhy: 2
// čárkovaný rámeček: Frontend / Zatím žádné poznámky · Okruhy: 0
// npx tsc nevypíše nic
