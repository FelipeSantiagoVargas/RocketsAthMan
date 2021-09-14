import { Schema, model } from "mongoose";

const playerSchema = new Schema({
    imgUrl: {type: String},
    name: {type: String,required: true},
    lastName: {type: String,required: true},
    gender: {type: String,required: true},
    birthday: {type: String,required: true},
    documentId: {type: String,unique: true},
    phone: {type: String,required: true},
    address: {type: String,required: true},
    position: {type: String},
    height: {type: String,required: true},
    weight: {type: String,required: true},
    eps: {type: String,required: true},
    user:{
        ref: "User",
        type: Schema.Types.ObjectId,
        required: true
    }
},{
    timestamps : true,
    versionKey: false
})

export default model('Player',playerSchema);