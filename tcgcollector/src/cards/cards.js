import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

var countPage = 1;
const pageSize = 15;
export default function Cards() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalCard, setModalCard] = useState(null);
  const [modalPrices, setModalPrices] = useState(null);
  var listCards = undefined;
  const params = useParams();
  useEffect(() => {
    countPage = 1;
    getCards();
  }, [location]);
  function pagePlus() {
    const maxPage = Math.ceil(data.totalCount / pageSize);
    if (countPage < maxPage) {
      countPage++;
      getCards();
      console.log(countPage);
    }
  }
  function pageMinus() {
    if (countPage > 1) {
      countPage--;
      getCards();
    }
  }
  function firstPage() {
    countPage = 1;
    getCards();
  }
  function lastPage() {
    countPage = Math.ceil(data.totalCount / pageSize);
    getCards();
  }
  const getCards = () => {
    const xhr = new XMLHttpRequest();
    var url =
      `https://api.pokemontcg.io/v2/cards?page=` +
      countPage +
      `&pageSize=` +
      pageSize;
    var preSet = params.set !== null && params.set !== undefined;
    var set = `&orderBy=number&q=set.id:` + params.set;
    if (preSet) {
      url += set;
    }
    xhr.open("GET", url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  };

  if (data !== undefined && data !== null) {
    var getdata = data.data;
    listCards = getdata.map((card) => (
      <Card
        key={card.id}
        className="px-2 py-2 ml-2 mb-4 grid w-full shadow-inner shadow-gray-light items-end justify-center overflow-hidden text-center hover:bg-gray-light hover:bg-opacity-40"
        onClick={() => {
          setShowModal(true);
          setModalCard(card);
          setModalPrices(Object.entries(card.tcgplayer.prices));
        }}
      >
        <CardHeader>
          <img
            className="object-scale-down h-48 w-96"
            src={card.images.small}
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            className="py-2 text-gray-dark bg-gray-light"
          >
            {card.name}
          </Typography>
        </CardBody>
      </Card>
    ));
  }
  return (
    <div className="bg-pink bg-opacity-20 h-screen">
      <div className="container mx-auto h-screen px-20 bg-white">
        <h2 className="text-5xl py-2 text-gray-dark font-sans text-center font-semibold leading-tight">
          Cards
        </h2>
        {listCards ? (
          <div className="pt-2">
            <div className="w-full grid grid-cols-2">
              <div className="text-left mb-3">
                <a
                  onClick={firstPage}
                  className="inline-flex items-center px-4 py-2 mr-2 text-sm font-medium text-gray-dark text-opacity-70  bg-white border border-gray border-opacity-30 rounded-lg hover:bg-gray-100 hover:text-white hover:text-opacity-80 hover:bg-gray-dark hover:bg-opacity-70"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  onClick={pageMinus}
                  className="inline-flex items-center px-4 py-2  text-sm font-medium text-gray-dark text-opacity-70  bg-white border border-gray border-opacity-30 rounded-lg hover:bg-gray-100 hover:text-white hover:text-opacity-80 hover:bg-gray-dark hover:bg-opacity-70"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  onClick={pagePlus}
                  className="inline-flex items-center ml-1 px-4 py-2  text-sm font-medium text-gray-dark text-opacity-70  bg-white border border-gray border-opacity-30 rounded-lg hover:bg-gray-100 hover:text-white hover:text-opacity-80 hover:bg-gray-dark hover:bg-opacity-70"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  onClick={lastPage}
                  className="inline-flex items-center ml-2 px-4 py-2  text-sm font-medium text-gray-dark text-opacity-70  bg-white border border-gray border-opacity-30 rounded-lg hover:bg-gray-100 hover:text-white hover:text-opacity-80 hover:bg-gray-dark hover:bg-opacity-70"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="text-right">
                <span className="italic text-lg font-light">
                  Página {countPage}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-5">{listCards}</div>
          </div>
        ) : (
          <div className="text-center py-4 h-144">
            <span className="px-48 py-2 text-gray-dark bg-gray-light">
              Loading...
            </span>
          </div>
        )}
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">
                    Informacion general
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-9 w-9 text-xl block py-0">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="bg-gray-light/20 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <div className="grid grid-cols-2 divide-x">
                      <div className="px-2 mx-2">
                        <img className="sha" src={modalCard.images.small} />
                      </div>
                      <div className="pl-4">
                        <div className="grid grid-cols-2">
                          <h3 className="font-semibold text-lg">Nombre:</h3>
                          <h4 className="text-right">{modalCard.name}</h4>
                        </div>
                        <div className="grid grid-cols-2">
                          <h3 className="font-semibold text-lg">Tipo:</h3>
                          <h4 className="text-right">{modalCard.supertype}</h4>
                        </div>
                        <div className="grid grid-cols-2">
                          <h3 className="font-semibold text-lg">Set:</h3>
                          <h4 className="text-right">{modalCard.set.name}</h4>
                        </div>
                        <div className="grid grid-cols-2">
                          <h3 className="font-semibold text-lg">Rareza:</h3>
                          <h4 className="text-right">{modalCard.rarity}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {modalPrices.map((shop) => {
                        return (
                          <div key={shop[0]} className="grid grid-cols-2">
                            <div></div>
                            <h3
                              style={{ textTransform: "capitalize" }}
                              className="font-semibold text-lg text-right"
                            >
                              {shop[0]}:{" "}
                              <span className="font-light text-green">
                                {shop[1].market}$
                              </span>
                            </h3>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent bg-pink/20 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
