/* eslint-disable */
import React from "react";
import picture from "../../assets/profile_picture.jpg";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DashboardMenu.css";

// Pages
// import Home from "../../pages/home";
// import Error404 from "../../pages/error404";
import Login from "../../pages/login";
import PlayerCard from "../PlayerCard/PlayerCard";
import PlayersScreen from "../../pages/PlayersScreen/PlayersScreen";
import registerPlayer from "../../pages/registerPlayer";

export default function DashboardMenu(props) {
  let { path } = useRouteMatch();

  return (
    <div className="header relative w-full min-h-screen flex">
      <div class="relative bg-red min-w-max flex-col items-center">
        <img
          className="w-32 rounded-full mx-10 mt-10"
          src={picture}
          alt="Profile Photo"
        />
        <h1 className="text-center px-5 pb-5 text-3xl text-white font-extrabold ">
          Coach
        </h1>

        <article class="block p-5 text-2xl text-white font-extrabold bg-gray-dark">
          <FontAwesomeIcon
            className="flex-1 mx-2"
            icon={["fas", "users"]}
            size="1x"
          />
          Plantilla
        </article>
        <nav>
          <a className="block py-2.5 px-4 transition duration-200 hover:bg-gray-dark text-white">
            Masculino
          </a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-dark text-white">
            Femanino
          </a>
        </nav>
      </div>
      <div className="flex flex-col w-full">
        <div class="bg-gray-dark flex items-center justify-center w-full h-28">
          <Switch>
            <Route path={`${path}/`} exact>
              <h1 className="text-6xl text-white">Panel de Control</h1>
            </Route>
            <Route path={`${path}/a`}>
              <h1 className="text-6xl text-white">Usuarios</h1>
            </Route>
            <Route path={`${path}/b`} component={Login}>
              <h1 className="text-6xl text-white">Fatos</h1>
            </Route>
          </Switch>
        </div>
        <div class="bg-gray min-h-screen w-full">
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>

            <Route path={`${path}/card`} component={PlayerCard} />
            <Route path={`${path}/jugadores`} component={PlayersScreen} />
            <Route path={`${path}/b`} component={Login} />
            <Route path={`${path}/registerplayer`} component={registerPlayer} />
            <Route path={`${path}/b`} component={Login} />
            <Route path={`${path}/*`}>
              <h3>Please select a topic.</h3>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
