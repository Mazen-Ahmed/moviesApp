import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">404 not found</Typography>
      <Typography variant="h6">
        <Link to="/" style={{ textDecoration: "underline", color: "#000" }}>
          Back To Home
        </Link>
      </Typography>
    </Box>
  );
};

export default NotFound;
