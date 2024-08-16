import React from "react";
import {
  Box,
  Typography,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const ProgressBar = ({ total, easy, medium, hard }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const easyPercent = (easy / total) * 100;
  const mediumPercent = (medium / total) * 100;
  const hardPercent = (hard / total) * 100;
  const size = isLargeScreen ? 200 : 150;
  const thickness = 5;

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: { xs: "170px", md: "200px" },
        width: "100%",
        mr: { xs: "0", md: "100px" },
        justifyContent: "space-between",
      }}
    >
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress
          variant="determinate"
          value={100}
          size={size}
          thickness={thickness}
          sx={{
            color: "#e0e0e0",
            position: "absolute",
          }}
        />
        <CircularProgress
          variant="determinate"
          value={easyPercent}
          size={size}
          thickness={thickness}
          sx={{
            color: "#20A015",
            position: "absolute",
            transform: "rotate(-90deg) !important",
          }}
        />
        <CircularProgress
          variant="determinate"
          value={mediumPercent}
          size={size}
          thickness={thickness}
          sx={{
            color: "#FFAC60",
            position: "absolute",
            transform: `rotate(${easyPercent * 3.6 - 90}deg) !important`,
          }}
        />
        <CircularProgress
          variant="determinate"
          value={hardPercent}
          size={size}
          thickness={thickness}
          sx={{
            color: "#FF3E3E",
            position: "absolute",
            transform: `rotate(${
              (easyPercent + mediumPercent) * 3.6 - 90
            }deg) !important`,
          }}
        />
        <Box position="absolute">
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "16.0px",
              letterSpacing: " 0px",
              color: "rgba(0, 0, 0)",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "28px", fontWeight: "600" }}>
              {easy + medium + hard}
            </Typography>{" "}
            {easy + medium + hard > 1 ? "Problems" : "Problem"} Solved
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "24.0px",
            letterSpacing: " 0.5px",
            color: "rgba(0, 0, 0, 0.87)",
            mb: 2,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              width: "100%",
              height: "3px",
              bgcolor: "#20A015",
              borderRadius: "50px",
            },
          }}
        >
          {easy} Easy
        </Typography>
        <Typography
          sx={{
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "24.0px",
            letterSpacing: " 0.5px",
            color: "rgba(0, 0, 0, 0.87)",
            mb: 2,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              width: "100%",
              height: "3px",
              bgcolor: "#FFAC60",
              borderRadius: "50px",
            },
          }}
        >
          {medium} Medium
        </Typography>
        <Typography
          sx={{
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "24.0px",
            letterSpacing: " 0.5px",
            color: "rgba(0, 0, 0, 0.87)",
            mb: 2,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              width: "100%",
              height: "3px",
              bgcolor: "#FF3E3E",
              borderRadius: "50px",
            },
          }}
        >
          {hard} Hard
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
