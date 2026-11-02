// Mini web kavárny z dat v _data/menu.ts. Soubory si rozvrhni sama.
// Na každé stránce navigace Domů · Menu. Přechod nesmí načíst celou stránku znovu.
// Detail produktu má tlačítko Líbí. Neznámý produkt: „Produkt neexistuje“ a 404.
// import { menu } from "../_data/menu";   ← ze souboru o složku níž, např. z menu/page.tsx

export default function Page() {
  return <h1>Kavárna U Kocoura</h1>;
}

// /14-capstone → Domů · Menu, Kavárna U Kocoura
// /14-capstone/menu → Domů · Menu, Menu, odkazy: Espresso, Matcha latte, Dýňový koláč
// /14-capstone/menu/2 → Domů · Menu, Matcha latte, 79 Kč, Líbí 0 (klik přičte 1)
// /14-capstone/menu/9 → Domů · Menu, Produkt neexistuje (404)
// npm run build: žádná chyba
