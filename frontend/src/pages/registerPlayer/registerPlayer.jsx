import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./registerPlayer.css";

export default function registerPlayer() {

  state = {
    form: {
      "imgUrl": "Felipe",
      name: '',
      lastName: '',
      "gender": '',
      birthday: '',
      documentId: '',
      phone: '',
      address: '',
      "position": '',
      height: '',
      weight: '',
      eps: '',
      email: ''
    }
  }

  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }
  return (
    <div className="w-full min-h-screen pl-20 pr-20 bg-auto object-fill back-image">

      <div class="flex items-center ">
        <FontAwesomeIcon className="flex-1 text-red-700 mb-7 mt-5" icon={["fas", "user-plus"]} size="8x" />
      </div>
      <div>
        <div class="grid grid-cols-2 gap-x-10 gap-y-4">
          <input class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Nombre" name="name" onchange={this.handleChange} required />
          <input class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Teléfono" name="phone" onchange={this.handleChange} required />
          <input class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Apellido" name="lastname" onchange={this.handleChange} required />
          <input class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Dirección" name="address" onchange={this.handleChange} required />
          <select class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50">
            <option disabled selected>Género: </option>
            <option>Hombre</option>
            <option>Mujeres</option>
          </select>

          <select class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 ">
            <option disabled selected>Posición: </option>
            <option>QB</option>
            <option>RB</option>
            <option>LB</option>
            <option>WR</option>
            <option>S</option>
            <option>CB</option>
            <option>C</option>
          </select>

          <label class="bg-white border-2 border-black rounded py-2 px-4 m-0 p-0 ">
            <span class="text-gray-500 text-lm mr-8">Date of Birth:</span>
            <input type="Date" class="bg-white h-7 border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-sm focus:bg-red-50 mt-0 mb-0" name="birthday" onchange={this.handleChange} required />
          </label>

          <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Estatura" name="height" onchange={this.handleChange} required />
          <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Correo electrónico" name="email" onchange={this.handleChange} required />
          <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Peso" name="weight" onchange={this.handleChange} required />
          <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Documento de identidad" name="documentId" onchange={this.handleChange} required />
          <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="EPS" name="eps" onchange={this.handleChange} required />
        </div>
      </div>
      <div class="flex justify-end">
        <div class="ml-20">
          <Link to="/dashboard">
            <button type="button" class=" bg-black text-white rounded-full px-4 py-3 mt-10">
              <label class="ml-4 text-lg">Registrar</label>
              <FontAwesomeIcon className="flex-1 ml-5 mr-1" icon={["fas", "user-check"]} size="1x" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
