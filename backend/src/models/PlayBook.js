import { Schema, model } from "mongoose";

const playBookSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
        imgUrl: {
            type: String,
            unique: true,
        },
        description: {
            type: String,
        },
        plays: [
            {
                ref: "Play",
                type: Schema.Types.ObjectId,
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model('PlayBook', playBookSchema);
