import React, { useEffect, useState } from "react";
import useDebounce from "helpers/useDebounce";
import { axiosBase } from "config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchKeywordAction,
  setSearchResultsAction,
  setSearchResultsCountAction,
  setSearchResultsStartAction,
} from "store/actions/moviesActions";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";

export default function useSearch() {
  const navigate = useNavigate();
  const { searchPage } = useSelector((state) => state.MoviesReducer);
  const [params] = useSearchParams();
  const queryParam = params.get("query");
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState(queryParam || null);
  const debouncedValue = useDebounce(searchKeyword, 900);
  const dispatch = useDispatch();

  const setKeyword = (word) => {
    setSearchKeyword(word);
    setIsLoading(true);
  };

  const search = async () => {
    dispatch(setSearchResultsStartAction(true));
    try {
      const res = await axiosBase.get("/search/movie", {
        params: { query: searchKeyword, page: searchPage },
      });
      dispatch(setSearchKeywordAction(searchKeyword));
      dispatch(setSearchResultsAction(res.data.results));
      dispatch(setSearchResultsCountAction(res.data.total_results));
      navigate({
        pathname: "/moviesApp/search",
        search: `?${createSearchParams({ query: searchKeyword })}`,
      });
    } catch (error) {}
    setIsLoading(false);
    dispatch(setSearchResultsStartAction(false));
  };
  useEffect(() => {
    if (searchKeyword) {
      search();
    } else {
      setIsLoading(false);
      navigate("/moviesApp");
    }
  }, [debouncedValue, searchPage]);
  return { setKeyword, searchKeyword, isLoading };
}
