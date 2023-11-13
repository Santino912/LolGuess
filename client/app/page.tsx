"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ChampsSelected from "@/Components/ShortComponents/ChampSelected";
import ReSearchButton from "@/Components/ReSearchButton/ReSearchButton";
import AutoComplete from "@/Components/ShortComponents/AutoComplete";
import {
  ObjectChamp,
  ObjectStateChamp,
  ChampsSelectedType,
} from "@/TypeScript/Interfaces";
import {
  allIsUndefined,
  getAllChamps,
  getLinkActiveSkill,
  getLinkPassiveSkill,
  randomRotation,
} from "@/UtilsFunctions";
import AnsweredResult from "@/Components/ShortComponents/AnsweredResultChamp";
import styles from "./page.module.css";
import ButtonsSkills from "@/Components/ShortComponents/ButtonsSkills";

export default function Home() {
  const [error, setError] = useState(false);
  const [champsData, setChampsData] = useState({});
  const [loadingState, setLoadingState] = useState(true);
  const [rotation, setRotation] = useState(randomRotation());
  const [allChamps, setAllChamps] = useState<ObjectChamp[]>([]);
  const [champsTries, setChampsTries] = useState<ChampsSelectedType[]>([]);
  const [answered, setAnswered] = useState({
    isAnswered: false,
    letter: "",
    tries: 0,
  });
  const [answer, setAnswer] = useState({
    isPassive: false,
    champName: "",
    letter: "",
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
    if (!answer?.champName && loadingState && allChamps.length < 1) {
      fetchChamps();
      setLoadingState(false);
      return;
    }
    if (!loadingState && allIsUndefined(answer)) {
      fetchChamps();
      setError(true);
      return;
    }
    return () => {
      setAnswered({ isAnswered: false, letter: "", tries: 0 });
      setChampsTries([]);
      setAllChamps([]);
      setAnswer({
        isPassive: false,
        champName: "",
        letter: "",
        name: "",
        id: "",
      });
    };
  }, []);

  const handleLetterAnswer = (value: string) => {
    if (value === answer?.letter) {
      setAnswered({
        tries: champsTries.length,
        isAnswered: true,
        letter: value,
      });
      return;
    }
    setAnswered({
      tries: champsTries.length,
      isAnswered: true,
      letter: value,
    });
    return;
  };

  async function fetchChamps() {
    if (!loadingState) return;
    try {
      const data = await getAllChamps(setLoadingState);
      setAllChamps(data?.champsNames || allChamps);
      setAnswer(data?.answerSkill);
    } catch (err) {
      console.log(err);
      //location.reload();
    }
  }

  return (
    <Box className={styles.allContainer} color={"primary"}>
      <Box className={styles.modeAndButtonSearchContainer}>
        {/* //<ReSearchButton setChampData={setChampsData} /> */}
      </Box>
      <Box className={styles.contentContainer}>
        <Box className={styles.content}>
          <Box>
            {answer?.id &&
              !loadingState &&
              !champsTries.some(
                (champ) => answer?.champName === champ?.name
              ) && (
                <Box p={"10px"}>
                  <Image
                    src={
                      answer?.isPassive
                        ? getLinkPassiveSkill(answer?.id)
                        : getLinkActiveSkill(answer?.id)
                    }
                    className={styles.imageAnswer}
                    user-select={"none"}
                    alt="Answer image"
                    width={70}
                    height={70}
                    priority
                  />
                </Box>
              )}
            {!answer?.id && (
              <Box
                display={"flex"}
                alignItems={"center"}
                height={100}
                color="#af9767"
              >
                <CircularProgress color="inherit" />
              </Box>
            )}
          </Box>
          {answer?.champName !== champSelected?.name && (
            <Box className={styles.autocompleteBox}>
              <AutoComplete
                loading={loadingState}
                options={allChamps}
                champsTries={champsTries}
                setChampsTries={setChampsTries}
                setChampSelected={setChampSelected}
              />
            </Box>
          )}
          {champsTries.some((champ) => answer?.champName === champ?.name) && (
            <Box className={styles.letterSkill}>
              <ButtonsSkills
                handleLetterAnswer={handleLetterAnswer}
                answered={answered}
                answer={answer}
              />
            </Box>
          )}
          {answered?.isAnswered && (
            <AnsweredResult
              answered={answered}
              tries={champsTries?.length}
              correctAnswer={answer}
            />
          )}
        </Box>
      </Box>
      {champsTries.some((champ) => answer?.champName === champ?.name) && (
        <Box className={styles.skillImage}>
          <Image
            src={
              answer?.isPassive
                ? getLinkPassiveSkill(answer?.id)
                : getLinkActiveSkill(answer?.id)
            }
            className={styles.imageAnswered}
            alt="Answer image"
            width={70}
            height={70}
          />
        </Box>
      )}
      <Box className={styles.bottomContainer}>
        {champsTries.some((champ) => answer?.champName === champ?.name) && (
          <Typography color={"white"} component={"h5"} variant="h5">
            {champsTries?.length <= 1
              ? "1 Try"
              : `Tries: ${champsTries?.length}`}
          </Typography>
        )}
        <Grid container className={styles.champsTriesContainer}>
          {!champsTries.some((champ) => answer?.champName === champ?.name) &&
            !!champsTries?.length &&
            champsTries?.map((champ, i) => (
              <ChampsSelected champ={champ} key={i} />
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
