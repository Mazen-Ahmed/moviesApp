import { Box, Typography } from "@mui/material";
import ResultsListing from "./resultsListing";
import { useSelector } from "react-redux";
import InboxIcon from "@mui/icons-material/Inbox";
import Loader from "components/shared/customCircularLoader/customLoader";
import CustomPagination from "components/shared/customPagination/customPagination";
import { loaderStyles, noResults } from "./results.styles";
import { themes } from "helpers/useThemes";

const Results = () => {
  const { searchKeyWord, searchLoading, searchCount } = useSelector(
    (state) => state.MoviesReducer
  );
  const { theme } = useSelector((state) => state.AuthReducer);
  return (
    <Box sx={{ paddingBlock: 10 }}>
      <Box
        sx={{
          background: themes[theme].childrenBackgrounds,
          color: themes[theme].textColor,
          padding: 4,
        }}
      >
        {searchLoading && searchCount === 0 ? (
          <Box sx={loaderStyles}>
            <Loader />
          </Box>
        ) : (
          <Typography sx={{ pb: 1, fontSize: { xs: 20, md: 30 } }}>
            Results ({searchCount}) For "{searchKeyWord}"
          </Typography>
        )}

        {searchCount === 0 && !searchLoading ? (
          <Box sx={noResults}>
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
