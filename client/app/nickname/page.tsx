"use client";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ChampsSelected from "@/Components/ShortComponents/ChampSelected";
import AutoComplete from "@/Components/ShortComponents/AutoComplete";
import {
  ObjectChamp,
  ObjectStateChamp,
  ChampsSelectedType,
} from "@/TypeScript/Interfaces";
import { getAllChampsToNickname } from "@/UtilsFunctions";
import styles from "./page.module.css";
import AnsweredResultNickname from "@/Components/ShortComponents/AnsweredResultNickname";

export default function Home() {
  const [error, setError] = useState(false);
  const [loadingState, setLoadingState] = useState(true);
  const [allChamps, setAllChamps] = useState<ObjectChamp[]>([]);
  const [champsTries, setChampsTries] = useState<ChampsSelectedType[]>([]);
  const [answer, setAnswer] = useState({
    defaultImage: "",
    title: "",
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
        defaultImage: "",
        title: "",
        name: "",
        id: "",
      });
    };
  }, []);

  async function fetchChamps() {
    if (!loadingState) return;
    try {
      const data = await getAllChampsToNickname(setLoadingState);
      setAllChamps(data?.champsNames || allChamps);
      setAnswer(data?.answer);
    } catch (err) {
      console.log(err);
      //location.reload();
    }
  }
  return (
    <Box className={styles.allContainer} color={"primary"}>
      <Box className={styles.contentContainer}>
        <Box className={styles.content}>
          <Box className={styles.titleContainer}>
            <Typography
              className={styles.nicknameContainer}
              variant="h5"
              component="h5"
            >
              {answer?.title ? (
                answer?.title
              ) : (
                <Box
                  display={"flex"}
                  alignItems="center"
                  textAlign="center"
                  height={100}
                  color="#af9767"
                >
                  <CircularProgress color="inherit" />
                </Box>
              )}
            </Typography>
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
          {answer?.name === champSelected?.name && !!answer?.name && (
            <Image
              src={answer?.defaultImage}
              alt={"Default image"}
              width={300}
              height={200}
            />
          )}
        </Box>
      </Box>

      <Box className={styles.bottomContainer}>
        {!!champsTries.length &&
          champsTries.some((champ) => answer?.name === champ?.name) && (
            <AnsweredResultNickname tries={champsTries?.length} />
          )}
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
