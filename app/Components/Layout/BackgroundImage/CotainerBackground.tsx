"use client";
import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { useThemeContext } from "../Material Theme";
import styles from "./ContainerBackground.module.css";

const BackgroundImage = ({ children }: PropsWithChildren) => {
  const { mode } = useThemeContext();
  return (
    <Box
      className={styles.container}
      sx={{ backgroundColor: mode === "light" ? "#858476a0" : "#14171a" }}
    >
      {children}
    </Box>
  );
};

export default BackgroundImage;
