import axios from "axios";
import { champLink } from "./links.js";

export const getOneChampFromChamps = async (champs) => {
  const objectOfChampsName = champs?.data;

  const allChampsNames = Object.keys(objectOfChampsName);
  const num = Math.round(Math.random() * (allChampsNames.length - 1));

  return allChampsNames[num];
};

export const getAllChampsAnRandomChamp = async (champs, lastVersion) => {
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
    answerSkill.letter = letter;
  }

  return {
    champsNames: objToArray(champs),
    answer: answerChampObj,
    version: lastVersion,
    allChamps: champs,
    answerSkill,
  };
};

export const getAllChampsAnNickname = async (champs, lastVersion) => {
  const allChampsNames = Object.keys(champs);
  const num = Math.round(Math.random() * (allChampsNames.length - 1));
  let answer = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion/${
      champs[allChampsNames[num]].id
    }.json`
  );
  let answerChampObj = Object.values(answer.data.data)[0];
  let titleSplited = answerChampObj.title.split("");
  titleSplited.unshift(titleSplited.shift().toUpperCase());
  answerChampObj.title = titleSplited.join("");
  answerChampObj.defaultImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${answerChampObj.id}_${answerChampObj.skins[0].num}.jpg`;

  return {
    champsNames: objToArray(champs),
    answer: answerChampObj,
    version: lastVersion,
    allChamps: champs,
  };
};

export const getAllChampsAnRandomSplashart = async (champs, lastVersion) => {
  const allChampsNames = Object.keys(champs);
  const num = Math.round(Math.random() * (allChampsNames.length - 1));
  let answer = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion/${
      champs[allChampsNames[num]].id
    }.json`
  );
  let answerChampObj = Object.values(answer.data.data)[0];
  const numSkin = Math.round(Math.random() * (answerChampObj.skins.length - 1));
  answerChampObj.skinNum = answerChampObj.skins[numSkin].num;
  answerChampObj.nameOfSkin = answerChampObj.skins[numSkin].name;
  return {
    champsNames: objToArray(champs),
    version: lastVersion,
    allChamps: champs,
    answer: answerChampObj,
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
