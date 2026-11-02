import MenuHeader from "../../_parts/MenuHeader";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <MenuHeader />
      <p>Produkt {id}</p>
    </div>
  );
}
