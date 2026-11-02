import type { ReactNode } from "react";

// Napiš component (komponentu) Card: co dáš mezi <Card> a </Card>, ukáže v rámečku.
// Dej do Card obě části stránky.
// rámeček: <div style={{ border: "1px solid gray", padding: 8 }}>…</div>

export default function Task() {
  return (
    <div>
      <h2>Novinky</h2>
      <p>Dýňový koláč je zpět.</p>
      <h2>Otevírací doba</h2>
      <p>Po–Pá 8–18</p>
      <p>So 9–14</p>
    </div>
  );
}

// stránka má ukázat dva rámečky:
// Novinky / Dýňový koláč je zpět.
// Otevírací doba / Po–Pá 8–18 / So 9–14
