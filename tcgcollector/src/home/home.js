import Carrusel from "./carousel/carousel";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [set, setSet] = useState(null);
  const [card, setCard] = useState(null);
  var getSet;
  var getCard;
  const getNews = () => {
    const xhrSet = new XMLHttpRequest();
    const xhrCard = new XMLHttpRequest();
    xhrSet.open(
      "GET",
      `https://api.pokemontcg.io/v2/sets?page=1&pageSize=1&orderBy=-releaseDate`
    );
    xhrCard.open(
      "GET",
      `https://api.pokemontcg.io/v2/cards?page=1&pageSize=1&q=set.id:sv2&orderBy=-tcgplayer.prices.holofoil.market`
    );
    xhrSet.onload = function () {
      if (xhrSet.status === 200) {
        setSet(JSON.parse(xhrSet.responseText));
      }
    };
    xhrCard.onload = function () {
      if (xhrSet.status === 200) {
        setCard(JSON.parse(xhrCard.responseText));
      }
    };
    xhrSet.send();
    xhrCard.send();
  };
  useEffect(() => {
    getNews();
  }, []);
  if (set !== undefined && set !== null) {
    getSet = set.data;
  }
  if (card !== undefined && card !== null) {
    getCard = card.data;
  }

  return (
    <div className="bg-pink bg-opacity-20">
      <div>
        <Carrusel />
        <div className="container min-h-screen h-fit mx-auto bg-white">
          <div className="py-4 pb-6 text-center">
            <h1 className="text-3xl text-purple text-opacity-70 font-serif font-extrabold">
              Informate de las últimas novedades
            </h1>
          </div>
          <div className="grid grid-cols-2">
            {getSet ? (
              <>
                <div className="divide-y divide-gray-light px-2 py-2 ml-2 w-full shadow-[0px_0px_26px_1px_rgba(0,0,0,0.39)] shadow-gray-light items-end overflow-hidden text-center hover:cursor-pointer">
                  <div>
                    <h3 className="font-sans text-lg text-purple text-opacity-60 font-extrabold">
                      Nuevo Set!{" "}
                      <span className="text-gray-dark text-xl font-bold">
                        {getSet[0].name}
                      </span>
                    </h3>
                  </div>
                  <Link to={"/cards/" + getSet[0].id}>
                    <div className="grid grid-cols-2 pt-2">
                      <div className="flex justify-center items-center">
                        <img src={getSet[0].images.logo} />
                      </div>
                      <div className="flex justify-center items-center text-justify mx-2">
                        <p>
                          ¡Descubre el último set de cartas lanzado el día{" "}
                          {getSet[0].releaseDate} y con {getSet[0].total} cartas
                          aún por coleccionar!
                        </p>
                      </div>
                    </div>
                  </Link>
                  {getCard ? (
                    <Link to={"/cards/" + getCard[0].set.id}>
                      <div className="grid grid-cols-2 pt-5 w-full">
                        <div className="flex justify-center items-center text-justify mx-2">
                          <p>
                            ¡Dentro de este set se encuentra la carta{" "}
                            {getCard[0].supertype} {getCard[0].name} de rareza{" "}
                            {getCard[0].rarity} que, actualmente, tiene un valor
                            de{" "}
                            <span className="font-bold text-green">
                              {getCard[0].tcgplayer.prices.holofoil.market}$
                            </span>
                            !
                          </p>
                        </div>
                        <div className="flex justify-center items-center w-full">
                          <img
                            className="h-4/4 w-2/4"
                            src={getCard[0].images.small}
                          />
                        </div>
                      </div>
                    </Link>
                  ) : null}
                </div>
                <div></div>
                <div></div>
              </>
            ) : null}
            <div className="px-2 py-2 ml-2 mb-4 mt-3 grid w-full shadow-[0px_0px_26px_1px_rgba(0,0,0,0.39)] shadow-gray-light items-end justify-center overflow-hidden hover:cursor-pointer">
              <p>Segundo bloque</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
