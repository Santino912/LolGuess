export const allChampsLink = (version) => {
  const link = `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;

  return link;
};

export const champLink = (version, champ) => {
  //Data de campeon en especifico
  const link = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${champ}.json`;

  return link;
};

export const smallSplashartLink = (champ, num) => {
  //Splashart de carga chico
  const link = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_${num}jpg`;

  return link;
};

export const champDefaultSplashartLink = (version, champ) => {
  //Imagen 40 pixeles aprox, de el campeon predeterminado
  const link = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ}.png`;

  return link;
};

export const champSkinSplashartLink = (champ, numSkin) => {
  //Splashart completo de un skin de campeon
  const link = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${numSkin}.jpg`;

  return link;
};

export const getLinkVersions = () => {
  const link = "https://ddragon.leagueoflegends.com/api/versions.json";
  return link;
};
