import React from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


import "./PlayerProofCard.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const url = "http://3.238.91.249:4000/api/players/"

const headers = {
  'Content-Type': 'application/json',
  'x-access-token': cookies.get("token")
}

export default function PlayerProofCard(props) {

  const proofName = props.proofName;
  const { name, position } = props.player.playerId;
  const measure = props.infoMeasure;
  const value = props.player.result;
  const proofType = props.proofType;

  // function editPlayer() {
  //   cookies.set("playerEditID", props.player._id);
  //   window.location.href = "/dashboard/editplayer";
  // }

  // function deletePlayer() {
  //   const answer = window.confirm("¿Desea eliminar el jugador?")
  //   if (answer) {
  //     Axios.delete(url + props.player._id, { headers: headers })
  //       .then((res) => {
  //         window.alert("Jugador eliminado");
  //         window.location.href = "/dashboard/playerscreen"

  //       }).catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }

  return (

    <div className="border-red-800 border-2 custom-font flex flex-col bg-white rounded-md shadow-md w-full m-6 overflow-hidden sm:w-52">
      <div className=" border-b border-red-800 p-3 text-center text-lg ">
        <p className="font-black">{proofName} ({proofType})</p>
      </div>
      <div className="flex flex-col items-center font-medium justify-center text-base leading-6 mx-6 pt-3 text-gray-700 sm:text-lg sm:leading-7 ">
        <p >{name} - {position}</p>
        <p>{value} {measure}</p>
      </div>

      <div className="text-white p-3 text-center transition-all duration-500">
        <button
          type="button"
          //onClick={editPlayer}
          className="mr-2 bg-red-dark font-semibold text-white px-3 py-1 border-2 border-red-dark"
        >
          Editar
          <FontAwesomeIcon
            className="flex-1 ml-1"
            icon={["fas", "edit"]}
            size="1x"
          />
        </button>
        <button
          type="button"
          //onClick={deletePlayer}
          className="mr-2 bg-red-dark font-semibold text-white px-3 py-1 border-2 border-red-dark"
        >
          Borrar
          <FontAwesomeIcon
            className="flex-1 ml-1"
            icon={["fas", "trash-alt"]}
            size="1x"
          />
        </button>
      </div>

    </div>
  );
}