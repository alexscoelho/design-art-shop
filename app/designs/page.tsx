import { prisma } from "../db";

const Products = async () => {
  const designs = await prisma.designs.findMany();
  return (
    <div className="grid grid-cols-1 my-4 max-w-fit mx-4 gap-3 float-right">
      {designs.map((design) => (
        <div className="justify-between py-3 border rounded-md min-w-min flex gap-3 items-center px-4">
          <a key={design.id} href={design.url} target="_blank">
            {design.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Products;
