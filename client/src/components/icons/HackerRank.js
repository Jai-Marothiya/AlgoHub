import { Box } from "@mui/material";
import React from "react";

const HackerRank = ({ width, height }) => {
  return (
    <Box
      component="img"
      src="./assets/hackerrankIcon.svg"
      alt="Description"
      sx={{ width, height }} // Customize the size as needed
    />
  );
};

export default HackerRank;
