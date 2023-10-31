"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
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
  styleAnsweredLetter,
} from "@/UtilsFunctions";
import styles from "./page.module.css";
import AnsweredResult from "@/Components/ShortComponents/AnsweredResult";

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
      setChampsTries([]);
      setAllChamps([]);
      setAnswer({
        isPassive: false,
        champName: "",
        letter: "",
        name: "",
        id: "",
      });
      setAnswered({ isAnswered: false, letter: "", tries: 0 });
    };
  }, []);

  const handleLetterAnswer = (value: string) => {
    console.log(value, answer.letter, value === answer?.letter);
    if (value === answer?.letter) {
      return setAnswered({
        tries: champsTries.length,
        isAnswered: true,
        letter: value,
      });
    }
    return setAnswered({
      tries: champsTries.length,
      isAnswered: true,
      letter: value,
    });
  };

  async function fetchChamps() {
    if (!loadingState) return;
    try {
      const data = await getAllChamps(setLoadingState);
      setAllChamps(data?.champsNames || allChamps);
      setAnswer(data?.answerSkill);
    } catch (err) {
      location.reload();
    }
  }

  return (
    <Box className={styles.allContainer} color={"primary"}>
      <Box className={styles.modeAndButtonSearchContainer}>
        <ReSearchButton setChampData={setChampsData} />
      </Box>
      <Box className={styles.contentContainer}>
        <Box className={styles.content}>
          <Box sx={{ transform: rotation }}>
            {!loadingState &&
              !champsTries.some(
                (champ) => answer?.champName === champ?.name
              ) && (
                <Box pt={"20px"}>
                  <Image
                    src={
                      answer?.isPassive
                        ? getLinkPassiveSkill(answer?.id)
                        : getLinkActiveSkill(answer?.id)
                    }
                    className={styles.imageAnswer}
                    alt="Answer image"
                    width={70}
                    height={70}
                    priority
                  />
                </Box>
              )}
          </Box>
          <Box className={styles.autocompleteBox}>
            <AutoComplete
              loading={loadingState}
              options={allChamps}
              champsTries={champsTries}
              setAllChamps={setAllChamps}
              champSelected={champSelected}
              setChampsTries={setChampsTries}
              setChampSelected={setChampSelected}
            />
          </Box>
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
          <Box className={styles.letterSkill}>
            <Button
              color={"secondary"}
              className={styles.letter}
              onClick={() => handleLetterAnswer("P")}
              disabled={answered.isAnswered}
              sx={styleAnsweredLetter("P", answered, answer?.letter)}
            >
              P
            </Button>
            <Button
              color={"secondary"}
              className={styles.letter}
              onClick={() => handleLetterAnswer("Q")}
              disabled={answered.isAnswered}
              sx={styleAnsweredLetter("Q", answered, answer?.letter)}
            >
              Q
            </Button>
            <Button
              color={"secondary"}
              className={styles.letter}
              onClick={() => handleLetterAnswer("W")}
              disabled={answered.isAnswered}
              sx={styleAnsweredLetter("W", answered, answer?.letter)}
            >
              W
            </Button>
            <Button
              color={"secondary"}
              className={styles.letter}
              onClick={() => handleLetterAnswer("E")}
              disabled={answered.isAnswered}
              sx={styleAnsweredLetter("E", answered, answer?.letter)}
            >
              E
            </Button>
            <Button
              color={"secondary"}
              className={styles.letter}
              onClick={() => handleLetterAnswer("R")}
              disabled={answered.isAnswered}
              sx={styleAnsweredLetter("R", answered, answer?.letter)}
            >
              R
            </Button>
          </Box>
        )}
        {answered?.isAnswered && (
          <AnsweredResult
            answered={answered}
            tries={champsTries?.length}
            correctAnswer={answer}
          />
        )}
        <Box className={styles.champsTriesContainer}>
          {!!champsTries?.length &&
            !champsTries.some((champ) => answer?.champName === champ?.name) &&
            champsTries?.map((champ, i) => (
              <ChampsSelected champ={champ} key={i} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
