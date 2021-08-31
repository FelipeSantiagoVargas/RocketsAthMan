import React from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import right_main from "../../assets/right_main.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex bg-gray">
        <section className="w-1/2 p-12">
          <h3 className="text-gray font-bold tracking-widest">
            EQUIPO DE FOOTBALL FLAG
          </h3>
          <h1 className="text-7xl my-2">Haz parte de nuestra familia </h1>
          <span className="text-red text-7xl my-2">ROCKETS 🚀</span>
          <div className="items-center">
            <button
              type="button"
              className="mr-3 my-2 bg-red-dark font-semibold text-white rounded-3xl px-3 py-1 border-2 border-red-dark"
            >
              Conócenos
              <FontAwesomeIcon
                className="flex-1 ml-1"
                icon={["fas", "external-link-alt"]}
                size="1x"
              />
            </button>
            <Link to="/login">
              <button
                type="button"
                className="ml-5 my-10 font-semibold bg-white text-red-dark rounded-3xl px-3 py-1 border-2 border-red-dark"
              >
                Iniciar Sesión
              </button>
            </Link>
          </div>
        </section>
        <img
          className="w-1/2 border-1"
          src={right_main}
          alt="logo Rockets Athman"
        />
      </div>
    </div>
  );
}
