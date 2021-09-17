/* eslint-disable */
import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DashboardMenu.css";
import { Link } from "react-router-dom";

// Pages
import PlayerCard from "../PlayerCard/PlayerCard";
import PlayersScreen from "../../pages/PlayersScreen";
import registerPlayer from "../../pages/registerPlayer";
import EditPlayer from "../../pages/EditPlayer";
import TestScreen from "../../pages/TestScreen";
import TestCardComp from "../TestCardComp/TestCardComp";
import CreateTest from "../../pages/CreateTest";
import EditTest from "../../pages/EditTest";
import PlayerInfo from "../../pages/playerInfo/PlayerInfo";

import Cookies from "universal-cookie";


const cookies = new Cookies();

export default function DashboardMenu(props) {

  let { path } = useRouteMatch();

  function logOut() {
    cookies.remove("token")
    window.location.href = "/";
  }

  function tokenValidate() {
    if (cookies.get("token") == undefined) {
      window.location.href = "/";
    }
  }

  tokenValidate();

  return (
    <div className="header relative w-full min-h-screen flex">
      <div className="relative bg-red min-w-max flex-col items-center">
        <img
          className="w-32 rounded-full mx-10 mt-10"
          src="https://i.ibb.co/WgBTFBj/profile-picture.jpg"
          alt="Profile Photo"
        />
        <h1 className="text-center px-5 pb-5 text-3xl text-white font-extrabold ">
          Coach
        </h1>
        <Link to="/dashboard">
          <article className="block p-5 text-2xl text-white font-extrabold bg-gray-dark">
            <FontAwesomeIcon
              className="flex-1 mx-2"
              icon={["fas", "users"]}
              size="1x"
            />
            Plantilla
          </article>
        </Link>
        <nav>
          <a className="block py-2.5 px-4 transition duration-200 hover:bg-gray-dark text-white">
            Masculino
          </a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-dark text-white">
            Femenino
          </a>
          <a onClick={logOut} className="block py-2.5 px-4 transition duration-200 hover:bg-gray-dark text-white">
            Cerrar sesión
          </a>
        </nav>
        <Link to="/dashboard/test">
          <article className="block p-5 text-xl text-white font-extrabold bg-gray-dark">
            <FontAwesomeIcon
              className="flex-1 mx-2"
              icon={["fas", "clipboard-list"]}
              size="1x"
            />
            Pruebas de Rendimiento
          </article>
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <div className="bg-gray-dark flex items-center justify-center w-full h-28">
          <Switch>
            <Route path={`${path}/registerplayer`}>
              <h1 className="text-6xl text-white">REGISTRAR JUGADOR</h1>
            </Route>
            <Route path={`${path}/create-test`}>
              <h1 className="text-6xl text-white">CREAR PRUEBA DE RENDIMIENTO</h1>
            </Route>
            <Route path={`${path}/editplayer`}>
              <h1 className="text-6xl text-white">EDITAR JUGADOR</h1>
            </Route>
            <Route path={`${path}/edit-proof`}>
              <h1 className="text-6xl text-white">EDITAR PRUEBA</h1>
            </Route>
            <Route path={`${path}/test`}>
              <h1 className="text-6xl text-white">PRUEBAS DE RENDIMIENTO</h1>
            </Route>
            <Route path={`${path}*`} exact>
              <h1 className="text-6xl text-white">JUGADORES</h1>
            </Route>
          </Switch>
        </div>
        <div className="bg-gray min-h-screen w-full">
          <Switch>
            <Route path={`${path}/card`} component={PlayerCard} />
            <Route path={`${path}/testcard`} component={TestCardComp} />
            <Route path={`${path}/registerplayer`} component={registerPlayer} />
            <Route path={`${path}/create-test`} component={CreateTest} />
            <Route path={`${path}/editplayer`} component={EditPlayer} />
            <Route path={`${path}/edit-proof`} component={EditTest} />
            <Route path={`${path}/player/:playerid`} component={PlayerInfo} />


            <Route path={`${path}/test`} component={TestScreen} />
            <Route path={`${path}*`} component={PlayersScreen} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
