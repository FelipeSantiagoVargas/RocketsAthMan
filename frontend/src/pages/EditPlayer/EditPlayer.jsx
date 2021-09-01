import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "universal-cookie";
import "./EditPlayer.css";

const cookies = new Cookies();
const url =
  "http://3.238.91.249:4000/api/players/" + cookies.get("playerEditID");

const headers = {
  "Content-Type": "application/json",
  "x-access-token":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg2ZGRlOTI4ZThkMDFkMzkwZTdiZSIsImlhdCI6MTYzMDQyMDExMiwiZXhwIjoxNjMwNTA2NTEyfQ.eYfbEQaR7zHevrcIzjoCeDzQrcXI4v36L9G6suR1KlQ",
};

axios
  .get(url)
  .then(function (response) {
    document.getElementById("name").value = response.data.name;
    document.getElementById("phone").value = response.data.phone;
    document.getElementById("lastName").value = response.data.lastName;
    document.getElementById("address").value = response.data.address;
    document.getElementById("gender").value = response.data.gender;
    document.getElementById("email").value = response.data.user.email;
    document.getElementById("position").value = response.data.position;
    document.getElementById("birthday").value = response.data.birthday;
    document.getElementById("height").value = response.data.height;
    document.getElementById("weight").value = response.data.weight;
    document.getElementById("documentId").value = response.data.documentId;
    document.getElementById("eps").value = response.data.eps;
    console.log(response);
  })
}
setVariable();
console.log(jsonData);

//console.log(getPlayerData());


const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Campo obligatorio";
  } else if (values.name.length > 100) {
    errors.name = "El nombre debe tener menos de 100 caracteres";
  }

  if (!values.phone) {
    errors.phone = "Campo obligatorio";
  } else if (!/^[0-9]+$/.test(values.phone)) {
    errors.phone = "El teléfono debe ser de tipo numérico";
  } else if (values.phone.length !== 10) {
    errors.phone = "El teléfono debe tener 10 caracteres";
  }
  if (!values.lastname) {
    errors.lastname = "Campo obligatorio";
  } else if (values.lastname.length > 100) {
    errors.lastname = "El apellido debe tener menos de 100 caracteres";
  }
  if (!values.address) {
    errors.address = "Campo obligatorio";
  } else if (values.address.length > 100) {
    errors.address = "La dirección debe tener menos de 100 caracteres";
  }
  if (!values.gender) {
    errors.gender = "Se debe escoger una opción";
  }
  if (!values.position) {
    errors.position = "Se debe escoger una opción";
  }

  const actualDate = new Date();
  const selectedDate = Date.parse(values.birthday);
  if (!values.birthday) {
    errors.birthday = "Campo obligatorio";
  } else if (selectedDate > actualDate) {
    errors.birthday = "Fecha no válida";
  }
  if (!values.height) {
    errors.height = "Campo obligatorio";
  } else if (!/^[0-9]+$/.test(values.height)) {
<<<<<<< HEAD
    errors.height = 'La estatura debe ser de tipo numérico';
  } else if (values.height.length > 3) {
    errors.height = 'La estatura debe ser menor de 999cm';
=======
    errors.height = "La estatura debe ser de tipo numérico";
  } else if (values.height.length > 5) {
    errors.height = "La estatura debe tener menos de 5 caracteres";
>>>>>>> e73eef335742d535e8126be16cb6bfb349ca2e53
  }
  if (!values.email) {
    errors.email = "Campo obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Correo no válido";
  }
  if (!values.weight) {
    errors.weight = 'Campo obligatorio';
  } else if (values.weight.length > 3) {
    errors.weight = 'El peso debe ser menor de 999kg';
  } else if (!/^\d+(.\d+)?$/.test(values.weight)) {
    errors.weight = 'El peso debe ser de tipo numérico';
  }

  if (!values.documentId) {
    errors.documentId = "Campo obligatorio";
  } else if (values.documentId.length > 100) {
    errors.documentId = "El documento debe tener menos de 100 caracteres";
  }
  if (!values.eps) {
    errors.eps = "Campo obligatorio";
  } else if (values.eps.length > 100) {
    errors.eps = "La eps debe tener menos de 100 caracteres";
  }
  return errors;
};

