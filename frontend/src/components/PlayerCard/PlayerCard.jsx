import React from "react";
import picture from "../../assets/profile_picture.jpg";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PlayerCard.css";

const url = "http://3.238.91.249:4000/api/players/"

const headers = {
  'Content-Type': 'application/json',
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg2ZGRlOTI4ZThkMDFkMzkwZTdiZSIsImlhdCI6MTYzMDM2OTU0NCwiZXhwIjoxNjMwNDU1OTQ0fQ.AmhIgiw9lUd5bG8KgBRjPX7zPleXQFST4Dc6bsWgM54'
}

export default function PlayerCard(props) {
  const { name, height, weight, birthday } = props.player;

  function editPlayer() {
    console.log("Acción para editar el id: ", props.player._id);
  }

  function deletePlayer() {

    console.log(props.player._id)
    const answer = window.confirm("Desea eliminar el jugador?")
    if (answer) {

      Axios.delete(url + props.player._id, { headers: headers })
        .then((res) => {
          console.log('Eliminado')
        }).catch((error) => {
          console.log(error)
        })
    }

  }


  return (
    <div>
      <div className="custom-font flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
        <div className="flex justify-center">
          <img src={picture} alt="" className="h-24 w-24 rounded-3xl m-6" />
        </div>
        <p className="text-center text-base leading-6 px-2 pb-2 uppercase">
          {name}
        </p>
        <div className="flex flex-col text-base leading-6 mx-6 text-gray-700 sm:text-lg sm:leading-7 mb-3">
          <p>Estatura: {height}</p>
          <p>Peso: {weight}</p>
          <p>Edad: {birthday}</p>
        </div>
        <div className="border-solid border-red-800 border-2 rounded-b-lg text-white p-3 text-center  transition-all duration-500">
          <button
            type="button"
            onClick={() => (window.location.href = "/dashboard/editplayer")}
            className="mr-2 bg-red-dark font-semibold text-white rounded-3xl px-3 py-1 border-2 border-red-dark"
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
            onClick={deletePlayer}
            className="mr-2 bg-red-dark font-semibold text-white rounded-3xl px-3 py-1 border-2 border-red-dark"
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
    </div>
  );
}



/*<div className="custom-font py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-l sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red to-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="">
              <div className="-my-14 flex justify-center items-start">
                <p className="absolute border  border-black ml-15 bg-gray-300 margin-pos px-2">
                  QB
                </p>
                <div className="border-solid border-black">
                  <img
                    src={picture}
                    className="h-20 w-20 rounded-3xl"
                    alt="profile_picture"
                  />
                </div>
              </div>
              <div className="mt-16 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7">
                NOMBRE DEL JUGADOR
              </div>
              <div className="py-4 flex flex-col text-base leading-6  text-gray-700 sm:text-lg sm:leading-7">
                <p>ESTATURA:</p>
                <p>PESO: </p>
                <p>EDAD: </p>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <button
                  type="button"
                  // onClick={() => this.iniciarSesion()}
                  className="mr-2 bg-red-dark font-semibold text-white rounded-3xl px-3 py-1 border-2 border-red-dark"
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
                  // onClick={() => this.iniciarSesion()}
                  className="mr-2 bg-red-dark font-semibold text-white rounded-3xl px-3 py-1 border-2 border-red-dark"
                >
                  Borrar
                  <FontAwesomeIcon
                    className="flex-1 ml-1"
                    icon={["fas", "save"]}
                    size="1x"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

}
*/
=======
    </div>
*/

>>>>>>> 8da3295da293b382e29e9950a5d26a624e1970cd
