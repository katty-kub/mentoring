import { MenuHeader } from "../../_parts/MenuHeader";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <MenuHeader />
      <p>Produkt {id}</p>
    </div>
  );
};

export default Page;
