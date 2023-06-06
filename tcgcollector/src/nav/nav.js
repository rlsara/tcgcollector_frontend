import React from "react";
import { Button, Input } from "@material-tailwind/react";

export default function Navbar() {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-purple bg-opacity-75 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white" href="#">
              TCGCollector
            </a>
            <div className="lg:flex flex-grow mx-right flex">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#">
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Sets</span>
                </a>
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tipo</span>
                </a>
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                </a>
            </div>
            <div className="lg:flex flex">
              <div class="relative z-0">
                <input type="text" placeholder="Búsqueda" class="m-2 text-sm text-white dark:text-white text-opacity-80 bg-transparent border-0 border-b-2 border-pink border-opacity-50 appearance-none focus:outline-none focus:ring-0 focus:border-pink focus:border-opacity-35 peer" />
                <Button className="hover:opacity-75">Buscar</Button>
              </div>
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#">
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Foto</span>
              </a>
              <a className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#">
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Log Out</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}