import React from "react";
import WithAuthentication from "helpers/withAuth";
import TopRated from "components/sections/home/topRated/topRated";
import Popular from "components/sections/home/popular/popular";

const Home = () => {
  return (
    <div>
      <TopRated />
      <Popular />
    </div>
  );
};

export default WithAuthentication(Home);
