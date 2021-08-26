import { Schema, model } from "mongoose";

const playerSchema = new Schema({
    imgUrl:String,
    name:String,
    lastName: String,
    gender: String,
    birthday: String,
    documentId: {type: String,unique: true},
    phone: String,
    address: String,
    position: String,
    height: String,
    weight: String,
    eps: String,
    user:{
        ref: "User",
        type: Schema.Types.ObjectId,
    }
},{
    timestamps : true,
    versionKey: false
})

export default model('Player',playerSchema);