"use client";
import React from "react";
import { Box } from "@mui/material";
import styles from "./page.module.css";

const page = () => {
  return (
    <Box color={"primary"}>
      <Box className={styles.container}></Box>
    </Box>
  );
};

export default page;
