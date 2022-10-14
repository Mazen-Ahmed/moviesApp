import React from "react";
import { Typography, Box } from "@mui/material";
import HorizontalScroll from "components/shared/horizontalScroll/horizontalScroll";
import useGetPopular from "./_hooks/useGetPopular";

const Popular = () => {
  const { moviesList, loading } = useGetPopular();
  return (
    <Box sx={{ marginBlock: 10 }}>
      <Typography sx={{ paddingInline: 2 }} variant="h4">
        Popular Movies
      </Typography>
      <HorizontalScroll data={moviesList} loading={loading} type={"popular"} />
    </Box>
  );
};

export default Popular;
