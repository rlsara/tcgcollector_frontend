import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Search } from "tabler-icons-react";

export default function Navbar() {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-pink to-purple">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              to="/"
            >
              TCGCollector
            </Link>
            <div className="lg:flex flex-grow mx-right flex">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/sets"
              >
                <span className="ml-2 hover:underline">Sets</span>
              </Link>
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/cards"
              >
                <span className="ml-2 hover:underline">Cartas</span>
              </Link>
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/sets"
              >
                <span className="ml-2 hover:underline">Pin</span>
              </Link>
            </div>
            <div className="lg:flex flex">
              <div className="relative z-0">
                <input
                  type="text"
                  placeholder="Búsqueda"
                  className="m-2 text-sm placeholder:text-white placeholder:text-opacity-70 text-white dark:text-white text-opacity-80 bg-transparent border-0 border-b-2 border-pink border-opacity-50 appearance-none focus:outline-none focus:ring-0 focus:border-pink focus:border-opacity-35 peer"
                />
                <Button className="hover:opacity-80 hover:bg-pink px-3 border border-pink border-opacity-80">
                  <Search size={15} />
                </Button>
              </div>
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Foto</span>
              </a>
              <a
                className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Log Out</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
