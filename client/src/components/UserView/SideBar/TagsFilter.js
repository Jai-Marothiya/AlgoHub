import styled from "@emotion/styled";
import { Box, Checkbox, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../../../context/DataProvider";
import { ProblemStatus, ProblemTags } from "../../../constants/Constants";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: 16, // Adjust the size of the checkbox icon
  },
  "& .MuiCheckbox-root": {
    borderRadius: 2, // Adjust border radius
    width: 16, // Set width
    height: 16, // Set height
  },
}));

const TagsFilter = () => {
  const { tags, setTags } = useContext(DataContext);
  const handleOnClick = (value) => {
    const index = tags.indexOf(value);
    if (index !== -1) {
      // remove form solved
      let updatedTags = [...tags];
      if (index > -1) {
        updatedTags.splice(index, 1);
        setTags(updatedTags);
      }
    } else {
      //push in solved array
      setTags([...tags, value]);
    }
  };

  const TagsComponents = Object.keys(ProblemTags).map((key) => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          pl: "12px",
          height: "22px",
          pb: "8px",
        }}
      >
        <CustomCheckbox
          checked={tags.indexOf(ProblemTags[key]) !== -1}
          onClick={() => handleOnClick(ProblemTags[key])}
        />
        <Typography
          sx={{
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "22.0px",
          }}
        >
          {ProblemTags[key]}
        </Typography>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        width: "100%",
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
        Topics
      </Typography>
      <Box
        sx={{
          maxHeight: "300px",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        }}
      >
        {TagsComponents}
      </Box>
    </Box>
  );
};

export default TagsFilter;
