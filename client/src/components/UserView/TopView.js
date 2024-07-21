import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import ProblemUploadForm from "./ProblemUploadForm";
import ProgressBar from "./ProgressBar";

const TopView = () => {
  const { adminView } = useContext(DataContext);
  return (
    <Box sx={{ maxWidth: "100%" }}>
      {adminView ? (
        <Box
          sx={{
            maxWidth: "96%",
            minWidth: "1280",
            display: "flex",
            marginX: "auto",
          }}
        >
          <Box sx={{ paddingY: 11, paddingX: 6, width: "100%" }}>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "36px",
                fontWeight: "600",
                lineHeight: "52.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.87)",
                mb: 4,
              }}
            >
              Add questions, enhance AlgoHub
            </Typography>
            <ProblemUploadForm />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            maxWidth: "96%",
            minWidth: "1280",
            display: "flex",
            marginX: "auto",
          }}
        >
          <Box sx={{ paddingY: 11, paddingX: 3, width: "100%" }}>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "36px",
                fontWeight: "600",
                lineHeight: "52.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.87)",
                mb: 4,
              }}
            >
              Unlock Your Coding Potential with Curated Questions
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "27.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.72)",
                maxWidth: "50%",
              }}
            >
              Welcome to AlgoHub, the ultimate repository for coding
              enthusiasts. Here, you'll find a diverse collection of coding
              questions sourced from top platforms like LeetCode, CodeForces,
              GFG, HackerRank, and more.
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TopView;
