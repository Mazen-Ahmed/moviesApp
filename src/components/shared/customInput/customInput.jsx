import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { input } from "./customInput.styles";

const CustomInput = ({
  label,
  error,
  type,
  value,
  Icon,
  onIconeKeyDown,
  onIconeKeyUp,
  errorMessage,
  ...rest
}) => {
  return (
    <FormControl
      sx={{ mb: 2, width: "100%" }}
      variant="outlined"
      error={!!error}
    >
      <InputLabel style={{ color: "#00cec9 !important" }} htmlFor={label}>
        {label}
      </InputLabel>
      <OutlinedInput
        sx={input(!!error)}
        id={label}
        autoComplete="new-password"
        type={type}
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onMouseDown={onIconeKeyDown}
              onMouseUp={onIconeKeyUp}
              aria-label="toggle password visibility"
              edge="end"
            >
              {Icon}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        {...rest}
      />
      {error && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default CustomInput;
