import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import GFG from "../icons/GFG";
import LeetCode from "../icons/LeetCode";
import CodeForces from "../icons/CodeForces";
import CodeChef from "../icons/CodeChef";
import InterviewBit from "../icons/InterviewBit";
import Atcoder from "../icons/Atcoder";
import CloseIcon from "@mui/icons-material/Close";
import { ProblemPlatforms } from "../../constants/Constants";
import { DataContext } from "../../context/DataProvider";
import HackerRank from "../icons/HackerRank";

const PlatFormTags = ({ Platform, handleAdd, handleRemove }) => {
  const { Platforms } = useContext(DataContext);
  const selected = Platforms.indexOf(Platform) !== -1;
  return (
    <Box
      sx={{
        border: selected
          ? "1px solid #7491FF"
          : "1px solid rgba(240, 243, 254, 1)",
        "&:hover": {
          border: selected ? "1px solid #7491FF" : "1px solid #b7c6ff",
          cursor: "pointer",
        },
        borderRadius: 4,
        background: selected ? "#EFF2FF" : "#fff",
        paddingY: "4px",
        paddingX: "8px",
        mr: "12px",
        mb: "12px",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
      }}
      onClick={() => (selected ? handleRemove(Platform) : handleAdd(Platform))}
    >
      {Platform === ProblemPlatforms.GFG ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <GFG width="16px" height="16px" />
        </Box>
      ) : Platform === ProblemPlatforms.LEETCODE ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LeetCode width="16px" height="16px" />
        </Box>
      ) : Platform === ProblemPlatforms.CODEFORCES ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CodeForces width="16px" height="16px" />
        </Box>
      ) : Platform === ProblemPlatforms.CODECHEF ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CodeChef width="16px" height="16px" />
        </Box>
      ) : Platform === ProblemPlatforms.ATCODER ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Atcoder width="16px" height="16px" />
        </Box>
      ) : Platform === ProblemPlatforms.HACKERRANK ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HackerRank width="16px" height="16px" />
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InterviewBit width="16px" height="16px" />
        </Box>
      )}
      <Typography
        sx={{
          color: "#606060",
          fontFamily: "Jost, sans-serif",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "18.0px",
          letterSpacing: "0px",
          px: "8px",
        }}
      >
        {Platform}
      </Typography>
      {selected && <CloseIcon fontSize="12px" color="rgba(0, 0, 0, 0.87)" />}
    </Box>
  );
};

export default PlatFormTags;
