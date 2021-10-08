import React from "react";

import "./Statistics.css";
import StatisticCard from "../../components/StatisticCard/StatisticCard";

export default function Statistics(props) {

  return (

    <div className="custom-font-bold">
      <div className=" p-5 m-5 flex flex-col justify-between rounded-3xl bg-grayLi">
        <h1 className="text-white text-2xl mx-auto">
          ESTADISTICAS DE EQUIPO
        </h1>
        <StatisticCard />
      </div>
    </div>
  );
}