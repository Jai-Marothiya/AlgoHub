import React from "react";
import { capitalizeFirstLetter } from "../../../utils/utils";
import GFG from "../../icons/GFG";
import LeetCode from "../../icons/LeetCode";
import CodeChef from "../../icons/CodeChef";
import CodeForces from "../../icons/CodeForces";
import Atcoder from "../../icons/Atcoder";
import InterviewBit from "../../icons/InterviewBit";
import { Box } from "@mui/material";
import { ProblemPlatforms } from "../../../constants/Constants";
import HackerRank from "../../icons/HackerRank";

const PlatformLogo = ({ Platform, width, height }) => {
  return (
    <Box sx={{ mr: 2 }}>
      {Platform === ProblemPlatforms.GFG ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <GFG width={width} height={height} />
        </Box>
      ) : Platform === ProblemPlatforms.LEETCODE ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LeetCode width={width} height={height} />
        </Box>
      ) : Platform === ProblemPlatforms.CODEFORCES ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CodeForces width={width} height={height} />
        </Box>
      ) : Platform === ProblemPlatforms.CODECHEF ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CodeChef width={width} height={height} />
        </Box>
      ) : Platform === ProblemPlatforms.ATCODER ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Atcoder width={width} height={height} />
        </Box>
      ) : Platform === ProblemPlatforms.HACKERRANK ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HackerRank width={width} height={height} />
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InterviewBit width={width} height={height} />
        </Box>
      )}
    </Box>
  );
};

export default PlatformLogo;
