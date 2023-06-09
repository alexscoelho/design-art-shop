import Image from "next/image";
import React from "react";

import hero from "../../../../public/hero.png";
import Products from "../../page";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl">{params.slug}</p>
        <Image src={hero} alt="hero" width={200} height={200} />
      </div>
      <Products />
    </>
  );
};

export default Page;
