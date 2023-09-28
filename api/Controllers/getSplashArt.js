import axios from "axios";
import Champ from "../Models/Champ";
import { ChampLink, ChampSplashart } from "../Utils/links";
import { destructureData, mathRandom } from "../Utils/FunctionsShort";

export default async function getChamp(_, res) {
  try {
    const champs = await Champ.find();

    const numRandom = mathRandom(champs.length);

    const {
      data: { champData },
    } = await axios.get(ChampLink(champs, numRandom));

    const updatedChamp = destructureData(champData);

    return res.send(data);
  } catch (err) {
    return res.send(err);
  }
}
