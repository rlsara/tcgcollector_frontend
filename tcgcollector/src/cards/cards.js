import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
export default function Cards() {
  const [data, setData] = useState(null);
  var listItems = undefined;
  if (data !== undefined && data !== null) {
    var getdata = data.data;
    listItems = getdata.map((product) => (
      <Card
        shadow={false}
        className="px-2 py-5 grid w-full items-end justify-center overflow-hidden text-center hover:bg-gray-light hover:bg-opacity-30"
      >
        <CardHeader>
          <img src={product.images.logo}/>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-4 py-2 text-gray bg-gray-light">
            {product.name}
          </Typography>
        </CardBody>
      </Card>
    ));
  }

  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.pokemontcg.io/v2/sets?page=3&pageSize=15");
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
  return (
    <div>
      <button onClick={handleClick}>Aqui van las cartas</button>
      {listItems ? <div className="grid grid-cols-3 m-4">{listItems}</div> : <div>Loading...</div>}
    </div>
  );
}
