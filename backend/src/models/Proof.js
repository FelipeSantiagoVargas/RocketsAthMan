import { Schema, model } from "mongoose";

const proofSchema = new Schema(
  {
    name: {type: String,required: true},
    unitMeasure: 
        {
          ref: "UnitMeasure",
          type: Schema.Types.ObjectId,
          required: true
        },
    proofType: 
        {
          ref: "ProofType",
          type: Schema.Types.ObjectId,
          required: true
        },
    description: {type: String},
    rateMale: {type: Number,required: true},
    rateFemale: {type: Number,required: true},
    listPlayers:[{
        playerId:
        {
          ref: "Player",
          type: Schema.Types.ObjectId,
        },
        result:{type:Number,required:true},
        _id:false}],
  },
  {
    timestamps : true,
    versionKey: false,
  }
);

export default model('Proof', proofSchema);