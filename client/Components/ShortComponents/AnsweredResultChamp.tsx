import React from "react";
import { Box, Typography } from "@mui/material";
import { AnsweredResultChampInterface } from "@/TypeScript/Interfaces";
import styles from "./Styles.module.css";

const AnsweredResult = ({
  correctAnswer,
  answered,
  tries,
}: AnsweredResultChampInterface) => {
  return (
    <Box className={styles.resultsContainer}>
      {answered.letter === correctAnswer.letter ? (
        <Typography color={"#68914d"} component={"h3"} variant="h5">
          !Good
        </Typography>
      ) : (
        <Typography component={"h3"} variant="h5">
          Nice Try
        </Typography>
      )}
      <Typography component={"h3"} variant="h5">
        Number of Tries: {tries}
      </Typography>
    </Box>
  );
};

export default AnsweredResult;
