import React, { useRef } from "react";
import { Box } from "@mui/material";
import {
  mainContainer,
  slideButtons,
  sliderContainer,
  sliderStyles,
} from "./horizontalScroll.styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const HorizontalScroll = () => {
  const myRef = useRef(null);
  const handleSlide = (dir) => {
    if (dir === "right") {
      myRef.current.scrollLeft += 1000;
    } else {
      myRef.current.scrollLeft += -1000;
    }
  };

  return (
    <Box sx={mainContainer}>
      <Box onClick={() => handleSlide("left")} sx={slideButtons("left")}>
        <ArrowBackIosNewIcon />
      </Box>

      <Box sx={sliderContainer}>
        <Box ref={myRef} sx={sliderStyles}>
          <Box
            sx={{ background: "red", height: 300, width: 400, marginInline: 1 }}
          />
          <Box
            sx={{ background: "red", height: 300, width: 400, marginInline: 1 }}
          />
          <Box
            sx={{ background: "red", height: 300, width: 400, marginInline: 1 }}
          />
          <Box
            sx={{ background: "red", height: 300, width: 400, marginInline: 1 }}
          />
          <Box
            sx={{ background: "red", height: 300, width: 400, marginInline: 1 }}
          />
        </Box>
      </Box>
      <Box sx={slideButtons("right")} onClick={() => handleSlide("right")}>
        <ArrowForwardIosIcon />
      </Box>
    </Box>
  );
};

export default HorizontalScroll;
