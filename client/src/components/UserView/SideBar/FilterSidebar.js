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
        maxWidth: { xs: "100%", md: "96%" },
        minWidth: "1280",
        maxHeight: "950px",
        height: "100%",
        overflowY: "scroll",
        width: { xs: "100%", md: "20%" },
        boxShadow: {
          xs: "none",
          md: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
        borderRadius: 2,
        paddingX: { xs: 0, md: 3 },
        "&::-webkit-scrollbar": {
          width: 0,
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
