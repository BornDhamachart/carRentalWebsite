import Image from "next/image";

const Hero = () => {

  return (
    <div className="flex flex-col xl:flex-row gap-5 z-0 relative max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-8xl sm:text-6xl text-4xl font-extrabold">
          {/* Find, book, or rental a car quickly and easily!! */}
          Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5;">
          {/* Streamline your car rental experience with our effortless booking
          process */}
          Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorememLoremLoremLoremLorem
        </p>
        <button
          className="bg-primary-blue text-white rounded-full mt-10 py-2 px-4"
          onClick={() => {}}
        >Explore Cars</button>
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          {/* <Image
            src="/car.png"
            alt="hero"
            width={200}
            height={30}
            className="object-contain"
          ></Image> */}
          <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


//Change component name not HERO!!
//Change button
//Change image and BG image