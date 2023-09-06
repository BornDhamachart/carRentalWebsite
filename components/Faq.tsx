import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "How do I make a reservation?",
    children: (
        <p className="word-breaks w-full">
        To reserve a rental car, simply visit our website and enter your desired
        pickup location, dates, and times. Browse through the available car
        options, select the one that suits your needs, and follow the booking
        process to confirm your reservation
      </p>
    ),
  },
  {
    key: "2",
    label: "What are the requirements for renting a car?",
    children: (
        <p className="word-breaks w-full">
        To rent a car, you typically need a valid driver's license, a credit
        card in your name, and in some cases, proof of insurance. Specific
        requirements may vary depending on your location and the car rental
        company, so it's advisable to check the terms and conditions on our
        website or contact our customer support for detailed information
      </p>
    ),
  },
  {
    key: "3",
    label: "What happens if I need to cancel or modify my reservation?",
    children: (
      <p className="word-breaks w-full">
        Yes, you can typically modify your reservation, including pickup and
        return times, as long as you do so within the specified cancellation and
        modification period. Please refer to the reservation details on our
        website or contact our customer support for guidance on making changes
      </p>
    ),
  },
];

const Faq = () => {
  return (
    <>
    <h1 className="text-6xl font-bold ml-8 w-full text-center">FAQs</h1>
    <div className="w-2/3 flex justify-center">
  <Collapse items={items} defaultActiveKey={["1"]} />
  </div>
  </>
  )
  
};

export default Faq;
