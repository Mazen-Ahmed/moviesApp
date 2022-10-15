import React from "react";
import { Typography, Box } from "@mui/material";
import HorizontalScroll from "components/shared/horizontalScroll/horizontalScroll";
import { themes } from "helpers/useThemes";
import { useSelector } from "react-redux";
import useGetPopular from "./_hooks/useGetPopular";

const Popular = () => {
  const { moviesList, loading } = useGetPopular();
  const { theme } = useSelector((state) => state.AuthReducer);

  return (
    <Box sx={{ marginBlock: 10 }}>
      <Typography sx={{ color: themes[theme].textColor }} variant="h4">
        Popular Movies
      </Typography>
      <HorizontalScroll data={moviesList} loading={loading} type={"popular"} />
    </Box>
  );
};

export default Popular;
