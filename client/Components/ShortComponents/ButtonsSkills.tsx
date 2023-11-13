import React from "react";
import { styleAnsweredLetter } from "@/UtilsFunctions";
import { Button } from "@mui/material";
import styles from "./Styles.module.css";

interface ButtonInterface {
  handleLetterAnswer: (a: string) => void;
  answered: { isAnswered: boolean; letter: string; tries: number };
  answer: {
    isPassive: boolean;
    champName: string;
    letter: string;
    name: string;
    id: string;
  };
}

const ButtonsSkills = ({
  handleLetterAnswer,
  answered,
  answer,
}: ButtonInterface) => {
  return (
    <>
      <Button
        color={"secondary"}
        variant="contained"
        className={styles.letter}
        disabled={answered.isAnswered}
        onClick={() => handleLetterAnswer("P")}
        sx={styleAnsweredLetter("P", answered, answer?.letter)}
      >
        P
      </Button>
      <Button
        color={"secondary"}
        variant="contained"
        className={styles.letter}
        disabled={answered.isAnswered}
        onClick={() => handleLetterAnswer("Q")}
        sx={styleAnsweredLetter("Q", answered, answer?.letter)}
      >
        Q
      </Button>
      <Button
        color={"secondary"}
        variant="contained"
        className={styles.letter}
        disabled={answered.isAnswered}
        onClick={() => handleLetterAnswer("W")}
        sx={styleAnsweredLetter("W", answered, answer?.letter)}
      >
        W
      </Button>
      <Button
        color={"secondary"}
        variant="contained"
        className={styles.letter}
        disabled={answered.isAnswered}
        onClick={() => handleLetterAnswer("E")}
        sx={styleAnsweredLetter("E", answered, answer?.letter)}
      >
        E
      </Button>
      <Button
        color={"secondary"}
        variant="contained"
        className={styles.letter}
        disabled={answered.isAnswered}
        onClick={() => handleLetterAnswer("R")}
        sx={styleAnsweredLetter("R", answered, answer?.letter)}
      >
        R
      </Button>
    </>
  );
};

export default ButtonsSkills;
