require('dotenv').config()
import mongoose from 'mongoose'

const {MONGO_DB_URI,MONGO_DB_URI_TEST,NODE_ENV} = process.env

const connection = NODE_ENV === 'test' ? MONGO_DB_URI_TEST: MONGO_DB_URI
console.log(connection)

mongoose.connect(connection,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db=> console.log('Db is connected'))
    .catch(error=> console.log(error))