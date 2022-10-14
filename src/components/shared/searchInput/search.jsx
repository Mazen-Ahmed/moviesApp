import React, { useState } from "react";
import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import useSearch from "./_hooks/useSearchKeyWord";
import { formControl, input } from "./searchInput";
import Loader from "../customCircularLoader/customLoader";
import { useNavigate, createSearchParams } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const [focused, setFocused] = useState(false);
  const { setKeyword, searchKeyword, isLoading } = useSearch();

  return (
    <FormControl
      sx={formControl(focused)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChange={(e) => {
        setKeyword(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && searchKeyword) {
          e.preventDefault();

          navigate({
            pathname: "/moviesApp/search",
            search: `?${createSearchParams({ query: searchKeyword })}`,
          });
        }
      }}
      variant="outlined"
    >
      <OutlinedInput
        value={searchKeyword}
        size="small"
        id="outlined-adornment-weight"
        placeholder="Search..."
        sx={input}
        endAdornment={
          <InputAdornment position="end">
            {isLoading ? (
              <Loader customSize={25} />
            ) : (
              <Search sx={{ color: focused && "#00cec9" }} />
            )}
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
      />
    </FormControl>
  );
};

export default SearchInput;
