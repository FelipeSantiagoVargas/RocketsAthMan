import React, { useEffect, useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TestCardComp from "../../components/TestCardComp/TestCardComp";

import "./TestScreen.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const headers = {
  'Content-Type': 'application/json',
  'x-access-token': cookies.get("token")
}

export default function TestScreen(props) {

  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Axios.get(
          "http://3.238.91.249:4000/api/proofs", { headers: headers}
        )
        setTests(data)     
        console.log(JSON.stringify(data))   
      } catch (err) { }
    }
    fetchData()    
    
  }, [])

  return (

    <div className="custom-font-bold">
      <div className="p-5 m-5 flex flex-row justify-between rounded-3xl bg-grayLi">


        <button
          type="button"
          onClick={() => (window.location.href = "/dashboard/create-test")}
          className="mr-2 h-16 w-1/3 bg-red-dark font-semibold text-white rounded-xl px-3 py-1 border-2 border-red-dark"
        >
          CREAR PRUEBA DE RENDIMIENTO
          <FontAwesomeIcon
            className="flex-1 ml-1"
            icon={["fas", "plus-circle"]}
            size="1x"
          />
        </button>
      </div>

      <div>
        {tests.map((test) => (
          <TestCardComp key={test._id} test={test} />
        ))}

      </div>
    </div>













  );
}
