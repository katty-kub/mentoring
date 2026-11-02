// MenuHeader je zkopírovaný ve dvou souborech. Ať je na jednom místě a platí pro celé menu.

export default function Page() {
  return <p>Úvodní stránka</p>;
}

// stránky mají ukázat (stejně jako teď):
// /10-shared-header → Úvodní stránka (bez MenuHeader)
// /10-shared-header/menu → Menu U Kocoura, Seznam produktů
// /10-shared-header/menu/42 → Menu U Kocoura, Produkt 42
