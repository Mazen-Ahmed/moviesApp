import React from "react";
import { Typography, Box } from "@mui/material";
import HorizontalScroll from "components/shared/horizontalScroll/horizontalScroll";
import useGetTopRated from "./_hooks/useGetTopRated";

const TopRated = () => {
  const { moviesList, loading } = useGetTopRated();
  return (
    <Box sx={{ marginBlock: 10 }}>
      <Typography sx={{ paddingInline: 2 }} variant="h4">
        Top Rated Movies
      </Typography>
      <HorizontalScroll
        data={moviesList}
        loading={loading}
        type={"top_rated"}
      />
    </Box>
  );
};

export default TopRated;
