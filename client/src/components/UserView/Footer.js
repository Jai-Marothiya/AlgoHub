import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../icons/Logo";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right, rgba(179, 203, 232, 0.25), rgba(156, 161, 186, 0.25))",
        px: 3,
        pt: 6,
        pb: 7,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "96%",
          mx: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Logo />
        </Box>
        <Typography
          sx={{
            fontFamily: "Jost, sans-serif",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27.0px",
            letterSpacing: " 0.5px",
            color: "rgba(0, 0, 0, 0.54)",
            maxWidth: "50%",
          }}
        >
          Unlock your coding potential. Your journey to mastering algorithms
          starts here.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
