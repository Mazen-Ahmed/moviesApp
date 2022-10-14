import * as actions from "../actions/moviesActions";
const updateState = (oldState, newState) => {
  return {
    ...oldState,
    ...newState,
  };
};

const initialState = {
  searchKeyWord: null,
  searchResults: [],
  searchLoading: false,
  searchPage: 1,
  searchCount: 0,
  topRatedPage: 1,
  topRatedCount: 0,
  popularPage: 1,
  popularCount: 0,
};

const setSearchKeyword = (state, action) => {
  return updateState(state, {
    searchKeyWord: action.payload,
  });
};
const setSearchResults = (state, action) => {
  return updateState(state, {
    searchResults: action.payload,
  });
};

export const setSearchResultsStart = (state, action) => {
  return updateState(state, {
    searchLoading: action.payload,
  });
};

export const setSearchResultsPage = (state, action) => {
  return updateState(state, {
    searchPage: action.payload,
  });
};

export const setSearchResultsCount = (state, action) => {
  return updateState(state, {
    searchCount: action.payload,
  });
};

const setTopRatedPage = (state, action) => {
  return updateState(state, {
    topRatedPage: action.payload,
  });
};
const setTopRatedCount = (state, action) => {
  return updateState(state, {
    topRatedCount: action.payload,
  });
};
const setPopularPage = (state, action) => {
  return updateState(state, {
    popularPage: action.payload,
  });
};
const setPopularCount = (state, action) => {
  return updateState(state, {
    popularCount: action.payload,
  });
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SEARCH_KEYWORD:
      return setSearchKeyword(state, action);
    case actions.SET_SEARCH_RESULTS:
      return setSearchResults(state, action);
    case actions.SET_SEARCH_RESULTS_START:
      return setSearchResultsStart(state, action);
    case actions.SET_SEARCH_RESULTS_PAGE:
      return setSearchResultsPage(state, action);
    case actions.SET_SEARCH_RESULTS_COUNT:
      return setSearchResultsCount(state, action);
    case actions.SET_TOP_RATED_PAGE:
      return setTopRatedPage(state, action);
    case actions.SET_TOP_RATED_COUNT:
      return setTopRatedCount(state, action);
    case actions.SET_POPULAR_PAGE:
      return setPopularPage(state, action);
    case actions.SET_POPULAR_COUNT:
      return setPopularCount(state, action);

    default:
      return state;
  }
};

export default MoviesReducer;
