import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

var countPage = 1;
const pageSize = 15;
export default function Sets() {
  const [data, setData] = useState(null);
  var listSets = undefined;
  function pagePlus() {
    countPage++;
    getSets();
  }
  function pageMinus() {
    if (countPage > 1) {
      countPage--;
      getSets();
    }
  }
  function firstPage(){
    countPage = 1;
    getSets()
  }
  function lastPage(){
    countPage = Math.ceil(data.totalCount / pageSize);
    getSets()
  }
  const getSets = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.pokemontcg.io/v2/sets?page=` +
        countPage +
        `&pageSize=`+ pageSize +`&orderBy=-releaseDate`
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
    countPage = 1;
  }, []);
  if (data !== undefined && data !== null) {
    var getdata = data.data;
    listSets = getdata.map((set) => (
      <Link key={set.id} to={"/cards/" + set.id}>
        <Card
          
          className="px-2 py-2 ml-2 mb-4 grid w-full shadow-inner shadow-gray-light items-end justify-center overflow-hidden text-center hover:bg-gray-light hover:bg-opacity-40"
        >
          <CardHeader>
            <img
              className="object-scale-down h-48 w-96"
              src={set.images.logo}
            />
          </CardHeader>
          <CardBody className="mt-2">
            <Typography
              variant="h5"
              className="mb-2 py-2 text-gray-dark bg-gray-light"
            >
              {set.name}
            </Typography>
          </CardBody>
        </Card>
      </Link>
    ));
  }
  return (
    <div className="bg-pink min-h-screen h-fit bg-opacity-20">
      <div className="container min-h-screen h-fit mx-auto px-20 bg-white">
        <h2 className="text-5xl py-2 text-gray-dark font-sans text-center font-semibold leading-tight">
          Sets
        </h2>
        {listSets ? (
          <div className="pt-2">
            <div className="w-full grid grid-cols-2">
              <div className="text-left">
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
                  className="inline-flex items-center px-4 py-2 mb-3 text-sm font-medium text-gray-dark text-opacity-70  bg-white border border-gray border-opacity-30 rounded-lg hover:bg-gray-100 hover:text-white hover:text-opacity-80 hover:bg-gray-dark hover:bg-opacity-70"
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
                  className="inline-flex items-center ml-1 px-4 py-2 mb-3 text-sm font-medium text-gray-dark text-opacity-70  bg-white border border-gray border-opacity-30 rounded-lg hover:bg-gray-100 hover:text-white hover:text-opacity-80 hover:bg-gray-dark hover:bg-opacity-70"
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
            <div className="grid grid-cols-3">{listSets}</div>
          </div>
        ) : (
          <div className="text-center py-4 h-144">
            <span className="px-48 py-2 text-gray-dark bg-gray-light">
              Loading...
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
