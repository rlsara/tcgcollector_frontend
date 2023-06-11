import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Carrusel() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);
  var slides = [];
  const getSets = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.pokemontcg.io/v2/sets?page=1&pageSize=3&orderBy=-releaseDate`
    );
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  };
  useEffect(() => {
    getSets();
  }, []);
  if (data !== undefined && data !== null) {
    var getdata = data.data;
    getdata.forEach((set) => {
      slides.push({
        id: set.id,
        url: set.images.logo,
      });
    });
  }
  const prevSlide = () => {
    const isFisrt = index === 0;
    const newIndex = isFisrt ? slides.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const nextSlide = () => {
    const isLast = index === slides.length - 1;
    const newIndex = isLast ? 0 : index + 1;
    setIndex(newIndex);
  };
  return (
    <>
      {slides.length > 0 ? (
        <div className="shadow-lg bg-purple bg-opacity-50 brightness-75 hover:brightness-90 hover:bg-opacity-70 h-96 w-full m-auto py-10 px-4 relative group">
          <Link to={"/cards/" + slides[index].id}>
            <div
              style={{
                backgroundImage: `url(${slides[index].url})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-full rounded-2xl bg-center duration-500"
            ></div>
          </Link>
          <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-gray-dark/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-gray-dark/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      ) : (
        <div className="text-center py-4 h-144">
          <span className="px-48 py-2 text-gray-dark bg-gray-light">
            Loading...
          </span>
        </div>
      )}
    </>
  );
}
