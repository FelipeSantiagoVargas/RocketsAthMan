const supertest  = require("supertest");
const mongoose = require('mongoose');
const {app,server} = require('../src/index')
const User = require('../src/models/User')

const api = supertest(app)

const userAdmin = {
    username:"User Admin",
    email: "useradmin@gmail.com",
    password: "password",
    roles:["moderator","admin"]
}

// beforeEach(async()=>{
//     await User.
// })

test('Creando un nuevo usuario', async()=>{
    await api.get(`/api/players/`)
            .expect(200)
})

afterAll(()=>{
    server.close()
    mongoose.connection.close()
})