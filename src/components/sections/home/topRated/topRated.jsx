import React from "react";
import { Typography, Box } from "@mui/material";
import HorizontalScroll from "components/shared/horizontalScroll/horizontalScroll";
import useGetTopRated from "./_hooks/useGetTopRated";
import { useSelector } from "react-redux";
import { themes } from "helpers/useThemes";

const TopRated = () => {
  const { moviesList, loading } = useGetTopRated();
  const { theme } = useSelector((state) => state.AuthReducer);
  return (
    <Box sx={{ marginBlock: 10 }}>
      <Typography variant="h4" sx={{ color: themes[theme].textColor }}>
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
