"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ChampsSelected from "@/Components/ShortComponents/ChampSelected";
import ReSearchButton from "@/Components/ReSearchButton/ReSearchButton";
import AutoComplete from "@/Components/ShortComponents/AutoComplete";
import {
  ObjectChamp,
  ObjectStateChamp,
  ChampsSelectedType,
} from "@/TypeScript/Interfaces";
import { getAllChampsToSplashart } from "@/UtilsFunctions";
import AnsweredResultNickname from "@/Components/ShortComponents/AnsweredResultNickname";
import styles from "./page.module.css";

const urlLargeImage = (id: string, skinNum: number) => {
  return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skinNum}.jpg`;
};
const urlLoadingImage = (id: string, skinNum: number) => {
  return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${skinNum}.jpg`;
};

export default function Home() {
  const [error, setError] = useState(false);
  const [loadingState, setLoadingState] = useState(true);
  const [allChamps, setAllChamps] = useState<ObjectChamp[]>([]);
  const [champsTries, setChampsTries] = useState<ChampsSelectedType[]>([]);
  const [answer, setAnswer] = useState({
    nameOfSkin: "",
    skinNum: 0,
    name: "",
    id: "",
  });
  const [champSelected, setChampSelected] = useState<ObjectStateChamp>({
    partype: "",
    title: "",
    image: "",
    name: "",
    tags: [],
  });

  useEffect(() => {
    if (!answer?.name && loadingState && allChamps.length < 1) {
      fetchChamps();
      setLoadingState(false);
      return;
    }
    if (!loadingState && !answer?.name) {
      fetchChamps();
      setError(true);
      return;
    }
    return () => {
      setChampsTries([]);
      setAllChamps([]);
      setAnswer({
        nameOfSkin: "",
        skinNum: 0,
        name: "",
        id: "",
      });
    };
  }, []);

  async function fetchChamps() {
    if (!loadingState) return;
    try {
      const data = await getAllChampsToSplashart(setLoadingState);
      setAllChamps(data?.champsNames || allChamps);
      setAnswer(data?.answer);
    } catch (err) {
      console.log(err);
    }
  }

  const positionBottom = (tries: number) => {
    const resultMult = tries * 20;

    if (200 - resultMult < 0 || answer?.name === champSelected?.name) {
      return 0;
    }
    return 200 - resultMult;
  };
  const sizeImage = (tries: number) => {
    const resultMult = 3 - tries * 0.2;
    if (resultMult < 1 || answer?.name === champSelected?.name) {
      return `scale(1)`;
    }

    return `scale(${resultMult})`;
  };

  return (
    <Box className={styles.allContainer} color={"primary"}>
      <Box className={styles.contentContainer}>
        <Box className={styles.content}>
          {answer?.name === champSelected?.name && (
            <Typography
              color={"white"}
              textAlign={"center"}
              component="h3"
              variant="h3"
            >
              {answer?.nameOfSkin}
            </Typography>
          )}
          <Box className={styles.toGuessContainer}>
            {answer?.id && answer?.name && (
              <Box className={styles.splashartImage}>
                <Image
                  width={400}
                  height={200}
                  priority={true}
                  style={{
                    bottom: positionBottom(champsTries?.length),
                    transform: sizeImage(champsTries?.length),
                  }}
                  alt="Skin of the champ"
                  className={styles.imageToAnswer}
                  src={urlLargeImage(answer.id, answer?.skinNum)}
                />
              </Box>
            )}
          </Box>
          {answer?.name !== champSelected?.name && (
            <Box className={styles.autocompleteBox}>
              <AutoComplete
                options={allChamps}
                loading={loadingState}
                champsTries={champsTries}
                setChampsTries={setChampsTries}
                setChampSelected={setChampSelected}
              />
            </Box>
          )}
          {!!champsTries.length &&
            champsTries.some((champ) => answer?.name === champ?.name) && (
              <AnsweredResultNickname tries={champsTries?.length} />
            )}
        </Box>
      </Box>

      <Box className={styles.bottomContainer}>
        <Grid container className={styles.champsTriesContainer}>
          {!!champsTries?.length &&
            !champsTries.some((champ) => answer?.name === champ?.name) &&
            champsTries?.map((champ, i) => (
              <ChampsSelected champ={champ} key={i} />
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
