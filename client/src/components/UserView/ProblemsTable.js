import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { Box, Typography } from "@mui/material";
import TableRow from "./TableRow/TableRow";
import {
  ProblemLevel,
  ProblemPlatforms,
  ProblemStatus,
  ProblemTags,
} from "../../constants/Constants";

const ProblemsTable = () => {
  const { problems, solved, difficulty, Platforms, tags, account } =
    useContext(DataContext);
  const [filteredProblems, setFilteredProblems] = useState(problems);

  const filterProblem = (problem) => {
    let response = true;
    //Solve-Unsolved filter
    if (solved.length === 1) {
      const problemDone =
        account &&
        account.problems_completed &&
        account.problems_completed.indexOf(problem.id) !== -1;
      response &=
        solved[0] === ProblemStatus.SOLVED ? problemDone : !problemDone;
    }

    //Difficulty filter
    if (
      difficulty.length >= 1 &&
      difficulty.length < Object.keys(ProblemLevel).length
    ) {
      let desiredDifficulty = false;
      difficulty.map((level) => {
        desiredDifficulty |= problem.problem_level === level;
      });
      response &= desiredDifficulty;
    }

    //Platform filter
    if (
      Platforms.length >= 1 &&
      Platforms.length < Object.keys(ProblemPlatforms).length
    ) {
      let desiredPlatform = false;
      Platforms.map((platform) => {
        desiredPlatform |= problem.platform === platform;
      });
      response &= desiredPlatform;
    }

    //Topics filter
    if (tags.length >= 1 && tags.length < Object.keys(ProblemTags).length) {
      let desiredTags = false;
      tags.map((tag) => {
        desiredTags |= problem.problem_tags.indexOf(tag) !== -1;
      });
      response &= desiredTags;
    }

    return response;
  };

  useEffect(() => {
    const filtered =
      problems.length > 0 &&
      problems.filter((problem) => filterProblem(problem));
    setFilteredProblems(filtered);
  }, [problems, solved, difficulty, Platforms, tags, account]);

  return (
    <Box
      sx={{
        maxWidth: "96%",
        minWidth: "1280",
        height: "fit-content",
        width: "76%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: 2,
      }}
    >
      <Box sx={{ px: 3 }}>
        {problems &&
          problems.map((problem, index) =>
            filterProblem(problem) ? (
              <TableRow
                problem={problem}
                last={index + 1 === problems.length}
              />
            ) : (
              <></>
            )
          )}
        {filteredProblems.length === 0 && (
          <Box
            sx={{
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>No such problem on AlgoHub</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProblemsTable;
