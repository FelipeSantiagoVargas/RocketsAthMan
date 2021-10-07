import { Schema, model } from "mongoose";

const playSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required:true,
    },
    imgUrl: {
      type: String,
      unique: true,
      required:true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model('Play', playSchema);