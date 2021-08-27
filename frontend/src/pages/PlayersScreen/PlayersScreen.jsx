import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayerCard from "../../components/PlayerCard/PlayerCard";

import "./PlayersScreen.css";

export default function PlayersScreen(props) {
  return (
    <div className="custom-font-bold">
      <div className="p-5 m-5 flex flex-row justify-between rounded-3xl bg-grayLi">
        <button
          type="button"
          // onClick={() => this.iniciarSesion()}
          className="mr-2 h-16 w-1/3 bg-red-dark font-semibold text-white rounded-xl px-3 py-1 border-2 border-red-dark"
        >
          Borrar
          <FontAwesomeIcon
            className="flex-1 ml-1"
            icon={["fas", "save"]}
            size="1x"
          />
        </button>
        <button
          type="button"
          onClick={() => (window.location.href = "/dashboard/registerplayer")}
          className="mr-2 h-16 w-1/3 bg-red-dark font-semibold text-white rounded-xl px-3 py-1 border-2 border-red-dark"
        >
          REGISTRAR JUGADORES
          <FontAwesomeIcon
            className="flex-1 ml-1"
            icon={["fas", "save"]}
            size="1x"
          />
        </button>
      </div>

      <div className="flex flex-row">
        <section className="w-1/2 m-5 bg-grayLi rounded-t-2xl">
          <h1 className="rounded-2xl text-center py-5 bg-gray-dark text-white text-5xl">
            MASCULINO
          </h1>
          <div className="w-full flex flex-wrap">
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
          </div>
        </section>
        <section className="w-1/2 m-5 bg-grayLi rounded-t-2xl">
          <h1 className="rounded-2xl text-center py-5 bg-gray-dark text-white text-5xl">
            FEMENINO
          </h1>
          <div className="w-full flex flex-wrap">
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
          </div>
        </section>
      </div>
    </div>
  );
}
