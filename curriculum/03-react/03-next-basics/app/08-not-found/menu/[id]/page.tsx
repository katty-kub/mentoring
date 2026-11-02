const products = [
  { id: "1", name: "Espresso" },
  { id: "2", name: "Cappuccino" },
];

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  return <h1>{product?.name}</h1>;
}
