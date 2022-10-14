import React from "react";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { mainBox, secondaryLayer } from "./loader.styles";
import { Box } from "@mui/material";

const Loader = ({
  customSize = 40,
  primaryColor = "#00cec9",
  secondaryColor = "rgba(223, 230, 233,1.0) ",
  suspense,
}) => (
  <Box sx={mainBox(suspense)}>
    <CircularProgress
      variant="determinate"
      sx={{
        color: primaryColor,
      }}
      size={customSize}
      thickness={4}
      value={100}
    />
    <CircularProgress
      disableShrink
      sx={secondaryLayer(circularProgressClasses, secondaryColor)}
      size={customSize}
      thickness={4}
    />
  </Box>
);

export default Loader;
