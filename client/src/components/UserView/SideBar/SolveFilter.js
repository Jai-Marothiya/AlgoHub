import styled from "@emotion/styled";
import { Box, Checkbox, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { ProblemStatus } from "../../../constants/Constants";

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

const SolveFilter = () => {
  const { solved, setSolved } = useContext(DataContext);
  const handleOnClick = (value) => {
    const index = solved.indexOf(value);
    if (index !== -1) {
      // remove form solved
      let updatedSolve = [...solved];
      if (index > -1) {
        updatedSolve.splice(index, 1);
        setSolved(updatedSolve);
      }
    } else {
      //push in solved array
      setSolved([...solved, value]);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "1px solid #D9D9D9",
        pb: 4.5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          pl: "12px",
          pb: 1,
          height: "22px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => handleOnClick(ProblemStatus.SOLVED)}
      >
        <CustomCheckbox checked={solved.indexOf(ProblemStatus.SOLVED) !== -1} />
        <Typography
          sx={{
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "22.0px",
          }}
        >
          Solved
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          pl: "12px",
          height: "22px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => handleOnClick(ProblemStatus.UNSOLVED)}
      >
        <CustomCheckbox
          checked={solved.indexOf(ProblemStatus.UNSOLVED) !== -1}
        />
        <Typography
          sx={{
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "22.0px",
          }}
        >
          Unsolved
        </Typography>
      </Box>
    </Box>
  );
};

export default SolveFilter;
