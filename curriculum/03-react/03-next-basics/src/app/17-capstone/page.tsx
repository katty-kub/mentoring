// Mini DevNotes z dat v _data/notebooks.ts. Soubory si rozvrhni sama.
// Na každé stránce hlavička: logo public/devnotes.svg (32 × 32 px, alt DevNotes) a odkaz Notebooks.
// Logo vede na /17-capstone, Notebooks na /17-capstone/notebooks. Bez načtení celé stránky znovu.
// Notebook (sešit) má tlačítko Do záložek: klik přepne na V záložkách, další klik zpět.
// Neznámý notebook: „Notebook not found“ a 404.
// import Link from "next/link";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { useState } from "react";
// import type { ReactNode } from "react";
// import { notebooks } from "../_data/notebooks";   ← cesta platí ze souboru o složku níž

const Page = () => <h1>DevNotes</h1>;

export default Page;

// /17-capstone → logo, Notebooks, DevNotes
// /17-capstone/notebooks → logo, Notebooks, odkazy: Starter, API, Backend
// /17-capstone/notebooks/api → logo, Notebooks, API, Do záložek, Základy, Styly a vzory, Auth a…
// /17-capstone/notebooks/api: klik na Do záložek → V záložkách, další klik → Do záložek
// /17-capstone/notebooks/xyz → logo, Notebooks, Notebook not found (404)
// npm run build: žádná chyba
