import axios from "axios";
import {
  getOneChampFromChamps,
  destructureData,
} from "../Utils/FunctionsShort.js";
import { allChampsLink, champLink, getLinkVersions } from "../Utils/links.js";

export default async function getChamp(_, res) {
  try {
    const {
      data: [lastVersion],
    } = await axios.get(getLinkVersions());

    const { data: champsData } = await axios.get(allChampsLink(lastVersion));

    const champName = await getOneChampFromChamps(champsData);

    const { data: champData } = await axios.get(
      champLink(lastVersion, champName)
    );

    const updatedChamp = await destructureData(champData);

    return res.send(updatedChamp);
  } catch (err) {
    return res.send(err);
  }
}
