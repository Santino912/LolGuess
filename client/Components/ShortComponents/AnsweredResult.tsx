import React from "react";
import { Box, Typography } from "@mui/material";
import { AnsweredResultInterface } from "@/TypeScript/Interfaces";

const AnsweredResult = ({
  correctAnswer,
  answered,
  tries,
}: AnsweredResultInterface) => {
  return (
    <Box sx={{ color: "white" }}>
      {answered.letter === correctAnswer.letter ? (
        <Typography component={"h3"} variant="h4">
          !Good
        </Typography>
      ) : (
        <Typography component={"h3"} variant="h4">
          Nice Try
        </Typography>
      )}
    </Box>
  );
};

export default AnsweredResult;
