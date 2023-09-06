import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className=" w-full bg-gray-400 p-8">
      <h1 className="w-full text-center fond-bold text-2xl">
        Customers's Review
      </h1>
      <div className="flex gap-6">
        <div className="w-1/2 border border-gray-600 rounded-lg flex flex-col justify-center">
          <Image
            src="/quote.svg"
            alt="Quote"
            width={80}
            height={20}
            className="object-contain"
          />
          <div className="word-breaks">
            Completely satisfied! Friendly staff, good mediation, fair prices.
            When I forgot my expensive glasses in the glove compartment while
            island hopping Seychelles on the first island, they arranged for me
            to collect them at the airport before departure!
          </div>
        </div>

        <div className="word-breaks w-1/2 border border-gray-600 rounded-lg">
          Recommendation! I like it, how this works Simple, good car, nearly
          new, good communication for taking and returning the car see you 2022.
          I‘m a fan now!
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
