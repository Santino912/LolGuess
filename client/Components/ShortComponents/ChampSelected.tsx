"use client";
import React from "react";
import { ObjectChamp, ObjectChampTries } from "@/TypeScript/Interfaces";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Styles.module.css";

interface ChampSelected {
  champ: ObjectChampTries;
}

const ChampsSelected = ({ champ }: ChampSelected) => {
  return (
    <Box className={styles.champSelectedContainer}>
      <Box sx={{ backgroundColor: "#FF4340" }}>
        <Image
          alt={`${champ?.name} image`}
          src={champ?.image}
          height={50}
          width={50}
        />
      </Box>
    </Box>
  );
};

export default ChampsSelected;
