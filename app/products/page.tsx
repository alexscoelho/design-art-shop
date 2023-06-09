import Image from "next/image";

import hero from "../../public/hero.png";

import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";

const products = [
  {
    id: 23424,
    name: "Taza",
    img: "",
    price: "$ 12",
  },
  {
    id: 565,
    name: "Franela",
    img: "",
    price: "$ 20",
  },
  {
    id: 768,
    name: "Globos",
    img: "",
    price: "$ 6",
  },
  {
    id: 987,
    name: "Franela",
    img: "",
    price: "$ 21",
  },
  {
    id: 444,
    name: "Taza",
    img: "",
    price: "$ 15",
  },
  {
    id: 4986,
    name: "Llavero",
    img: "",
    price: "$ 21",
  },
];

const Products = () => {
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
