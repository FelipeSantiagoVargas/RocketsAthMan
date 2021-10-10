import React from "react";
import { useState, useEffect } from "react";
import "./Statistics.css";
import Axios from "axios";
import Cookies from "universal-cookie";
import StatisticCard from "../../components/StatisticCard/StatisticCard";


const cookies = new Cookies();

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
    <div className="custom-font-bold">
      <div className=" p-5 m-5 flex flex-col justify-between rounded-3xl bg-grayLi">
        <h1 className="text-white text-2xl mx-auto">
          ESTADISTICAS DE EQUIPO
        </h1>
        {<StatisticCard title={title} data={stats} />}
      </div>
    </div >
  );
}