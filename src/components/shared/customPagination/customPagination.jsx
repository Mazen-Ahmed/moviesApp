import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { setSearchResultsPageAction } from "store/actions/moviesActions";
import { themes } from "helpers/useThemes";
import { pagination } from "./customPagination.styles";

const CustomPagination = () => {
  const dispacth = useDispatch();
  const { searchCount, searchPage } = useSelector(
    (state) => state.MoviesReducer
  );
  const { theme } = useSelector((state) => state.AuthReducer);
  const handlePageChange = (event, page) => {
    dispacth(setSearchResultsPageAction(page));
  };
  const totalPages = Math.floor(searchCount / 20);
  const finalTotalPages = searchCount % 9 > 0 ? totalPages + 1 : totalPages + 0;
  return (
    <Pagination
      onChange={handlePageChange}
      count={finalTotalPages}
      variant="outlined"
      color="success"
      page={searchPage}
      sx={pagination(themes[theme].background, themes[theme].textColor)}
    />
  );
};

export default CustomPagination;
