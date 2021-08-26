import React, { Component } from "react";
import logo from "../../assets/ROCKETS_LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

import "./login.css";

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

export default class Login extends Component {
  state = {
    form: {
      username: "",
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
    await axios
      .get(baseUrl, {
        params: {
          username: this.state.form.username,
          password: md5(this.state.form.password),
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set(
            "id",
            respuesta.id,
            { path: "/" },
            { sameSite: "Strict" }
          );
          cookies.set(
            "apellido_paterno",
            respuesta.apellido_paterno,
            { path: "/" },
            { sameSite: "Strict secure" }
          );
          cookies.set(
            "apellido_materno",
            respuesta.apellido_materno,
            { path: "/" },
            { sameSite: "Strict" }
          );
          cookies.set(
            "nombre",
            respuesta.nombre,
            { path: "/" },
            { sameSite: "Strict" }
          );
          cookies.set(
            "nombre",
            respuesta.username,
            { path: "/" },
            { sameSite: "Strict" }
          );
          alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
          //window.location.href = "./";
        } else {
          alert("El usuario o la contraseña son incorrectos.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="w-full h-full mt-8 mx-8 p-12 rounded-3xl bg-no-repeat bg-cover Back-image">
        <div className="flex flex-col bg-white m-20 p-12 rounded-3xl items-center">
          <img className="w-40" src={logo} alt="logo Rockets Athman" />
          <label className="custom-field one ">
            <input
              type="text"
              name="username"
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
          <Link to="/dashboard">
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
          </Link>
          <span>Olvidaste tu contraseña?</span>
        </div>
      </div>
    );
  }
}
