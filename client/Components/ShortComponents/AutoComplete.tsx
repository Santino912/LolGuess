import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import style from "./Styles.module.css";
import { AutocompleteType } from "@/TypeScript/Interfaces";

export default function AutoComplete({ loading, options }: AutocompleteType) {
  const [open, setOpen] = useState(false);

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
      renderInput={(params) => (
        <TextField
          {...params}
          color="primary"
          InputProps={{
            ...params.InputProps,
            color: "secondary",
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
