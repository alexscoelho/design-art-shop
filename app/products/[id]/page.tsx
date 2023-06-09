import Image from "next/image";
import React from "react";

import hero from "../../../public/hero.png";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-4 mx-4">
        <div className="flex flex-col justify-center">
          <Image src={hero} alt="hero" width={200} height={200} />
          <section className="mx-6 my-4">
            <p className="font-medium text-2xl">Descripción</p>
            <p className="font-light text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              similique dolor labore eos non, atque consequuntur delectus minus
              quasi eligendi obcaecati hic necessitatibus reprehenderit
              laboriosam facere, sed expedita pariatur libero!
            </p>
          </section>
        </div>
        <section className="flex flex-col gap-3 items-center">
          <p className="text-2xl">{params.id} - Product Name</p>
          <p className="text-xl">&#9733; &#9733; &#9733; &#9733;</p>
          <div className="flex gap-2 justify-between">
            <input
              className="border py-2 px-2 border-slate-400 rounded-md"
              type="number"
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
