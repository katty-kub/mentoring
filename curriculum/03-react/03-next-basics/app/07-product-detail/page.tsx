// Každý produkt má mít svou stránku /07-product-detail/menu/<id>. Jeden soubor pro všechny.
// export default async function Page({ params }: { params: Promise<{ slug: string }> })
// const { slug } = await params;

export default function Page() {
  return <h1>Kavárna U Kocoura</h1>;
}

// /07-product-detail/menu/42 má ukázat: Produkt 42
// /07-product-detail/menu/7 má ukázat: Produkt 7
