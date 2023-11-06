import axios from "axios";
import { allChampsLink, getLinkVersions } from "../Utils/links.js";
import { getAllChampsAnRandomChamp } from "../Utils/functionsShort.js";

export default async function getAllChamps(_req, res) {
  try {
    const {
      data: [lastVersion],
    } = await axios.get(getLinkVersions());
    const {
      data: { data: champsData },
    } = await axios.get(allChampsLink(lastVersion));

    const updatedData = await getAllChampsAnRandomChamp(
      champsData,
      lastVersion
    );

    return res.send(updatedData);
  } catch (err) {
    return res.send(err);
  }
}
