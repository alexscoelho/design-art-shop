import Image from "next/image";

import hero from "../../public/hero.png";

import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import { prisma } from "../db";

type Props = {
  category: string;
};

const Products = async ({ category }: Props) => {
  const products = await prisma.product.findMany({
    where: {
      categoryLabel: category,
    },
  });
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-3 px-3">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div className="py-3 border rounded-md min-w-min flex flex-col items-center gap-3 hover:border-blue-600">
            <Image src={hero} alt="mug" width={70} height={70} />
            <p className="text-xl">{product.name}</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-slate-500 font-thin">{product.price}</p>
              <AiOutlineEye />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
