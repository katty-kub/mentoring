// Každý produkt má mít svou stránku /08-product-detail/menu/<id>. Jeden soubor pro všechny.
// const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
// const { slug } = await params;

const Page = () => <h1>Kavárna U Kocoura</h1>;

export default Page;

// /08-product-detail/menu/42 má ukázat: Produkt 42
// /08-product-detail/menu/7 má ukázat: Produkt 7
