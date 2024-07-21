import styled from "@emotion/styled";
import { Box, Checkbox, Typography } from "@mui/material";
import React, { useContext } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { DataContext } from "../../../context/DataProvider";
import { ProblemLevel } from "../../../constants/Constants";

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

const DifficultyFilter = () => {
  const { difficulty, setDifficulty } = useContext(DataContext);
  const handleOnClick = (value) => {
    const index = difficulty.indexOf(value);
    if (index !== -1) {
      // remove form solved
      let updatedDifficulty = [...difficulty];
      if (index > -1) {
        updatedDifficulty.splice(index, 1);
        setDifficulty(updatedDifficulty);
      }
    } else {
      //push in solved array
      setDifficulty([...difficulty, value]);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
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
        Difficulty Level
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          pl: "12px",
          height: "22px",
          pb: 1,
        }}
      >
        <CustomCheckbox
          checked={difficulty.indexOf(ProblemLevel.EASY) !== -1}
          onClick={() => handleOnClick(ProblemLevel.EASY)}
        />
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "22.0px",
            pl: "8px",
          }}
        >
          <FiberManualRecordIcon
            sx={{ fill: "#20A015", width: "8px", height: "8px", pr: "12px" }}
          />
          {ProblemLevel.EASY}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          pl: "12px",
          pb: 1,
          height: "22px",
        }}
      >
        <CustomCheckbox
          checked={difficulty.indexOf(ProblemLevel.MEDIUM) !== -1}
          onClick={() => handleOnClick(ProblemLevel.MEDIUM)}
        />
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "22.0px",
            pl: "8px",
          }}
        >
          <FiberManualRecordIcon
            sx={{ fill: "#FFAC60", width: "8px", height: "8px", pr: "12px" }}
          />
          {ProblemLevel.MEDIUM}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          pl: "12px",
          pb: 1,
          height: "22px",
        }}
      >
        <CustomCheckbox
          checked={difficulty.indexOf(ProblemLevel.HARD) !== -1}
          onClick={() => handleOnClick(ProblemLevel.HARD)}
        />
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "22.0px",
            pl: "8px",
          }}
        >
          <FiberManualRecordIcon
            sx={{ fill: "#FF3E3E", width: "8px", height: "8px", pr: "12px" }}
          />
          {ProblemLevel.HARD}
        </Typography>
      </Box>
    </Box>
  );
};

export default DifficultyFilter;
