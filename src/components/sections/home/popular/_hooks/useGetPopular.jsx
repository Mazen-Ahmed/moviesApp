import { useEffect, useState } from "react";
import { axiosBase } from "config/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { setPopularCountAction } from "store/actions/moviesActions";

const useGetPopular = () => {
  const { popularPage } = useSelector((state) => state.MoviesReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const getTopRated = () => {
    setLoading(true);
    axiosBase
      .get("movie/popular", {
        params: { page: popularPage },
      })
      .then((res) => {
        setMoviesList((prev) => [...prev, ...res.data.results]);
        dispatch(setPopularCountAction(res.data.total_results));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getTopRated();
  }, [popularPage]);
  return { moviesList, loading };
};

export default useGetPopular;
