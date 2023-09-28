import { model, Schema } from "mongoose";

const Champ = new Schema({
  name: {
    type: String,
    require: true,
  },
});

export default model("Champ", Champ);
