import React from "react";
import WithAuthentication from "helpers/withAuth";
import TopRated from "components/sections/home/topRated/topRated";

const Home = () => {
  return (
    <div>
      <TopRated />
    </div>
  );
};

export default WithAuthentication(Home);
