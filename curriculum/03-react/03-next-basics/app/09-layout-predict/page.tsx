// Predict (předpověz): které nadpisy z layoutů uvidíš na každé URL? Tip za každý řádek. Pak otevři.
//
// Soubory v app/09-layout-predict:
//   layout.tsx          ukáže KAVÁRNA
//   page.tsx
//   about/page.tsx
//   menu/layout.tsx     ukáže MENU
//   menu/page.tsx
//   menu/[id]/page.tsx
//
// /09-layout-predict → tip:
// /09-layout-predict/about → tip:
// /09-layout-predict/menu → tip:
// /09-layout-predict/menu/42 → tip:

export default function Page() {
  return <p>Úvodní stránka</p>;
}
