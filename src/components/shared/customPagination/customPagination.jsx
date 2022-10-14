import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { setSearchResultsPageAction } from "store/actions/moviesActions";

const CustomPagination = () => {
  const dispacth = useDispatch();
  const { searchCount, searchPage } = useSelector(
    (state) => state.MoviesReducer
  );
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
    />
  );
};

export default CustomPagination;
