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
import { themes } from "helpers/useThemes";
import { useSelector } from "react-redux";

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
  const { theme } = useSelector((state) => state.AuthReducer);
  return (
    <>
      <FormControl
        sx={{
          marginBlock: !!!error && 3,
          width: "100%",
          background: themes[theme].inputs,
        }}
        variant="outlined"
        error={!!error}
      >
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
          placeholder={label}
          {...rest}
        />
      </FormControl>
      {error && (
        <FormHelperText sx={{ marginBottom: 2 }} error>
          {errorMessage}
        </FormHelperText>
      )}
    </>
  );
};

export default CustomInput;
