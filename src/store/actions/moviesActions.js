export const SET_SEARCH_KEYWORD = "setSearchKeyword";
export const SET_SEARCH_RESULTS = "setSearchResults";
export const SET_SEARCH_RESULTS_START = "setSearchResultsStart";
export const SET_SEARCH_RESULTS_PAGE = "setSearchResultsPage";
export const SET_SEARCH_RESULTS_COUNT = "setSearchResultsCount";
export const SET_TOP_RATED_PAGE = "setTopRatedPage";
export const SET_TOP_RATED_COUNT = "setTopRatedCount";
export const SET_POPULAR_PAGE = "setPopularPage";
export const SET_POPULAR_COUNT = "setPopularCount";

export const setSearchKeyword = (payload) => {
  return {
    type: SET_SEARCH_KEYWORD,
    payload,
  };
};

export const setSearchResults = (payload) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload,
  };
};

export const setSearchResultsStart = (payload) => {
  return {
    type: SET_SEARCH_RESULTS_START,
    payload,
  };
};

export const setSearchResultsPage = (payload) => {
  return {
    type: SET_SEARCH_RESULTS_PAGE,
    payload,
  };
};

export const setSearchResultsCount = (payload) => {
  return {
    type: SET_SEARCH_RESULTS_COUNT,
    payload,
  };
};

export const setTopRatedPage = (payload) => {
  return {
    type: SET_TOP_RATED_PAGE,
    payload,
  };
};

export const setTopRatedCount = (payload) => {
  return {
    type: SET_TOP_RATED_COUNT,
    payload,
  };
};
export const setPopularPage = (payload) => {
  return {
    type: SET_POPULAR_PAGE,
    payload,
  };
};

export const setPopularCount = (payload) => {
  return {
    type: SET_POPULAR_COUNT,
    payload,
  };
};

// Actions Creators

export const setSearchKeywordAction = (word) => {
  return (dispatch) => {
    dispatch(setSearchKeyword(word));
  };
};
export const setSearchResultsStartAction = (payload) => {
  return (dispatch) => {
    dispatch(setSearchResultsStart(payload));
  };
};

export const setSearchResultsAction = (result) => {
  return (dispatch) => {
    dispatch(setSearchResults(result));
  };
};

export const setSearchResultsPageAction = (page) => {
  return (dispatch) => {
    dispatch(setSearchResultsPage(page));
  };
};

export const setSearchResultsCountAction = (count) => {
  return (dispatch) => {
    dispatch(setSearchResultsCount(count));
  };
};
export const setTopRatedPageAction = (page) => {
  return (dispatch) => {
    dispatch(setTopRatedPage(page));
  };
};

export const setTopRatedCountAction = (count) => {
  return (dispatch) => {
    dispatch(setTopRatedCount(count));
  };
};

export const setPopularPageAction = (page) => {
  return (dispatch) => {
    dispatch(setPopularPage(page));
  };
};

export const setPopularCountAction = (count) => {
  return (dispatch) => {
    dispatch(setPopularCount(count));
  };
};
