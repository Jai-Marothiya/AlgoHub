import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import ProblemsTable from "./ProblemsTable";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <Box>
      <Navbar />
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
              fontFamily: "Roboto, sans-serif",
              fontSize: "36px",
              fontWeight: "600",
              lineHeight: "52.0px",
              letterSpacing: " 0.5px",
              color: "black",
              mb: 2,
            }}
          >
            Unlock Your Coding Potential with Curated Questions
          </Typography>
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
            Welcome to AlgoHub, the ultimate repository for coding enthusiasts.
            Here, you'll find a diverse collection of coding questions sourced
            from top platforms like LeetCode, CodeForces, GFG, HackerRank, and
            more.
          </Typography>
        </Box>
      </Box>
      <ProblemsTable />
      <Footer />
    </Box>
  );
};

export default Dashboard;
