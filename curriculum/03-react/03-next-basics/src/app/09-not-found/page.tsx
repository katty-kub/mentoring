// Bug report (hlášení chyby): /09-not-found/menu/999 ukazuje prázdnou stránku. Produkt 999 není.
// Má ukázat „Produkt neexistuje“ a vrátit 404.
// import { notFound } from "next/navigation";

const Page = () => <h1>Kavárna U Kocoura</h1>;

export default Page;

// /09-not-found/menu/1 má ukázat: Espresso
// /09-not-found/menu/999 má ukázat: Produkt neexistuje (a v F12 → Network status 404)
