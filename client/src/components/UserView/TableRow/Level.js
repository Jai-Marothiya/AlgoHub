import { Box, Typography } from "@mui/material";
import React from "react";

const Level = ({ level }) => {
  return (
    <Box sx={{ mr: 3, display: "flex", alignItems: "center" }}>
      {level === "Easy" ? (
        <Typography
          sx={{
            color: "rgba(0, 120, 48, 1)",
            fontFamily: "Jost, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24.0px",
            letterSpacing: "0px",
          }}
        >
          {level}
        </Typography>
      ) : level === "Medium" ? (
        <Typography
          sx={{
            color: "rgba(234, 139, 71, 1)",
            fontFamily: "Jost, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24.0px",
            letterSpacing: "0px",
          }}
        >
          {level}
        </Typography>
      ) : (
        <Typography
          sx={{
            color: "rgba(216, 44, 44, 1)",
            fontFamily: "Jost, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24.0px",
            letterSpacing: "0px",
          }}
        >
          {level}
        </Typography>
      )}
    </Box>
  );
};

export default Level;
