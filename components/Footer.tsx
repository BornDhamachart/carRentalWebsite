import React from "react";
import Link from "next/link";
import { footerLinks } from "@/constants";
import EmailSub from "@/components/EmailSub";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100 ">
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-20 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <h1 className="font-bold text-3xl">CAR RENTAL</h1>
          <p className="text-base text-gray-700">
            Car Rental 2023 <br />
            All Rights Reserved
          </p>
        </div>

        <div className="flex-1 w-full flex flex-wrap lg:justify-end gap-6 justify-start">
          {footerLinks.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <EmailSub />
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Car Rental. All rights reserved</p>

        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
