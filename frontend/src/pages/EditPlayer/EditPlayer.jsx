import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import "./EditPlayer.css";

const url = "http://3.238.91.249:4000/api/players";

const headers = {
  'Content-Type': 'application/json',
  'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg2ZGRlOTI4ZThkMDFkMzkwZTdiZSIsImlhdCI6MTYzMDM2OTU0NCwiZXhwIjoxNjMwNDU1OTQ0fQ.AmhIgiw9lUd5bG8KgBRjPX7zPleXQFST4Dc6bsWgM54'
}

export default class EditPlayer extends Component {

  state = {
    form: {
      "imgUrl": "unaimagen.jpg",
      name: '',
      lastName: '',
      gender: '',
      birthday: '',
      documentId: '',
      phone: '',
      address: '',
      position: '',
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

  postPlayers() {
    axios.post(url, this.state.form, { headers: headers }).then(response => {
      window.location.href = "./";
    }).catch(error => {
      console.log(error.message);
    })
  }

  render() {
    return (
      <div className="w-full min-h-screen pl-20 pr-20 bg-auto object-fill back-image" >

        <div class="flex items-center ">
          <FontAwesomeIcon className="flex-1 text-red-700 mb-7 mt-5" icon={["fas", "edit"]} size="8x" />
        </div>
        <div>
          <div class="grid grid-cols-2 gap-x-10 gap-y-4">
            <input class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Nombre" name="name" onChange={this.handleChange} required />
            <input class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Teléfono" name="phone" onChange={this.handleChange} required />
            <input class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Apellido" name="lastname" onChange={this.handleChange} required />
            <input class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " type="text" placeholder="Dirección" name="address" onChange={this.handleChange} required />
            {/* <select name="gender" defaultValue={"DEFAULT"} onChange={this.handleChange} class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50" required>
              <option value="DEFAULT" disabled defaultValue>Género: </option>
              <option value="Male">Hombre</option>
              <option value="Female">Mujeres</option>
            </select> */}

            <select name="position" defaultValue={"DEFAULT"} onChange={this.handleChange} class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " required>
              <option value="DEFAULT" disabled defaultValue>Posición: </option>
              <option value="QB">QB</option>
              <option value="RB">RB</option>
              <option value="LB">LB</option>
              <option value="WR">WR</option>
              <option value="S">S</option>
              <option value="CB">CB</option>
              <option value="C">C</option>
            </select>

            {/* <label class="bg-white border-2 border-black rounded py-2 px-4 m-0 p-0 ">
              <span class="text-gray-500 text-lm mr-8">Date of Birth:</span>
              <input type="Date" class="bg-white h-7 border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-sm focus:bg-red-50 mt-0 mb-0" name="birthday" onChange={this.handleChange} required />
            </label> */}

            {/* <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Estatura" name="height" onChange={this.handleChange} required />
            <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Correo electrónico" name="email" onChange={this.handleChange} required />
            <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Peso" name="weight" onChange={this.handleChange} required />
            <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="Documento de identidad" name="documentId" onChange={this.handleChange} required />
            <input type="text" class="bg-white border-2 border-black rounded py-2 px-4 placeholder-gray-500 text-black text-lg focus:bg-red-50 " placeholder="EPS" name="eps" onChange={this.handleChange} required /> */}
          </div>
        </div>
        <div class="flex justify-end">
          <div class="ml-20">

            <button type="submit" onClick={() => this.postPlayers()} class=" bg-black text-white rounded-full px-4 py-3 mt-10">
              <label class="ml-4 text-lg">Editar</label>
              <FontAwesomeIcon className="flex-1 ml-5 mr-1" icon={["fas", "user-check"]} size="1x" />
            </button>

          </div>
        </div>
      </div>
    )
  }
}
