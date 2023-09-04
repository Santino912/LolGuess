"use client";
import React, { FC, useEffect, useState } from "react";
import { useThemeContext } from "../Layout/Material Theme";
import { Button } from "@mui/material";
import styles from "./ReSearchButton.module.css";
import { fetchChampions } from "./utils";

type SetChampData = (param: object) => void;

interface InterfaceReSearchButton {
  setChampData: SetChampData;
}

const ReSearchButton: FC<InterfaceReSearchButton> = ({ setChampData }) => {
  const { darkMode, mode } = useThemeContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchChampions(setLoading);
    return () => {
      setChampData({});
    };
  }, [loading, setChampData]);

  return (
    <Button
      color={darkMode ? "secondary" : "primary"}
      className={styles.buttonContainer}
      onClick={() => setLoading(true)}
    >
      Research
    </Button>
  );
};

export default ReSearchButton;
