import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className=" w-full bg-gray-100 p-8 mt-8">
      <h1 className="w-full text-center fond-bold text-4xl">
        Customers's Review
      </h1>
      <div className="text-gray-500 w-full text-center">
        Our clients have experienced our service and want to spread the word.
      </div>
      <div className="flex gap-6 mt-6">
        <div className="w-1/2">
          <div className="flex flex-col items-center h-3/4">
            <Image
              src="/quote.svg"
              alt="Quote"
              width={40}
              height={20}
              className="object-contain"
            />
            <div className="word-breaks mt-2">
              Completely satisfied! Friendly staff, good mediation, fair prices.
              When I forgot my expensive glasses in the glove compartment while
              island hopping Seychelles on the first island, they arranged for
              me to collect them at the airport before departure!
            </div>
          </div>
          <div className="mt-4 w-full text-right">John, May 2023</div>
        </div>

        <div className="w-1/2">
          <div className="flex flex-col items-center h-3/4">
            <Image
              src="/quote.svg"
              alt="Quote"
              width={40}
              height={20}
              className="object-contain"
            />
            <div className="word-breaks mt-2">
              Recommendation! I like it, how this works Simple, good car, nearly
              new, good communication for taking and returning the car see you
              2022. I am a fan now!
            </div>
          </div>
          <div className="mt-4 w-full text-right">Lisa, Jul 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
