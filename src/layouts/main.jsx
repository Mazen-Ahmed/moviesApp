import React from "react";
import { Container, Box } from "@mui/material";
import Navbar from "./navbar/navbar";
import { themes } from "helpers/useThemes";
import { useSelector } from "react-redux";

const Main = ({ children }) => {
  const { theme } = useSelector((state) => state.AuthReducer);
  return (
    <Box
      sx={{
        background: themes[theme].background,
        minHeight: "100vh",
        paddingBottom: 10,
      }}
    >
      <Navbar />
      <Container maxWidth={"lg"}>{children}</Container>
    </Box>
  );
};

export default Main;
