export const getOneChampFromChamps = async (champs) => {
  const objectOfChampsName = champs?.data;

  const allChampsNames = Object.keys(objectOfChampsName);
  const num = Math.round(Math.random() * (allChampsNames.length - 1) + 0);

  return allChampsNames[num];
};

export const destructureData = (champ) => {
  let nameChamp = Object.values(champ.data)[0];

  return nameChamp;
};
