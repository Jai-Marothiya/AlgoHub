import { Box, Typography } from "@mui/material";
import React from "react";

const Tag = ({ tag }) => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(240, 243, 254, 1)",
        borderRadius: 4,
        paddingY: "5px",
        paddingX: 2,
        mr: "10px",
      }}
    >
      <Typography
        sx={{
          color: "rgba(37, 42, 131, 1)",
          fontFamily: "Jost, sans-serif",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "18.0px",
          letterSpacing: "0px",
          width: "max-content",
        }}
      >
        {tag}
      </Typography>
    </Box>
  );
};

export default Tag;
