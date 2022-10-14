import React from "react";
import WithAuthentication from "helpers/withAuth";

const Home = () => {
  return <div>Home</div>;
};

export default WithAuthentication(Home);
