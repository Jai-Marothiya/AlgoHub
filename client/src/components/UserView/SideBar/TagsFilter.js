import styled from "@emotion/styled";
import { Box, Checkbox, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { ProblemTags } from "../../../constants/Constants";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: 16, // Adjust the size of the checkbox icon
  },
  "& .MuiCheckbox-root": {
    borderRadius: 2, // Adjust border radius
    width: 16, // Set width
    height: 16, // Set height
  },
  "& .MuiButtonBase-root": {
    padding: 0, // Ensure the padding of the root element is set to 0
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
          alignItems: "flex-start",
          pl: "12px",
          height: "fit-content",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => handleOnClick(ProblemTags[key])}
      >
        <CustomCheckbox checked={tags.indexOf(ProblemTags[key]) !== -1} />
        <Typography
          sx={{
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "16.0px",
            pt: "9px",
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
          pb: "8px",
        }}
      >
        Topics
      </Typography>
      <Box
        sx={{
          maxHeight: "230px",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: { xs: 0, md: "6px" },
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
        {TagsComponents}
      </Box>
    </Box>
  );
};

export default TagsFilter;
