"use client";
import React from "react";
import { ObjectChampTries } from "@/TypeScript/Interfaces";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import styles from "./Styles.module.css";

interface ChampSelected {
  champ: ObjectChampTries;
}

const ChampsSelected = ({ champ }: ChampSelected) => {
  return (
    <Grid xs={3} item className={styles.champSelectedContainer}>
      <Box sx={{ backgroundColor: "#FF4340" }}>
        <Image
          alt={`${champ?.name} image`}
          src={champ?.image}
          height={50}
          width={50}
        />
      </Box>
    </Grid>
  );
};

export default ChampsSelected;
