import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import PlayerCard from "../../components/PlayerCard/PlayerCard";

import "./PlayersScreen.css";


export default function PlayersScreen(props) {

  const [players, setPlayers] = useState([]);
  const [playersCardList, setPlayersCardList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Axios.get(
          "http://3.238.91.249:4000/api/players"
        );
        setPlayers(data);
        setPlayersCardList(data);
      } catch (err) { }
    };
    fetchData();
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
    filterValues(e.target.value);
  }

  const filterValues = (searchValue) => {
    var searchResult = playersCardList.filter((value) => {
      if (value.name.toString().toLowerCase().includes(searchValue.toLowerCase())) {
        return value;
      }
      return undefined;
    })
    setPlayers(searchResult);
  }

  return (
    <div className="custom-font-bold">
      <div className="p-5 m-5 flex flex-row justify-between rounded-3xl bg-grayLi">
        <div className="flex content-center justify-center items-center mr-2 h-16 w-1/3 bg-red-dark font-semibold rounded-xl px-3 py-1 border-2 border-red-dark">
          <input className="text-black w-1/2 border-2 h-8 border-black rounded pl-3" value={search}
            placeholder="Buscar jugadores"
            onChange={handleChange}
          />

          <FontAwesomeIcon
            id="disabledButton"
            className="ml-2 text-white"
            icon={["fas", "search"]}
            size="1x"
          />

        </div>

        <button
          type="button"
          onClick={() => (window.location.href = "/dashboard/registerplayer")}
          className="mr-2 h-16 w-1/3 bg-red-dark font-semibold text-white rounded-xl px-3 py-1 border-2 border-red-dark"
        >
          REGISTRAR JUGADORES
          <FontAwesomeIcon
            className="flex-1 ml-1"
            icon={["fas", "user-plus"]}
            size="1x"
          />
        </button>
      </div>

      <div className="flex flex-row">
        <section className="w-1/2 m-5 bg-grayLi rounded-2xl">
          <h1 className="rounded-2xl text-center py-5 bg-gray-dark text-white text-5xl">
            MASCULINO
          </h1>
          <div className="w-full flex flex-wrap">
            {players
              .filter((players) => players.gender.includes("Male"))
              .map((player) => (
                <PlayerCard key={player._id} player={player} />
              ))}
          </div>
        </section>
        <section className="w-1/2 m-5 bg-grayLi rounded-2xl">
          <h1 className="rounded-2xl text-center py-5 bg-gray-dark text-white text-5xl">
            FEMENINO
          </h1>
          <div className="w-full flex flex-wrap">
            {players
              .filter((players) => players.gender.includes("Female"))
              .map((player) => (
                <PlayerCard key={player._id} player={player} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
