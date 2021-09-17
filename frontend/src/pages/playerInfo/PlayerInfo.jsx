import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "universal-cookie";
import "./PlayerInfo.css";


const cookies = new Cookies();

const headers = {
  "Content-Type": "application/json",
  "x-access-token": cookies.get("token")
};

export default function PlayerInfo(props) {
  const url = "http://3.238.91.249:4000/api/users/player/" + props.match.params.playerid;

  // axios.get(url, { headers: headers })
  //   .then((response) => {
  //     document.getElementById("birthday").value = response.data.birthday;
  //     console.log(response.data.birthday);
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });

  var myInit = {
    method: 'GET',
    headers: new Headers({
      "Content-Type": "application/json",
      "x-access-token": cookies.get("token")
    }),
    mode: 'cors',
    cache: 'default'
  };
  var myRequest = new Request(url, myInit);
  fetch(myRequest)
    .then(response => response.json())
    .then((responseData) => {
      var parElement = document.getElementById("myPar");
      var textToAdd = document.createTextNode("Text to be added");
      parElement.appendChild(textToAdd);

    }).catch((error) => {
      console.log(error.message);
    });
  return (
    <div>
      <div>

      </div>
      <div>
        <p>
          FECHA DE NACIMIENTO
        </p>
        <p id="birthday">
          {birthDay}
        </p>

      </div>
    </div>
  );
}
