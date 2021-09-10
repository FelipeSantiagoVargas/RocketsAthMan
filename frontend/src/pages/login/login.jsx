import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "universal-cookie";

import "./login.css";

const instance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const baseUrl = "http://3.238.91.249:4000/api/auth/signin";
const cookies = new Cookies();

export default class Login extends Component {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  iniciarSesion = async () => {
    await instance
      .post(baseUrl, {
        email: this.state.form.email,
        password: this.state.form.password,
      })
      .then((response) => {
        if (response.data.token) {
          cookies.set("token", response.data.token);
          alert(`Bienvenido ${cookies.get("token")}`);
          window.location.href = "./dashboard";
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="w-full min-h-screen p-14 bg-no-repeat bg-cover Back-image">
        <div className="flex flex-col bg-white m-20 p-12 rounded-3xl items-center">
          <img
            className="w-48"
            src="https://i.ibb.co/M1MbSvC/ROCKETS-LOGO.png"
            alt="logo Rockets Athman"
          />
          <label className="custom-field one ">
            <input
              type="text"
              name="email"
              required
              onChange={this.handleChange}
            />
            <span className="placeholder">Usuario</span>
          </label>
          <label className="custom-field one ">
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
            <span className="placeholder">Contraseña</span>
          </label>
          <button
            type="button"
            onClick={() => this.iniciarSesion()}
            className="mr-3 my-2 bg-red-dark font-semibold text-white rounded-3xl px-3 py-1 border-2 border-red-dark"
          >
            Ingresar
            <FontAwesomeIcon
              className="flex-1 ml-1"
              icon={["fas", "external-link-alt"]}
              size="1x"
            />
          </button>
          <span>¿Olvidaste tu contraseña?</span>
        </div>
      </div>
    );
  }
}
