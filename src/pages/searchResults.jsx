import React from "react";
import Results from "components/sections/searchResults/results";
import WithAuthentication from "helpers/withAuth";

const SearchResults = () => {
  return <Results />;
};

export default WithAuthentication(SearchResults);
