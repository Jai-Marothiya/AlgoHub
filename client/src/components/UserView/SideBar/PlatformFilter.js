import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import PlatFormTags from "../PlatFormTags";
import { DataContext } from "../../../context/DataProvider";
import { ProblemPlatforms } from "../../../constants/Constants";

const PlatformFilter = () => {
  const { Platforms, setPlatforms } = useContext(DataContext);

  const handleAdd = (value) => {
    const index = Platforms.indexOf(value);
    if (index === -1) {
      //push in solved array
      setPlatforms([...Platforms, value]);
    }
  };

  const handleRemove = (value) => {
    const index = Platforms.indexOf(value);
    if (index !== -1) {
      // remove form solved
      let updatedDifficulty = [...Platforms];
      if (index > -1) {
        updatedDifficulty.splice(index, 1);
        setPlatforms(updatedDifficulty);
      }
    }
  };

  const PlatformComponents = Object.keys(ProblemPlatforms).map((key) => (
    <PlatFormTags
      Platform={ProblemPlatforms[key]}
      handleAdd={handleAdd}
      handleRemove={handleRemove}
    />
  ));

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "93%" },
        borderBottom: "1px solid #D9D9D9",
        py: 4.5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "rgba(0, 0, 0, 0.87)",
          fontFamily: "Jost, sans-serif",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "22.0px",
          letterSpacing: 0.25,
          pl: "16px",
          pb: "12px",
        }}
      >
        Platform
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", pl: "12px" }}>
        {PlatformComponents}
      </Box>
    </Box>
  );
};

export default PlatformFilter;
