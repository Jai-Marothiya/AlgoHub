import { Box, Typography } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "../../../utils/utils";

const Level = ({ level }) => {
  const Level = capitalizeFirstLetter(level);
  return (
    <Box sx={{ mr: 3, display: "flex", alignItems: "center" }}>
      {Level === "Easy" ? (
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
          {Level}
        </Typography>
      ) : Level === "Medium" ? (
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
          {Level}
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
          {Level}
        </Typography>
      )}
    </Box>
  );
};

export default Level;
