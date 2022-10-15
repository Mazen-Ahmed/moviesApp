import { Grid, Skeleton } from "@mui/material";
import React from "react";

const CardsLoader = ({ count = 9 }) => {
  const loader = [];
  for (let i = 0; i < count; i++) {
    loader.push(
      <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
        <h1>
          <Skeleton variant="rectangular" width="100%" height={300} />
        </h1>
        <Skeleton width={267} height={20} />
        <Skeleton width={267} height={50} />
      </Grid>
    );
  }
  return (
    <Grid container spacing={1} style={{ marginTop: 0 }}>
      {loader}
    </Grid>
  );
};

export default CardsLoader;
