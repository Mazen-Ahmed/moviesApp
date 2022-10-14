import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ text, type, color, styles, ...rest }) => {
  return (
    <Button
      variant={type}
      sx={{
        backgroundColor: type === "contained" && color,
        color: type === "contained" ? "#fff" : color,
        border: `1px solid ${color}`,
        "&: hover": {
          backgroundColor: type === "contained" && color,
          color: type === "contained" ? "#fff" : color,
          border: `1px solid ${color}`,
        },
        ...styles,
      }}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
