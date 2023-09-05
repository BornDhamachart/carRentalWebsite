import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (

      <nav className="flex w-full justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Car Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <button
          className="text-primary-blue rounded-full bg-white min-w-[130px]"
          onClick={() => {}}
        >Sign in</button>
      </nav>
    
  );
};

export default Navbar;

//Change to fix Navbar and add more pages such as contact/etc.

