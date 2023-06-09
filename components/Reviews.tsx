import Image from "next/image";

import avatar1 from "../public/avatar1.png";
import avatar2 from "../public/avatar2.png";
import avatar3 from "../public/avatar3.png";

const reviews = [
  {
    id: 453,
    name: "Maria",
    comment: "Muy profesional",
    rating: 5,
    avatar: avatar1,
  },
  {
    id: 98,
    name: "Sofia",
    comment: "Me encanto!",
    rating: 5,
    avatar: avatar2,
  },
  {
    id: 576,
    name: "Ramona",
    comment: "Recomendado",
    rating: 5,
    avatar: avatar3,
  },
];

const Reviews = () => {
  return (
    <>
      <p className="text-2xl font-medium text-center mt-4">
        Lo que dicen los clientes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 px-20">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="py-3 border rounded-md min-w-min flex flex-col items-center gap-3"
          >
            <p className="font-light text-lg">{review.name}</p>
            <Image src={review.avatar} alt="mug" width={70} height={70} />
            <p className="text-xl">&#9733; &#9733; &#9733; &#9733;</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
