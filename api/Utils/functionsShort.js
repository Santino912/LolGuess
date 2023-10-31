import axios from "axios";
import { champLink } from "./links.js";

export const getOneChampFromChamps = async (champs) => {
  const objectOfChampsName = champs?.data;

  const allChampsNames = Object.keys(objectOfChampsName);
  const num = Math.round(Math.random() * (allChampsNames.length - 1));

  return allChampsNames[num];
};

export const destructureData = async (champs, nameChampsArr, lastVersion) => {
  return nameChamp;
};

export const getAllChampsAnRandomNum = async (champs, lastVersion) => {
  const allChampsNames = Object.keys(champs);
  const num = Math.round(Math.random() * (allChampsNames.length - 1));
  let answer = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion/${
      champs[allChampsNames[num]].id
    }.json`
  );
  let answerChampObj = Object.values(answer.data.data)[0];
  let passive = {
    champName: champs[allChampsNames[num]].name,
    id: answerChampObj.passive.image.full,
    name: answerChampObj.passive.name,
    isPassive: true,
  };
  let answerSkillNum = Math.round(Math.random() * 5);
  let letter = ["Q", "W", "E", "R"][answerSkillNum];
  let answerSkill;

  if (answerSkillNum > 4) {
    answerSkill = passive;
    answerSkill.letter = "P";
  } else {
    answerSkill = answerChampObj.spells[answerSkillNum];
    answerSkill.champName = champs[allChampsNames[num]].name;
    answerSkill.isPassive = false;
  }
  answerSkill.letter = letter;

  return {
    champsNames: objToArray(champs),
    answer: answerChampObj,
    version: lastVersion,
    allChamps: champs,
    answerSkill,
  };
};

export const getOneChampData = async (champName, version) => {
  const {
    data: { data: champ },
  } = await axios.get(champLink(version, champName));

  return { ...champ, answer: champName };
};

export const objToArray = (object) => {
  let newArray = [];
  for (const key in object) {
    newArray.push({ label: key, ...object[key] });
  }
  return newArray;
};
