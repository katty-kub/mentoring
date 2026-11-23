// Predict (předpověz): co ukáže každá URL (adresa)? Tip: stránka, obrázek, nebo 404. Pak otevři.
//
// Soubory v 03-next-basics (jen část):
//   src/app/layout.tsx
//   src/app/icon.svg
//   src/app/01-project-map/page.tsx
//   public/logo.svg
//   next.config.ts
//   package.json
//
// /01-project-map → tip: stránka
// /logo.svg → tip: obrázek
// /public/logo.svg → tip: 404
// /src/app/01-project-map/page.tsx → tip: 404 
// /package.json → tip: 404 
//
// Ikona v záložce browseru (prohlížeče): ze kterého souboru je? → tip:  src/app/icon.svg
//
// Po npm install a npm run dev přibudou složky node_modules/ a .next/. Kdo je napsal? → tip: node_modules/ npm (stažené balíčky), .next/ Next (vyrobil je při npm run dev). Já ne
// Patří do commitu (uložení změn)? Ověř v git status a v .gitignore v root (kořeni) repa. → tip: tip: ne, jsou v .gitignore, git status je neukáže

const Page = () => <h1>Task 01 project-map</h1>;

export default Page;
