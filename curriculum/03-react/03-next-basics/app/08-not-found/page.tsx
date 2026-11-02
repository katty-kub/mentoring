// Bug report (hlášení chyby): /08-not-found/menu/999 ukazuje prázdnou stránku. Produkt 999 není.
// Má ukázat „Produkt neexistuje“ a vrátit 404.
// import { notFound } from "next/navigation";

export default function Page() {
  return <h1>Kavárna U Kocoura</h1>;
}

// /08-not-found/menu/1 má ukázat: Espresso
// /08-not-found/menu/999 má ukázat: Produkt neexistuje (a v F12 → Network status 404)
