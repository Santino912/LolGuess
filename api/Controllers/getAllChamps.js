import axios from "axios";

export default async function getChamp(_, res) {
  try {
    return res.send(updatedChamp);
  } catch (err) {
    return res.send(err);
  }
}
