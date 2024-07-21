import { Box } from "@mui/material";
import React from "react";

const Atcoder = ({ width, height }) => {
  return (
    <Box
      component="img"
      src="./assets/Atcoder.png"
      alt="Description"
      sx={{ width, height }} // Customize the size as needed
    />
  );
};

export default Atcoder;
