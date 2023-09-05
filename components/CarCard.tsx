import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CarDetails from "./CarDetails";
import { useCalculateCarRent } from "@/hooks/useCalculateCarRent";
import { useGenerateCarImageUrl } from "@/hooks/useGenerateCarImageUrl";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = useCalculateCarRent(city_mpg, year);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-2xl font-bold capitalize">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-xl font-extrabold">
        <span className="self-start text-sm leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-lg font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={useGenerateCarImageUrl(car)}
          alt="car model"
          width={400}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel logo"
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image 
            src="/tire.svg" 
            width={20} 
            height={20} 
            alt="tire logo" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image 
            src="/gas.svg" 
            width={20} 
            height={20} 
            alt="gas logo" />
            <p className="text-[14px] leading-[17px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10 justify-center">
          <button
            className="bg-primary-blue text-white text-[14px] font-bold rounded-full mt-10 py-2 px-4"
            onClick={() => setIsOpen(true)}
          >
            View Details
          </button>
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
