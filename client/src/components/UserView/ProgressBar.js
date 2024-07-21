import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const ProgressBar = ({ easy, medium, hard, notdone }) => {
  const total = easy + medium + hard + notdone;
  const easyPercent = (easy / total) * 100;
  const mediumPercent = (medium / total) * 100;
  const hardPercent = (hard / total) * 100;
  const notdonePercent = (notdone / total) * 100;

  return (
    <Box
      sx={{
        position: "relative",
        width: 200,
        height: 100,
        overflow: "hidden",
        borderRadius: "100px 100px 0 0",
        transform: "rotate(-90deg)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={easyPercent + mediumPercent + hardPercent + notdonePercent}
          sx={{ position: "absolute" }}
        />
        <Typography variant="h6" sx={{ position: "relative", zIndex: 1 }}>
          {`${easy} Easy, ${medium} Medium, ${hard} Hard, ${notdone} Not Done`}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          clip: "rect(0, 200px, 100px, 0)",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={easyPercent}
          sx={{
            color: "green",
            position: "absolute",
            top: 0,
            left: 0,
            transform: "rotate(0deg)",
          }}
        />
        <CircularProgress
          variant="determinate"
          value={mediumPercent}
          sx={{
            color: "orange",
            position: "absolute",
            top: 0,
            left: 0,
            transform: "rotate(90deg)",
          }}
        />
        <CircularProgress
          variant="determinate"
          value={hardPercent}
          sx={{
            color: "red",
            position: "absolute",
            top: 0,
            left: 0,
            transform: "rotate(180deg)",
          }}
        />
        <CircularProgress
          variant="determinate"
          value={notdonePercent}
          sx={{
            color: "grey",
            position: "absolute",
            top: 0,
            left: 0,
            transform: "rotate(270deg)",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProgressBar;
