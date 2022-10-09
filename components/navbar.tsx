import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-transparent p-3 max-w-screen-md mx-auto">
        <button
          className=" inline-flex p-3  rounded lg:hidden text-red-600 ml-auto hover:text-red-600 outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto cursor-none">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-red-600 text-xl cursor-none">
                Home
              </a>
            </Link>
            <Link href="/Experience">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-red-600 text-xl cursor-none">
                Experience
              </a>
            </Link>
            <Link href="/Projects">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-red-600 text-xl cursor-none">
                Projects
              </a>
            </Link>
            <Link href="/Contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-red-600 text-xl cursor-none">
                Contact
              </a>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
};
