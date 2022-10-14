import { Box, Typography } from "@mui/material";
import ResultsListing from "./resultsListing";
import { useSelector } from "react-redux";
import InboxIcon from "@mui/icons-material/Inbox";
import Loader from "components/shared/customCircularLoader/customLoader";
import CustomPagination from "components/shared/customPagination/customPagination";



const Results = () => {
  const { searchKeyWord, searchLoading, searchCount } = useSelector(
    (state) => state.MoviesReducer
  );
  return (
    <Box sx={{ paddingBlock: 10 }}>
      <Box sx={{ background: "#fff", padding: 4 }}>
        {searchLoading && searchCount === 0 ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              pb: 1,
            }}
          >
            <Loader />
          </Box>
        ) : (
          <Typography sx={{ pb: 1, fontSize: { xs: 20, md: 30 } }}>
            Results ({searchCount}) For "{searchKeyWord}"
          </Typography>
        )}

        {searchCount === 0 && !searchLoading ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBlock: 10,
            }}
          >
            <InboxIcon sx={{ width: 100, height: 100 }} />
            <Typography sx={{ fontSize: { xs: 25, md: 35 } }}>
              Sorry, no results were found
            </Typography>
          </Box>
        ) : (
          <ResultsListing />
        )}
        <Box
          sx={{
            paddingBlock: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomPagination />
        </Box>
      </Box>
    </Box>
  );
};

export default Results;
