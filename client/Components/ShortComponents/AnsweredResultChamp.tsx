import React from "react";
import { Box, Typography } from "@mui/material";
import { AnsweredResultChampInterface } from "@/TypeScript/Interfaces";
import styles from "./Styles.module.css";

const AnsweredResult = ({
  correctAnswer,
  answered,
}: AnsweredResultChampInterface) => {
  return (
    <Box className={styles.resultsContainer}>
      {answered.letter === correctAnswer.letter ? (
        <Typography color={"#68914d"} component={"h3"} variant="h5">
          Correct
        </Typography>
      ) : (
        <Typography color={"#914d4d"} component={"h3"} variant="h5">
          Wrong
        </Typography>
      )}
    </Box>
  );
};

export default AnsweredResult;
