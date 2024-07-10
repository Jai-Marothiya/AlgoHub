import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Box } from "@mui/material";
import TableRow from "./TableRow/TableRow";

const ProblemsTable = () => {
  const { problems } = useContext(DataContext);

  return (
    <Box
      sx={{
        maxWidth: "96%",
        minWidth: "1280",
        marginX: "auto",
        width: "100%",
      }}
    >
      {problems.map((problem) => (
        <TableRow problem={problem} />
      ))}
    </Box>
  );
};

export default ProblemsTable;
