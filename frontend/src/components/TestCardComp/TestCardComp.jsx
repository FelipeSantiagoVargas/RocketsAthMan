import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

import "./TestCardComp.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();


const url = "http://3.238.91.249:4000/api/proofs/"

const headers = {
    'Content-Type': 'application/json',
    'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg2ZGRlOTI4ZThkMDFkMzkwZTdiZSIsImlhdCI6MTYzMTgwODIyMiwiZXhwIjoxNjMxODk0NjIyfQ.Go2vR8da9H__Gw6o1vJhugXAWULtlEu4ST-5agZi5wM"
}

export default function TestCardComp(props) {

    const { name, rateMale, rateFemale, unitMeasure, proofType, description } = props.test;

    function editTest() {
        cookies.set("testEditId", props.test._id);
        window.location.href = "/dashboard/edit-proof"
    }
    
    function deleteTest() {
        const answer = window.confirm("¿Desea eliminar el jugador?")
        if (answer) {
          Axios.delete(url + props.test._id, { headers: headers })
            .then((res) => {
              window.alert("Prueba eliminada");
              window.location.href = "/dashboard/test"
    
            }).catch((error) => {
              console.log(error)
            })
        }
      }

    return (
        <div className="p-5 m-5 flex flex-row justify-between rounded-3xl bg-gray-50 shadow-xl">
            <div className="flex-1">
                {name}
            </div>
            <div className="flex-1">
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">{proofType.name}</span>
            </div>
            <div className="flex-1">
                {unitMeasure.name}
            </div>
            <div className="flex-1">
                <span className="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">{rateMale}</span>
            </div>
            <div className="flex-1">
                <span className="bg-pink-200 text-pink-600 py-1 px-3 rounded-full text-xs">{rateFemale}</span>
            </div>

            <div className="flex-1 flex">
                <div className="flex-1 transform hover:text-red-900">
                    <button>
                        <FontAwesomeIcon
                            className="flex-1 ml-2"
                            icon={["fas", "play"]}
                            size="1x"
                        />
                    </button>
                </div>
                <div className="flex-1 transform hover:text-red-900">
                    <button
                        type="button"
                        onClick={editTest}>
                        <FontAwesomeIcon
                            className="flex-1 ml-2"
                            icon={["fas", "edit"]}
                            size="1x"
                        />
                    </button>
                </div>
                <div className="flex-1 transform hover:text-red-900">
                    <button
                        type="button"
                        onClick={deleteTest}>
                        <FontAwesomeIcon
                            className="flex-1 ml-2"
                            icon={["fas", "trash-alt"]}
                            size="1x"
                        />
                    </button>
                </div>
            </div>

        </div>
    );
}

