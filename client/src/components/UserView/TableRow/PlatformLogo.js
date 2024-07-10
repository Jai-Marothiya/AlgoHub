import React from "react";
import { capitalizeFirstLetter } from "../../../utils/utils";
import GFG from "../../icons/GFG";
import LeetCode from "../../icons/Leetcode";
import { Box } from "@mui/material";

const PlatformLogo = ({ platform }) => {
  const Platform = capitalizeFirstLetter(platform);
  return (
    <Box sx={{ mr: 2 }}>
      {Platform === "Gfg" ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <GFG width="44px" height="44px" />
        </Box>
      ) : Platform === "Leetcode" ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LeetCode width="44px" height="44px" />
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <GFG width="44px" height="44px" />
        </Box>
      )}
    </Box>
  );
};

export default PlatformLogo;
