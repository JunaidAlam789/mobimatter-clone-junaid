import Image from "next/image";
import React from "react";
import ImageOne from "../../../public/homepage/Cards/card-one.png";

interface PromotionCard {
  imageUrl: any;
  label: string;
}

export const PromotionCard: React.FC<PromotionCard> = ({ imageUrl, label }) => {
  return (
    <div className=" relative  hover:scale-105 transition duration-300 ease-in-out">
      <div className=" absolute top-3 left-2 right-2 sm:top-5 sm:right-8 sm:left-8 text-center">
        <h3 className=" text-white font-bold">{label}</h3>
      </div>
      <Image
        src={imageUrl}
        alt={""}
        width={255}
        height={355}
        className=" shrink-0"
      />
    </div>
  );
};
