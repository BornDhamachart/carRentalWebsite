import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center px-6 py-4">
      <div className="w-1/3 pt-2">
        <Link href="/">
          <h1 className="font-bold md:text-4xl text-xl">CAR RENTAL</h1>
        </Link>
      </div>
      <div className="flex gap-6 justify-end w-2/3">
        <button
          className="text-black rounded-full bg-white min-w-[70px] hidden md:block"
          onClick={() => {}}
        >
          Home
        </button>
        <button
          className="text-black rounded-full bg-white min-w-[70px] hidden md:block"
          onClick={() => {}}
        >
          Our cars
        </button>
        <button
          className="text-black rounded-full bg-white min-w-[70px] hidden md:block"
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
