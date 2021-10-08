import React from "react";
import { useState, useEffect } from "react";
import "./StatisticCard.css";
import Cookies from "universal-cookie";
import Axios from "axios";

const cookies = new Cookies();

const headers = {
  'Content-Type': 'application/json',
  'x-access-token': cookies.get("token")
}

export default function StatisticCard(props) {

  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [colors, setColors] = useState([]);
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    Axios.get("http://3.238.91.249:4000/api/statistic/category", { headers: headers })
      .then((res) => {
        console.log(Object.keys(res.data.agility));
        setLabels(Object.keys(res.data.agility));
        setValues(Object.values(res.data.agility));
        setTimeout(() => {
          console.log(labels);
          console.log(values);
        }, 1000);
      }).catch(error => {
        console.log(error);
      })
    generarColores()
  }, []);

  function generarCaracter() {
    var caracter = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return caracter[(Math.random() * 15).toFixed(0)];
  }

  function colorHEX() {
    var color = "";
    for (var i = 0; i < 6; i++) {
      color = color + generarCaracter();
    }
    return "#" + color;
  }

  function generarColores() {
    var colores = [];
    for (var i = 0; i < labels.length; i++) {
      colores.push(colorHEX());
    }
    setColors(colores);
    console.log(colors);
  }

  function configurarGrafica() {
    const data = {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: colors
      }]
    };
    const opciones = {
      responsive: true,
      maintainAspectRatio: false
    }
    setData(data);
    setOptions(opciones);
  }

  return (
    <div className="rounded-2xl p-5 bg-red">
      <h1>esta es una tarjeta</h1>
      <h2>{labels}</h2>
      <h2>{values}</h2>
    </div>
  );
}