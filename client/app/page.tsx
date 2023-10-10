"use client";
import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import ReSearchButton from "@/Components/ReSearchButton/ReSearchButton";
import AutoComplete from "@/Components/ShortComponents/AutoComplete";
import { useThemeContext } from "@/Components/Layout/Material Theme";
import styles from "./page.module.css";
import { getAllChamps } from "@/UtilsFunctions";

export default function Home() {
  const [champData, setChampData] = useState<{}>({});
  const [options, setOptions] = useState<String[]>([]);
  const [loading, setloading] = useState(true);
  const { mode } = useThemeContext();

  useEffect(() => {
    async function fetchChamps() {
      const data = await getAllChamps();
      if (!loading ) return;

     

      setloading(!loading);
    }
    fetchChamps();

    return () => {};
  }, [loading]);

const onClick = ()=> {
  onClick 
}

  return (
    <Box className={styles.allContainer} color={"secondary"}>
      <Box className={styles.modeAndButtonSearchContainer}>
        <ReSearchButton setChampData={setChampData} />
      </Box>
      <Box className={styles.contentContainer}>
        <Box
          className={styles.content}
          color={"secondary"}
          sx={{ backgroundColor: `secondary.${mode}` }}
        >
          <Box className={styles.autocompleteBox}>
            <AutoComplete loading={loading} options={options} />
          </Box>
          <Box className={styles.buttonBox}>
            <Button onClick={()=> } size="large" color="secondary" variant="outlined">
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
