require('dotenv').config()
import app from './app'
import './database'


console.log(process.env.PORT)
const port = process.env.PORT || 4000

const server = app.listen(port,()=>{
    console.log('Sever on port',port)
})


module.exports = {app, server};