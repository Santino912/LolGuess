"use client";
import React, { FC, useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { fetchChampions } from "./utils";
import styles from "./ReSearchButton.module.css";
import { useThemeContext } from "../Layout/Material Theme";

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
