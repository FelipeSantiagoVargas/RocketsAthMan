import { Schema, model } from "mongoose";

export const unitMeasures = ['seconds','meters','reps','other']

const unitMeasureSchema = new Schema(
  {
    name: {type: String,required: true, unique:true},
  },
  {
    versionKey: false,
  }
);

export default model('UnitMeasure', unitMeasureSchema);