export default class registerPlayer extends Component {
  state = {
    errors: {},
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { errors, ...noErrors } = this.state;
    const result = validate(noErrors);

    this.setState({ errors: result });

    if (!Object.keys(result).length) {
      delete this.state["errors"];
      console.log(this.state);
      axios
        .put(url, this.state, { headers: headers })
        .then((response) => {
          window.location.href = "./";
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  render() {

    const { errors } = this.state;

    return (
      <div className="w-full min-h-screen pl-20 pr-20 bg-auto object-fill back-image">
        <div className="flex items-center ">
          <FontAwesomeIcon
            className="flex-1 text-red-700 mb-7 mt-5"
            icon={["fas", "user-plus"]}
            size="8x"
          />
        </div>

        <form>
          <div className="grid grid-cols-2 gap-x-10">
            <div className="z-0 mb-4 text-gray-700">
              <span>Nombre</span>
              <input
                className="z-10 block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                type="text"
                id="name"
                name="name"
                onChange={this.handleChange}
                required
              />
              {errors.name && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>Telefono</span>
              <input
                className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                type="text"
                placeholder="Teléfono"
                name="phone"
                id="phone"
                onChange={this.handleChange}
                required
              />
              {errors.phone && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>Apellido</span>
              <input
                className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                type="text"
                placeholder="Apellido"
                name="lastname"
                id="lastName"
                onChange={this.handleChange}
                required
              />
              {errors.lastname && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.lastname}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>Dirección</span>
              <input
                className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                type="text"
                placeholder="Dirección"
                name="address"
                id="address"
                onChange={this.handleChange}
                required
              />
              {errors.address && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.address}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>Genero</span>
              <select
                name="gender"
                id="gender"
                onChange={this.handleChange}
                className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50"
                required
              >
                <option value="DEFAULT" disabled defaultValue>
                  Género:{" "}
                </option>
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
              </select>
              {errors.gender && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.gender}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>Posicion</span>
              <select
                id="position"
                name="position"
                onChange={this.handleChange}
                className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                required
              >
                <option value="DEFAULT" disabled defaultValue>
                  Posición:{" "}
                </option>
                <option value="QB">QB</option>
                <option value="RB">RB</option>
                <option value="LB">LB</option>
                <option value="WR">WR</option>
                <option value="S">S</option>
                <option value="CB">CB</option>
                <option value="C">C</option>
              </select>
              {errors.position && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.position}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>Date of Birth:</span>
              <input
                id="birthday"
                type="Date"
                className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                name="birthday"
                onChange={this.handleChange}
                required
              />
              {errors.birthday && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.birthday}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>Estatura (Cm)</span>
              <input
                type="text"
                className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                placeholder="Estatura (Cm)"
                name="height"
                id="height"
                onChange={this.handleChange}
                required
              />
              {errors.height && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.height}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>
                <FontAwesomeIcon
                  className="flex-1 text-black mx-2"
                  icon={["fas", "lock"]}
                />
                Correo Electronico
              </span>
              <input
                type="text"
                className="block w-full flex-auto bg-grayLi border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                placeholder="Correo electrónico"
                name="email"
                id="email"
                onChange={this.handleChange}
                required
                disabled
              />
              {errors.email && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>Peso (kg)</span>
              <input
                type="text"
                className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                placeholder="Peso (kg)"
                name="weight"
                id="weight"
                onChange={this.handleChange}
                required
              />
              {errors.weight && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.weight}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>
                {" "}
                <FontAwesomeIcon
                  className="flex-1 text-black mx-2"
                  icon={["fas", "lock"]}
                />{" "}
                Documento de Identidad
              </span>
              <input
                type="text"
                className="block w-full bg-grayLi border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                placeholder="Documento de identidad"
                name="documentId"
                id="documentId"
                onChange={this.handleChange}
                required
                disabled
              />
              {errors.documentId && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.documentId}
                </span>
              )}
            </div>

            <div className="mb-4 text-gray-700">
              <span>Eps</span>
              <input
                type="text"
                className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 "
                placeholder="EPS"
                name="eps"
                id="eps"
                onChange={this.handleChange}
                required
              />
              {errors.eps && (
                <span className="ml-3 text-md text-red" id="passwordHelp">
                  {errors.eps}
                </span>
              )}
            </div>
          </div>
        </form>

        <div className="flex justify-end">
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="w-500 bg-black text-white rounded-full px-4 py-3"
          >
            <div className="mr-10 ml-20"></div>
            Registrar
            <FontAwesomeIcon
              className="flex-1 ml-5"
              icon={["fas", "user-check"]}
              size="1x"
            />
          </button>
        </div>
      </div>
    );
  }
}