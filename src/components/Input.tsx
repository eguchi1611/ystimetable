import React, { Dispatch, SetStateAction } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface Props<S> {
  state: [S, Dispatch<SetStateAction<S>>];
  options: Subject[];
  label: string;
}

function Input<S>({ state: [value, dispatch], options, label }: Props<S>) {
  const onChange = (event: SelectChangeEvent<S | "">) => {
    dispatch(event.target.value as S);
  };

  return (
    <FormControl fullWidth sx={{ my: 1 }}>
      <InputLabel id={`inputlabel_${label}`}>{label}</InputLabel>
      <Select
        labelId={`inputlabel_${label}`}
        label={label}
        value={value || ""}
        onChange={onChange}
      >
        {options.map(({ label, value }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Input;
