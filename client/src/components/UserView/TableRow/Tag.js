import { Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../../../context/DataProvider";

const Tag = ({ tag, isChecked }) => {
  const { tags, setTags } = useContext(DataContext);

  const handleAdd = (value) => {
    const index = tags.indexOf(value);
    if (index === -1) {
      //push in solved array
      setTags([...tags, value]);
    }
  };

  const handleRemove = (value) => {
    const index = tags.indexOf(value);
    if (index !== -1) {
      // remove form solved
      let updatedDifficulty = [...tags];
      if (index > -1) {
        updatedDifficulty.splice(index, 1);
        setTags(updatedDifficulty);
      }
    }
  };

  return (
    <Box
      sx={{
        border: isChecked
          ? "1px solid #7491FF"
          : "1px solid rgba(240, 243, 254, 1)",
        borderRadius: 4,
        background: isChecked ? "#EFF2FF" : "#fff",
        paddingY: "5px",
        paddingX: 2,
        mr: "10px",
        "&:hover": {
          border: isChecked ? "1px solid #7491FF" : "1px solid #b7c6ff",
          cursor: "pointer",
        },
      }}
      onClick={() => (isChecked ? handleRemove(tag) : handleAdd(tag))}
    >
      <Typography
        sx={{
          color: "rgba(37, 42, 131, 1)",
          fontFamily: "Jost, sans-serif",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "18.0px",
          letterSpacing: "0px",
          width: "max-content",
        }}
      >
        {tag}
      </Typography>
    </Box>
  );
};

export default Tag;
