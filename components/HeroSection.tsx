import Image from "next/image";

import hero from "../public/hero.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-3 mt-4 border-b py-4">
      <div className="items-center flex flex-col gap-3 justify-center">
        <p className="text-2xl font-medium">
          Una frase sobre mis productos y arte
        </p>
        <Link
          href="/products"
          className="border py-3 px-2 rounded-md text-lg hover:border-blue-600"
        >
          Ver mis productos
        </Link>
      </div>
      <div className="flex justify-center">
        <Image src={hero} alt="hero" width={200} height={200} />
      </div>
    </div>
  );
};

export default HeroSection;
