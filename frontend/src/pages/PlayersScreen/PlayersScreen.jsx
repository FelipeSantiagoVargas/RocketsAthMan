import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayerCard from "../../components/PlayerCard/PlayerCard";

import "./PlayersScreen.css";

export default function PlayersScreen(props) {
  return (
    <div className="custom-font-bold p-12">
      <div className="w-full flex flex-row justify-around  h-28 rounded-3xl bg-grayLi">
        <div className="items-center">
          <button
            type="button"
            // onClick={() => this.iniciarSesion()}
            className="mr-2 h-16 w-40 bg-red-dark font-semibold text-white rounded-xl px-3 py-1 border-2 border-red-dark"
          >
            Borrar
            <FontAwesomeIcon
              className="flex-1 ml-1"
              icon={["fas", "save"]}
              size="1x"
            />
          </button>
        </div>

        <div className="items-center">
          <button
            type="button"
            onClick={() => (window.location.href = "/dashboard/registerplayer")}
            className="mr-2 h-16 w-56 bg-red-dark font-semibold text-white rounded-xl px-3 py-1 border-2 border-red-dark"
          >
            REGISTRAR JUGADORES
            <FontAwesomeIcon
              className="flex-1 ml-1"
              icon={["fas", "save"]}
              size="1x"
            />
          </button>
        </div>
      </div>

      <div className="grid mx-32 grid-flow-row grid-cols-2 gap-12">
        <div className="w-full flex text-center items-center justify-center mt-12 h-28 rounded-3xl bg-gray-dark">
          <h1 className="text-white text-5xl">MASCULINO</h1>
        </div>

        <div className="w-full flex text-center items-center justify-center mt-12 h-28 rounded-3xl bg-gray-dark">
          <h1 className="text-white text-5xl">FEMENINO</h1>
        </div>
      </div>

      <div className="grid mx-32 grid-flow-row grid-cols-2 gap-12">
        <div className="grid mx-6 grid-flow-row grid-cols-2 gap-12">
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
        </div>

        <div className="grid mx-6 grid-flow-row grid-cols-2 gap-12">
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
          <PlayerCard></PlayerCard>
        </div>
      </div>
    </div>
  );
}
