import {
  Box,
  Typography,
  Container,
  Slide,
  IconButton,
  Tooltip,
  Fade,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Search } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
  navbarStyles,
  containerStyles,
  logoutMenu,
  dropDown,
  searchContainer,
  responsiveNavbar
} from "./navbar.styles";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { logout, setUserTheme } from "store/actions/authActions";
import SearchInput from "components/shared/searchInput/search";
import { useSelector, useDispatch } from "react-redux";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { themes } from "helpers/useThemes";

const Navbar = () => {
  const authData = useSelector((state) => state?.AuthReducer);
  const [opened, setOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={navbarStyles(
          themes[authData?.theme]?.background,
          themes[authData?.theme]?.textColor
        )}
      >
        <Container maxWidth="lg" sx={containerStyles}>
          <Link
            to="/moviesApp"
            style={{
              textDecoration: "none",
              color: themes[authData.theme].textColor,
            }}
          >
            <Typography sx={{ display: "flex", fontSize: { xs: 18, md: 30 } }}>
              <LiveTvIcon sx={{ fontSize: { xs: 23, md: 35 } }} />
              Movies App
            </Typography>
          </Link>

          <Box sx={searchContainer}>
            <SearchInput />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "space-between",
            }}
          >
            <Tooltip
              title="Search"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <IconButton onClick={() => setSearchOpened((prev) => !prev)}>
                {searchOpened ? (
                  <CloseIcon
                    sx={{ color: themes[authData?.theme]?.textColor }}
                  />
                ) : (
                  <Search sx={{ color: themes[authData?.theme]?.textColor }} />
                )}
              </IconButton>
            </Tooltip>
            {authData.theme === "dark" ? (
              <Tooltip title="Light Mode">
                <IconButton onClick={() => dispatch(setUserTheme("light"))}>
                  <LightModeIcon
                    sx={{ color: themes[authData?.theme]?.textColor }}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Dark Mode">
                <IconButton onClick={() => dispatch(setUserTheme("dark"))}>
                  <DarkModeIcon />
                </IconButton>
              </Tooltip>
            )}

            {authData?.user ? (
              <Typography
                variant="body1"
                sx={dropDown}
                onClick={() => setOpened((prev) => !prev)}
              >
                Hello,
                <span style={{ opacity: 0.7, display: "flex" }}>
                  {authData?.user}
                  <ArrowDropDownIcon
                    sx={{
                      transition: "ease-in-out .2s",
                      transform: opened && "rotate(180deg)",
                    }}
                  />
                </span>
                <Slide direction="up" in={opened && authData?.user}>
                  <Typography
                    sx={logoutMenu(themes[authData.theme].childrenBackgrounds)}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(logout());
                    }}
                  >
                    <LogoutIcon />
                    Logout
                  </Typography>
                </Slide>
              </Typography>
            ) : (
              <Link
                to="/moviesApp/login"
                variant="body1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  textDecoration: "none",
                  color: themes[authData?.theme]?.textColor,
                }}
              >
                <LoginIcon />
                Login
              </Link>
            )}
          </Box>
        </Container>
      </Box>
      <Fade in={searchOpened}>
        <Box sx={responsiveNavbar(themes[authData?.theme]?.background)}>
          <SearchInput />
        </Box>
      </Fade>
    </>
  );
};

export default Navbar;
