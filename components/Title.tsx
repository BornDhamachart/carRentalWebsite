import Image from "next/image";

const Title = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-5 z-0 relative max-w-[1440px] mx-auto">
      <div className="flex-1 md:pt-36 pt-20 sm:px-16 px-6">
        <h1 className="sm:text-5xl text-4xl font-extrabold">
          Find good offers, rental a car quickly and easily!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5;">
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <button
          className="bg-primary-blue text-white rounded-full mt-10 py-2 px-4"
          onClick={() => {}}
        >
          Book now!
        </button>
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-[640px] h-[400px] z-0">
          <Image
            src="/car4.png"
            alt="hero"
            width={800}
            height={30}
            className="object-contain"
          ></Image>
          <div className="absolute -top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-[640px] md:h-[500px] h-[400px] overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
