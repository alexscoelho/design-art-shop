import Image from "next/image";
import React from "react";

import hero from "../../../public/hero.png";
import { prisma } from "@/app/db";

const Page = async ({ params }: { params: { id: string } }) => {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-4 mx-4">
        <section className="mx-6 my-4 flex flex-col items-center gap-3">
          <Image src={hero} alt="hero" width={200} height={200} />
          <p className="font-medium text-2xl">Descripción</p>
          <p className="font-light text-lg">{product?.description}</p>
        </section>
        <section className="flex flex-col gap-3 items-center">
          <p className="text-2xl">
            {params.id} - {product?.name}
          </p>
          <p className="text-xl">
            {new Array(product?.rating).fill(1).map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
          </p>
          <p className="text-slate-500 font-thin">$ {product?.price}</p>
          <div className="flex gap-2 justify-between">
            <input
              className="border py-2 px-2 border-slate-400 rounded-md"
              type="number"
              defaultValue={1}
              min={1}
              max={5}
            />
            <button className="border py-3 px-2 rounded-md text-lg hover:border-blue-600">
              Agregar al Carro
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
