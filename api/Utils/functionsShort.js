import axios from "axios";
import { champLink } from "./links.js";

export const getOneChampFromChamps = async (champs) => {
  const objectOfChampsName = champs?.data;

  const allChampsNames = Object.keys(objectOfChampsName);
  const num = Math.round(Math.random() * (allChampsNames.length - 1) + 0);

  return allChampsNames[num];
};

export const destructureData = async (champs, nameChampsArr, lastVersion) => {
  console.log(champs, nameChampsArr);

  return nameChamp;
};

export const getAllChampsAnRandomNum = (champs) => {
  const allChampsNames = Object.keys(champs);
  const num = Math.round(Math.random() * (allChampsNames.length - 1) + 0);

  return { ...champs, answer: allChampsNames[num], namesArr: allChampsNames };
};

export const getOneChampData = async (champName, version) => {
  const {
    data: { data: champ },
  } = await axios.get(champLink(version, champName));

  return { ...champ, answer: champName };
};
