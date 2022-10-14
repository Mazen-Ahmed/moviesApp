import { useEffect, useState } from "react";
import { axiosBase } from "config/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { setTopRatedCountAction } from "store/actions/moviesActions";

const useGetTopRated = () => {
  const { topRatedPage } = useSelector((state) => state.MoviesReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const getTopRated = () => {
    setLoading(true);
    axiosBase
      .get("movie/top_rated", {
        params: { page: topRatedPage },
      })
      .then((res) => {
        setMoviesList((prev) => [...prev, ...res.data.results]);
        setLoading(false);
        dispatch(setTopRatedCountAction(res.data.total_results));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getTopRated();
  }, [topRatedPage]);
  return { moviesList, loading };
};

export default useGetTopRated;
