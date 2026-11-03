const products = [
  { id: "1", name: "Espresso" },
  { id: "2", name: "Cappuccino" },
];

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  return <h1>{product?.name}</h1>;
};

export default Page;
