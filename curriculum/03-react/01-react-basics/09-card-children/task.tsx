import type { ReactNode } from "react";

// Napiš component (komponentu) Card: co dáš mezi <Card> a </Card>, ukáže v rámečku.
// Dej do Card obě části stránky.
// rámeček: <div style={{ border: "1px solid gray", padding: 8 }}>…</div>


const Card  = ({ children }: {children: ReactNode}) => (
  <div style={{ border: "1px solid gray", padding: 8 }}>
    {children}
  </div>
)

export const Task = () => (
  <div>
    <Card>
      <h2>Novinky</h2>
      <p>Dýňový koláč je zpět.</p>
      <Card>
        <p>Jen do neděle!</p>
      </Card>
    </Card>
  </div>
);

// stránka má ukázat dva rámečky:
// Novinky / Dýňový koláč je zpět.
// Otevírací doba / Po–Pá 8–18 / So 9–14
