import mongoose from 'mongoose'

mongoose.set('useFindAndModify',false);
mongoose.connect("mongodb+srv://rockets:rockets123@maincluster.ruvpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db=> console.log('Db is connected'))
    .catch(error=> console.log(error))