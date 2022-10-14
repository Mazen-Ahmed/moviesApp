import React from "react";
import { Container, Box } from "@mui/material";
import Navbar from "./navbar/navbar";

const Main = ({ children }) => {
  return (
    <Box
      sx={{
        background: "rgba(223, 230, 233,.3)",
        minHeight: 600,
        paddingBottom: 10,
      }}
    >
      <Navbar />
      <Container maxWidth={"lg"}>{children}</Container>
    </Box>
  );
};

export default Main;
