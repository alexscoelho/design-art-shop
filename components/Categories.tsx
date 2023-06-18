import Image from "next/image";
import React from "react";

import hero from "../public/hero.png";
import Link from "next/link";
import { prisma } from "@/app/db";

const Categories = async () => {
  const categories = await prisma.category.findMany();
  return (
    <>
      <p className="text-2xl font-medium text-center mt-4">Categorias</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-3 mt-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products/categories/${category.label}`}
          >
            <div className="py-3 border rounded-md min-w-min flex flex-col items-center gap-3 hover:border-blue-600">
              <Image src={hero} alt="mug" width={70} height={70} />
              <p className="text-xl">{category.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
