import { useEffect, useState } from "react";
import { axiosBase } from "config/axiosInstance";

const useGetMovieTrailer = (id, open) => {
  const [trailer, setTrailer] = useState();
  const getMovieTrailer = () => {
    axiosBase.get(`movie/${id}/videos`).then((res) => {
      setTrailer(
        ...res.data.results.filter((movie) => movie.type === "Trailer")
      );
    });
  };
  useEffect(() => {
    if (open) getMovieTrailer();
  }, [id, open]);
  return { trailer };
};

export default useGetMovieTrailer;
