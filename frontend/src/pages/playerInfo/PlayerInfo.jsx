import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picture from "../../assets/profile_picture.jpg";

import Cookies from "universal-cookie";
import "./PlayerInfo.css";

const cookies = new Cookies();

export default function PlayerInfo(props) {
  const url = "http://3.238.91.249:4000/api/users/player/" + props.match.params.playerid;

  const [player, setPlayer] = useState("");

  var myInit = {
    method: 'GET',
    headers: new Headers({
      "Content-Type": "application/json",
      "x-access-token": cookies.get("token")
    }),
    mode: 'cors',
    cache: 'default'
  };

  var myRequest = new Request(url, myInit);

  useEffect(() => {
    fetch(myRequest)
      .then(response => response.json())
      .then((responseData) => {
        if (responseData) {
          setPlayer(responseData);
        } else {
          console.log("datos vacíos");
        }
      }).catch((error) => {
        console.log(error.message);
      })
  }, [url]);

  console.log(player);

  return (
    <div className="flex justify-center">
      <div className="block content-center justify-center items-center">
        <div className="relative content-center justify-center items-center" >
          <img src={picture} alt="" className="w-80 rounded-full mx-10 mt-10" />
          <h1 className="text-gray-600 mt-5 text-4xl text-center">
            {player.name.toUpperCase()}
          </h1>
          <h1 className="text-gray-600 text-center">
            {player.position}
          </h1>
        </div>


        <div className="flex justify-center space-x-20 ">
          <h1 className="text-gray-600">
            Peso: {player.weight} kg
          </h1>
          <h1 className="text-gray-600">
            Altura: {player.height} cm
          </h1>
        </div>
      </div>
      <div className="w-1/3 bg-gray-300 mx-10 mt-10 py-10 pl-10 rounded-2xl ">
        <p >
          FECHA DE NACIMIENTO
        </p>
        <p className="mb-2 text-gray-600">
          {player.birthday}
        </p>

        <p>
          CORREO ELECTRÓNICO
        </p>
        <p className="mb-2 text-gray-600">
          correo@gmail.com
        </p>

        <p>
          DOCUMENTO
        </p>
        <p className="mb-2 text-gray-600">
          {player.documentId}

        </p>

        <p>
          EPS
        </p>
        <p className="mb-2 text-gray-600">
          {player.eps}
        </p>


        <p>
          DIRECCIÓN
        </p >
        <p className="mb-2 text-gray-600">
          {player.address}
        </p>

        <p>
          TELÉFONO
        </p>
        <p className="text-gray-600">
          {player.phone}
        </p>
      </div>
    </div >
  );
}
