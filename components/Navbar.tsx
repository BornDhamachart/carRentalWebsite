import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center sm:px-16 px-6 py-4">
      <div className="w-1/2">
        <Link href="/">
          {/* <Image
            src="/logo.svg"
            alt="Car Logo"
            width={118}
            height={18}
            className="object-contain"
          /> */}
          <h1 className="font-bold text-5xl">CTEST</h1>
        </Link>
      </div>
      <div className="flex gap-6 justify-center w-1/2">
        <button
          className="text-black rounded-full bg-white min-w-[70px]"
          onClick={() => {}}
        >
          Home
        </button>
        <button
          className="text-black rounded-full bg-white min-w-[70px]"
          onClick={() => {}}
        >
          Our cars
        </button>
        <button
          className="text-black rounded-full bg-white min-w-[70px]"
          onClick={() => {}}
        >
          About
        </button>

        <button
          className="text-primary-blue rounded-full bg-white min-w-[70px]"
          onClick={() => {}}
        >
          Sign in
        </button>
        <button
          className="bg-primary-blue rounded-lg text-white min-w-[70px] px-4 py-2"
          onClick={() => {}}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

//Change to fix Navbar and add more pages such as contact/etc.
