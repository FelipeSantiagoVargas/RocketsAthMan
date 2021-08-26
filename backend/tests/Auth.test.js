const supertest  = require("supertest");
const mongoose = require('mongoose');
const {app,server} = require('../src/index')
const User = require('../src/models/User')

const api = supertest(app)


beforeAll(async()=>{
    await User.default.deleteMany({})
})

test('Create a new user', async()=>{
    let userAdmin = {
        username:"User Admin",
        email: "useradmin@gmail.com",
        password: "password",
        roles:["moderator","admin"]
    }
    
    await api.post(`/api/auth/signup`)
            .send(userAdmin)
            .expect('Content-Type', /json/)
            .expect(function(res) {
                res.body.token != null;
              })
            .expect(200)
})

test('Create user with username existing', async()=>{
    let userAdmin = {
        username:"User Admin",
        email: "useradmin2@gmail.com",
        password: "password2",
        roles:["moderator","admin"]
    }

    await api.post(`/api/auth/signup`)
            .send(userAdmin)
            .expect('Content-Type', /json/)
            .expect(400,{
                message : 'The user already exists'
            })
})

test('Create user with email existing', async()=>{
    let userAdmin = {
        username:"User Admin2",
        email: "useradmin@gmail.com",
        password: "password2",
        roles:["moderator","admin"]
    }

    await api.post(`/api/auth/signup`)
            .send(userAdmin)
            .expect('Content-Type', /json/)
            .expect(400,{
                message : 'The email already exists'
            })
})

test('Login with a correct admin user', async()=>{
    let userAdmin = {
        email: "useradmin@gmail.com",
        password: "password",
    }
    await api.post(`/api/auth/signin`)
            .send(userAdmin)
            .expect('Content-Type', /json/)
            .expect(200)
})


test('Login with a incorrect password admin user', async()=>{
    let userAdmin = {
        email: "useradmin@gmail.com",
        password: "passsword",
    }
    await api.post(`/api/auth/signin`)
            .send(userAdmin)
            .expect('Content-Type', /json/)
            .expect(401,{
                token :null,
                message :'Invalid Password'
            })
})

test('Login with a incorrect email admin user', async()=>{
    let userAdmin = {
        email: "useradin@gmail.com",
        password: "password",
    }
    await api.post(`/api/auth/signin`)
            .send(userAdmin)
            .expect('Content-Type', /json/)
            .expect({
                message :'User not found'
            })
})

afterAll(()=>{
    server.close()
    mongoose.connection.close()
})