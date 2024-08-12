import { Box } from "@mui/material";
import React from "react";
import SolveFilter from "./SolveFilter";
import DifficultyFilter from "./DifficultyFilter";
import PlatformFilter from "./PlatformFilter";
import TagsFilter from "./TagsFilter";

const FilterSidebar = () => {
  return (
    <Box
      sx={{
        maxWidth: "96%",
        minWidth: "1280",
        maxHeight: "950px",
        height: "100%",
        overflowY: "scroll",
        width: "20%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: 2,
        paddingX: 3,
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0, 0, 0, 0.18)",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box sx={{ py: "30px" }}>
        <SolveFilter />
        <DifficultyFilter />
        <PlatformFilter />
        <TagsFilter />
      </Box>
    </Box>
  );
};

export default FilterSidebar;
