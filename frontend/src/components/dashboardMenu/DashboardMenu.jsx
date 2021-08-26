import React from "react";
import picture from "../../assets/profile_picture.jpg";
import "./DashboardMenu.css";

export default function DashboardMenu(props) {
  console.log(props.name);
  return (
    <div className="relative w-full min-h-screen flex">
      <div class="relative bg-red min-w-max flex-col items-center">
        <img
          className="w-32 rounded-full m-10"
          src={picture}
          alt="Profile Picture"
        />
        <a href="#" class="text-white flex items-center space-x-2 px-4">
          <span class="text-2xl font-extrabold">Better Dev</span>
        </a>

        <nav>
          <a
            href="#"
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-dark hover:text-white"
          >
            Home
          </a>
          <a
            href=""
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-dark hover:text-white"
          >
            About
          </a>
          <a
            href=""
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-dark hover:text-white"
          >
            Features
          </a>
          <a
            href=""
            class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-dark hover:text-white"
          >
            Pricing
          </a>
        </nav>
      </div>
      <div className="flex flex-col w-full">
        <div class="bg-gray-dark flex items-center justify-center w-full h-28">
          <h1 className="header text-6xl text-white">REGISTRAR JUGADOR</h1>
        </div>
        <div class="bg-gray min-h-screen w-full">content goes here</div>
      </div>
    </div>
  );
}