import React, { useRef, useCallback, useState } from "react";
import { Box } from "@mui/material";
import {
  mainContainer,
  slideButtons,
  sliderContainer,
  sliderStyles,
} from "./horizontalScroll.styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MovieCard from "../movieCard/movieCard";
import Loader from "../customCircularLoader/customLoader";
import {
  setTopRatedPageAction,
  setPopularPageAction,
} from "store/actions/moviesActions";

const HorizontalScroll = ({ type, loading, data }) => {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((state) => state.MoviesReducer);
  const totalCount =
    type === "top_rated"
      ? moviesReducer.topRatedCount
      : moviesReducer.popularCount;
  const setPage = () => {
    if (type === "top_rated") {
      dispatch(setTopRatedPageAction((moviesReducer.topRatedPage += 1)));
    } else {
      setPopularPageAction(
        dispatch(setPopularPageAction((moviesReducer.popularPage += 1)))
      );
    }
  };
  const myRef = useRef(null);
  const handleSlide = (dir) => {
    if (dir === "right") {
      myRef.current.scrollLeft += 1000;
    } else {
      myRef.current.scrollLeft += -1000;
    }
  };
  const hasMore = !!(totalCount > data?.length);
  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <Box sx={mainContainer}>
      <Box onClick={() => handleSlide("left")} sx={slideButtons("left")}>
        <ArrowBackIosNewIcon />
      </Box>

      <Box sx={sliderContainer}>
        <Box ref={myRef} sx={sliderStyles}>
          {data &&
            data.map((movie, index) => {
              if (data.length === index + 1) {
                return (
                  <MovieCard refer={lastElement} key={index} data={movie} />
                );
              } else {
                return <MovieCard ref={null} key={index} data={movie} />;
              }
            })}
        </Box>
      </Box>
      <Box sx={slideButtons("right")} onClick={() => handleSlide("right")}>
        {loading ? (
          <Loader primaryColor="#000" customSize={25} />
        ) : (
          <ArrowForwardIosIcon />
        )}
      </Box>
    </Box>
  );
};

export default HorizontalScroll;
