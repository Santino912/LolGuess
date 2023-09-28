"use client";
import React, { FC, useEffect, useState } from "react";
import { useThemeContext } from "../Layout/Material Theme";
import { Button } from "@mui/material";
import styles from "./ReSearchButton.module.css";
import { fetchChampions } from "./utils";
import axios from "axios";

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

  const handleClick = async () => {
    const { data } = await axios.get("http://localhost:3001/champ");
    setChampData(data);
  };

  return (
    <Button
      color={darkMode ? "primary" : "secondary"}
      className={styles.buttonContainer}
      onClick={() => handleClick()}
    >
      Research
    </Button>
  );
};

export default ReSearchButton;
