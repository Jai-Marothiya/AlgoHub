import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginY: 3 }}>
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "18px",
          fontWeight: "100",
          lineHeight: "27.0px",
          letterSpacing: " 0.5px",
          color: "rgba(0, 0, 0, 0.72)",
          maxWidth: "50%",
        }}
      >
        Made with ❤️ By AlgoHub Team
      </Typography>
    </Box>
  );
};

export default Footer;
