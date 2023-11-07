import React from "react";
import { Box, Typography } from "@mui/material";
import { AnsweredResultNicknameInterface } from "@/TypeScript/Interfaces";

const AnsweredResultNickname = ({ tries }: AnsweredResultNicknameInterface) => {
  return (
    <Box pt={2} color={"white"}>
      <Typography component={"h6"} variant="h6">
        Tries: {tries}
      </Typography>
    </Box>
  );
};

export default AnsweredResultNickname;
