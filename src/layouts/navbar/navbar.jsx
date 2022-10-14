import {
  Box,
  Typography,
  Container,
  Slide,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  navbarStyles,
  containerStyles,
  logoutMenu,
  dropDown,
} from "./navbar.styles";
import { useDispatch } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { logout } from "store/actions/authActions";
import SearchInput from "components/shared/searchInput/search";
import { useSelector } from "react-redux";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const Navbar = () => {
  const user = useSelector((state) => state?.AuthReducer)?.user;
  const [opened, setOpened] = useState(false);
  const dispatch = useDispatch();
  return (
    <Box sx={navbarStyles}>
      <Container maxWidth="lg" sx={containerStyles}>
        <Link to="/moviesApp" style={{ textDecoration: "none", color: "#000" }}>
          <Typography sx={{ display: "flex", fontSize: { xs: 18, md: 30 } }}>
            <LiveTvIcon sx={{ fontSize: { xs: 23, md: 35 } }} />
            Movies App
          </Typography>
        </Link>

        <SearchInput />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "space-between",
          }}
        >
          {true ? (
            <Tooltip title="Light Mode">
              <IconButton>
                <LightModeIcon sx={{ color: "" }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Dark Mode">
              <IconButton>
                <DarkModeIcon />
              </IconButton>
            </Tooltip>
          )}

          {user ? (
            <Typography
              variant="body1"
              sx={dropDown}
              onClick={() => setOpened((prev) => !prev)}
            >
              Hello,
              <span style={{ opacity: 0.7, display: "flex" }}>
                {user}
                <ArrowDropDownIcon
                  sx={{
                    transition: "ease-in-out .2s",
                    transform: opened && "rotate(180deg)",
                  }}
                />
              </span>
              <Slide direction="up" in={opened && user}>
                <Typography
                  sx={logoutMenu}
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
                color: "#000",
              }}
            >
              <LoginIcon />
              Login
            </Link>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
