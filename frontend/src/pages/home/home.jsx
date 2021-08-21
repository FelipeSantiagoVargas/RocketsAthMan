import React from "react";
import logo from "../../assets/ROCKETS_LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.css";

export default function Home() {
  return (
    <div className="flex justify-end background p-5 text-white flex mx-16 my-16 rounded-t-3xl">
      <div className="flex justify-evenly text-center px-20 items-center w-3/5">
        <h1 className="flex-1 ">INICIO</h1>
        <h1 className="flex-1 ">CONÓCENOS</h1>
        <img className="w-20" src={logo} alt="logo Rockets Athman" />
        <h1 className="flex-1 ">LOGROS</h1>
        <h1 className="flex-1 ">CONTACTENOS</h1>
      </div>
      <div className="flex justify-center text-center items-center px-10 w-1/5">
        <FontAwesomeIcon
          className="flex-1"
          icon={["fab", "tiktok"]}
          size="2x"
        />
        <FontAwesomeIcon
          className="flex-1"
          icon={["fab", "facebook"]}
          size="2x"
        />
        <FontAwesomeIcon
          className="flex-1"
          icon={["fab", "instagram"]}
          size="2x"
        />
      </div>
    </div>
  );
}
