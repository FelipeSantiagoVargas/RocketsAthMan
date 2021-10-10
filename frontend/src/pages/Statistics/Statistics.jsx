import React from "react";
import { useState, useEffect } from "react";
import "./Statistics.css";
import Axios from "axios";
import StatisticCard from "../../components/StatisticCard";
import StatisticChart from "../../components/StatisticChart";

const tempUrl = "https://my-json-server.typicode.com/eithri/testfakedb/db"

export default function Statistics(props) {

  const [stats, setStats] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(tempUrl)
      setStats(Object.values(result.data)[0]);
      setTitle(Object.keys(result.data)[0]);
    };
    fetchData();
  }, []);

  return (
    <div className=" p-5 m-5 custom-font-bold rounded-3xl bg-grayLi">
      <h1 className="text-black text-center text-5xl mx-auto">
        ESTADISTICAS DE EQUIPO
      </h1>
      <div className="p-2 m-2 flex flex-col text-center justify-between rounded-3xl bg-white">
        <h1 className="text-3xl">{title.toUpperCase()}</h1>
        <div className="flex flex-row">
          <StatisticCard data={stats} />
          <StatisticChart data={stats} />
        </div>
      </div>
    </div >
  );
}