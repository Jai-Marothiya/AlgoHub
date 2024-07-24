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
        height: "fit-content",
        width: "20%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: 2,
        paddingX: 3,
        paddingY: 4,
      }}
    >
      <Box>
        <SolveFilter />
        <DifficultyFilter />
        <PlatformFilter />
        <TagsFilter />
      </Box>
    </Box>
  );
};

export default FilterSidebar;
