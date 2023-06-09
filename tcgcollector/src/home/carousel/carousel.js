import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Carrusel() {
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    const isFisrt = index === 0;
    const newIndex = isFisrt ? slides.length - 1 : index - 1;
    setIndex(newIndex);
  }
  const nextSlide = () => {
    const isLast = index === slides.length - 1;
    const newIndex = isLast ? 0 : index + 1;
    setIndex(newIndex);
  }
  const slides = [
    {
      url: "https://images.pokemontcg.io/ex2/logo.png",
    },
    {
      url: "https://images.pokemontcg.io/ex15/logo.png",
    },
    {
      url: "https://images.pokemontcg.io/sma/logo.png",
    },
  ];
  return (
    <div className="shadow-lg bg-gray-light brightness-75 hover:brightness-90 hover:bg-opacity-90 h-96 w-full m-auto py-10 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[index].url})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        className="w-full h-full rounded-2xl bg-center duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-gray-dark/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-gray-dark/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}
