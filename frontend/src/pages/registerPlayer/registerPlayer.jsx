import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import "./registerPlayer.css";

const url = "http://3.238.91.249:4000/api/players";

const headers = {
  'Content-Type': 'application/json',
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg2ZGRlOTI4ZThkMDFkMzkwZTdiZSIsImlhdCI6MTYzMDQyMDExMiwiZXhwIjoxNjMwNTA2NTEyfQ.eYfbEQaR7zHevrcIzjoCeDzQrcXI4v36L9G6suR1KlQ'
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Campo obligatorio';
  } else if (values.name.length > 100) {
    errors.name = 'El nombre debe tener menos de 100 caracteres';
  }

  if (!values.phone) {
    errors.phone = 'Campo obligatorio';
  } else if (!/^[0-9]+$/.test(values.phone)) {
    errors.phone = 'El teléfono debe ser de tipo numérico';
  } else if (values.phone.length !== 10) {
    errors.phone = 'El teléfono debe tener 10 caracteres';
  }
  if (!values.lastname) {
    errors.lastname = 'Campo obligatorio';
  } else if (values.lastname.length > 100) {
    errors.lastname = 'El apellido debe tener menos de 100 caracteres';
  }
  if (!values.address) {
    errors.address = 'Campo obligatorio';
  } else if (values.address.length > 100) {
    errors.address = 'La dirección debe tener menos de 100 caracteres';
  }
  if (!values.gender) {
    errors.gender = 'Se debe escoger una opción';
  }
  if (!values.position) {
    errors.position = 'Se debe escoger una opción';
  }

  const actualDate = new Date();
  const selectedDate = Date.parse(values.birthday);
  if (!values.birthday) {
    errors.birthday = 'Campo obligatorio';
  } else if (selectedDate > actualDate) {
    errors.birthday = 'Fecha no válida';
  }
  if (!values.height) {
    errors.height = 'Campo obligatorio';
  } else if (!/^[0-9]+$/.test(values.height)) {
    errors.height = 'La estatura debe ser de tipo numérico';
  } else if (values.height.length > 5) {
    errors.height = 'La estatura debe tener menos de 5 caracteres';
  }
  if (!values.email) {
    errors.email = 'Campo obligatorio';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Correo no válido';
  }
  if (!values.weight) {
    errors.weight = 'Campo obligatorio';
  } else if (!/^[0-9]+$/.test(values.weight)) {
    errors.weight = 'El peso debe ser de tipo numérico';
  } else if (values.weight.length > 5) {
    errors.weight = 'El peso debe tener menos de 5 caracteres';
  }

  if (!values.documentId) {
    errors.documentId = 'Campo obligatorio';
  } else if (values.documentId.length > 100) {
    errors.documentId = 'El documento debe tener menos de 100 caracteres';
  }
  if (!values.eps) {
    errors.eps = 'Campo obligatorio';
  } else if (values.eps.length > 100) {
    errors.eps = 'La eps debe tener menos de 100 caracteres';
  }
  return errors;
}

export default class registerPlayer extends Component {

  state = {
    errors: {
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { errors, ...noErrors } = this.state;
    const result = validate(noErrors);

    this.setState({ errors: result })

    if (!Object.keys(result).length) {
      delete this.state['errors'];
      console.log(this.state);
      axios.post(url, this.state, { headers: headers }).then(response => {
        window.location.href = "./";
      }).catch(error => {
        console.log(error.message);
      })
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="w-full min-h-screen pl-20 pr-20 bg-auto object-fill back-image" >

        <div className="flex items-center ">
          <FontAwesomeIcon className="flex-1 text-red-700 mb-7 mt-5" icon={["fas", "user-plus"]} size="8x" />
        </div>

        <form>
          <div className="grid grid-cols-2 gap-x-10">
            <div className="mb-4 text-gray-700">
              <input className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Nombre" name="name" onChange={this.handleChange} required />
              {errors.name && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.name}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <input className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Teléfono" name="phone" onChange={this.handleChange} required />
              {errors.phone && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.phone}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <input className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Apellido" name="lastname" onChange={this.handleChange} required />
              {errors.lastname && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.lastname}</span>}
            </div>


            <div className="mb-4 text-gray-700">
              <input className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Dirección" name="address" onChange={this.handleChange} required />
              {errors.address && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.address}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <select name="gender" defaultValue={"DEFAULT"} onChange={this.handleChange} className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50" required>
                <option value="DEFAULT" disabled defaultValue>Género: </option>
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
              </select>
              {errors.gender && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.gender}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <select name="position" defaultValue={"DEFAULT"} onChange={this.handleChange} className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " required>
                <option value="DEFAULT" disabled defaultValue>Posición: </option>
                <option value="QB">QB</option>
                <option value="RB">RB</option>
                <option value="LB">LB</option>
                <option value="WR">WR</option>
                <option value="S">S</option>
                <option value="CB">CB</option>
                <option value="C">C</option>
              </select>
              {errors.position && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.position}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <label className="block bg-white border-2 border-black rounded py-2 px-4 m-0 p-0 ">
                <span className="text-gray-500 text-lm mr-8">Date of Birth:</span>
                <input type="Date" className="bg-white h-7 border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-sm focus:bg-red-50 mt-0 mb-0" name="birthday" onChange={this.handleChange} required />
              </label>
              {errors.birthday && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.birthday}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <input type="text" className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Estatura (mts)" name="height" onChange={this.handleChange} required />
              {errors.height && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.height}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <input type="text" className="block w-full flex-auto bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Correo electrónico" name="email" onChange={this.handleChange} required />
              {errors.email && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.email}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <input type="text" className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Peso (kg)" name="weight" onChange={this.handleChange} required />
              {errors.weight && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.weight}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <input type="text" className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Documento de identidad" name="documentId" onChange={this.handleChange} required />
              {errors.documentId && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.documentId}</span>}
            </div>

            <div className="mb-4 text-gray-700">
              <input type="text" className="block w-full bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="EPS" name="eps" id="eps" onChange={this.handleChange} required />
              {errors.eps && <span className="ml-3 text-md text-red" id="passwordHelp">{errors.eps}</span>}
            </div>
          </div>
        </form>

        <div className="flex justify-end">
          <button type="submit" onClick={this.handleSubmit} className="w-500 bg-black text-white rounded-full px-4 py-3">
            <div className="mr-10 ml-20"></div>
            Registrar
            <FontAwesomeIcon className="flex-1 ml-5" icon={["fas", "user-check"]} size="1x" />
          </button>
        </div>
      </div>
    )
  }
}
