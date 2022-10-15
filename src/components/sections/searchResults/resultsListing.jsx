import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import MovieCard from "components/shared/movieCard/movieCard";
import CardsLoader from "components/shared/skeletonCardsLoader/skeleton";

const ResultsListing = () => {
  const { searchResults, searchLoading } = useSelector(
    (state) => state.MoviesReducer
  );

  return (
    <Grid container spacing={2}>
      {searchLoading ? (
        <CardsLoader count={20} />
      ) : (
        <>
          {searchResults?.map((movie, idx) => (
            <Grid xs={12} md={6} lg={4} key={idx} item>
              <MovieCard data={movie} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export default ResultsListing;
