import React, { SyntheticEvent, useState } from "react";
import { Box, Chip } from "@mui/material";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { AutocompleteType, ObjectChamp } from "@/TypeScript/Interfaces";
import style from "./Styles.module.css";

export default function AutoComplete({
  loading,
  options,
  champsTries,
  setChampsTries,
  setChampSelected,
}: AutocompleteType) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const testChange = (champ: ObjectChamp | null) => {
    if (champ == null) return true;
    const arrValues = Object.values(champ);

    if (arrValues.some((value) => value === undefined)) return true;

    return false;
  };

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: ObjectChamp | null,
    reason: string
  ) => {
    if (testChange(newValue)) return;
    const selectedChamp = {
      image: `https://ddragon.leagueoflegends.com/cdn/${newValue?.version}/img/champion/${newValue?.id}.png`,
      partype: newValue?.partype || "",
      title: newValue?.title || "",
      name: newValue?.name || "",
      tags: newValue?.tags || [],
    };
    const arrChamps = Object.values(selectedChamp);
    if (arrChamps?.some((value) => value == undefined)) {
      return setChampsTries([]);
    }
    setChampsTries([selectedChamp, ...champsTries]);
    return setChampSelected(selectedChamp);
  };

  return (
    <Autocomplete
      className={style.autocomplete}
      options={options}
      loading={loading}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      sx={{
        input: { color: "white" },
        width: "90%",
      }}
      color="secondary"
      onChange={(event, newValue, reason) =>
        handleChange(event, newValue, reason)
      }
      getOptionLabel={(option) => option?.name}
      getOptionDisabled={(option) =>
        champsTries?.some((champ) => champ.name === option.name)
      }
      renderOption={(props, option) => (
        <li value={option.name} {...props} key={option.id}>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${option?.version}/img/champion/${option?.id}.png`}
              alt={`${option?.name}`}
              key={option.name}
              loading="lazy"
              height={50}
              width={50}
            />
            {option.name}
          </Box>
        </li>
      )}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip {...getTagProps({ index })} key={option.name} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            label: { color: "white" },
          }}
          color="secondary"
          label="Guess the Champ"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="secondary" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
