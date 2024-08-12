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
import NoProblemFound from "../icons/NoProblemFound";

const ProblemsTable = () => {
  const {
    problems,
    solved,
    difficulty,
    Platforms,
    tags,
    account,
    userProblems,
  } = useContext(DataContext);
  const [filteredProblems, setFilteredProblems] = useState(problems);

  const filterProblem = (problem) => {
    let response = true;
    //Solve-Unsolved filter
    if (solved.length === 1) {
      const foundProblem =
        userProblems &&
        userProblems.find(
          (userProblem) => userProblem.problem_id === problem.id
        );
      const problemDone = foundProblem ? foundProblem.status : false;

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

  const getNoteForProblem = (problemId) => {
    const noteObject =
      userProblems &&
      userProblems.find((userProblem) => userProblem.problem_id === problemId);
    return noteObject ? noteObject.note : "";
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
        maxHeight: "950px",
        height: "100%",
        overflowY: "scroll",
        width: "76%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: 2,
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0, 0, 0, 0.18)",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: "10px",
        },
      }}
    >
      <Box sx={{ px: 3 }}>
        {problems &&
          problems.map((problem, index) =>
            filterProblem(problem) ? (
              <TableRow
                problem={problem}
                last={index + 1 === problems.length}
                note={getNoteForProblem(problem.id)}
              />
            ) : (
              <></>
            )
          )}
        {(problems.length === 0 || filteredProblems.length === 0) && (
          <Box
            sx={{
              maxWidth: "595px",
              width: "100%",
              mx: "auto",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              py: 7,
            }}
          >
            {problems.length !== 0 && (
              <NoProblemFound width="323px" height="240px" />
            )}
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "32px",
                fontWeight: "500",
                lineHeight: "44.0px",
                letterSpacing: "-0.8px",
                color: "rgba(0, 0, 0, 0.54)",
                pb: "8px",
                mt: 6,
              }}
            >
              {problems.length === 0 ? "Loading ..." : "No Problem Found"}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "28.0px",
                letterSpacing: "0",
                color: "rgba(0, 0, 0, 0.54)",
                textAlign: "center",
              }}
            >
              {problems.length !== 0 &&
                "Adjust your filters or explore different categories to find new challenges. Keep pushing your limits!"}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProblemsTable;
