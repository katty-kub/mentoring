// Predict (předpověz): které nadpisy z layouts (rámů stránek) uvidíš na každé URL (adrese)?
// Tip, pak otevři.
//
// Soubory v src/app:
//   layout.tsx                          <html> a <body>, žádný nadpis
//   10-layout-predict/layout.tsx        ukáže KAVÁRNA
//   10-layout-predict/page.tsx          
//   10-layout-predict/about/page.tsx
//   10-layout-predict/menu/layout.tsx   ukáže MENU
//   10-layout-predict/menu/page.tsx
//   10-layout-predict/menu/[id]/page.tsx
//
// /10-layout-predict → tip: KAVÁRNA
// /10-layout-predict/about → tip: KAVÁRNA
// /10-layout-predict/menu → tip: KAVÁRNA, pod ním MENU
// /10-layout-predict/menu/42 → tip: KAVÁRNA, pod ním MENU

const Page = () => <p>Úvodní stránka</p>;

export default Page;
