import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import ProblemUploadForm from "./ProblemUploadForm";
import ProgressBar from "./ProgressBar";

const TopView = () => {
  const { adminView, account, problems } = useContext(DataContext);

  const completedProblems = problems.filter((problem) =>
    account.problems_completed.includes(problem.id)
  );

  const [count, setCount] = useState({ easy: 0, medium: 0, hard: 0 });

  useEffect(() => {
    // Count the number of problems for each level
    const { easy, medium, hard } = completedProblems.reduce(
      (acc, problem) => {
        if (problem.problem_level === "Easy") acc.easy += 1;
        else if (problem.problem_level === "Medium") acc.medium += 1;
        else if (problem.problem_level === "Hard") acc.hard += 1;
        return acc;
      },
      { easy: 0, medium: 0, hard: 0 }
    );

    setCount({ easy, medium, hard });
  }, [account, problems]);

  return (
    <Box sx={{ maxWidth: "100%" }}>
      {adminView ? (
        <Box
          sx={{
            maxWidth: "96%",
            minWidth: "1280",
            display: "flex",
            marginX: "auto",
          }}
        >
          <Box sx={{ paddingY: 11, paddingX: 6, width: "100%" }}>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "36px",
                fontWeight: "600",
                lineHeight: "52.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.87)",
                mb: 4,
              }}
            >
              Add questions, enhance AlgoHub
            </Typography>
            <ProblemUploadForm />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            maxWidth: "96%",
            minWidth: "1280",
            display: "flex",
            marginX: "auto",
          }}
        >
          <Box sx={{ paddingY: 11, paddingX: 3, width: "90%" }}>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "36px",
                fontWeight: "600",
                lineHeight: "52.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.87)",
                mb: 4,
              }}
            >
              Unlock Your Coding Potential with Curated Questions
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "27.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.72)",
                maxWidth: "55%",
              }}
            >
              Unlock your coding potential with top challenges from various
              platforms. Track your progress, embrace challenges, and push your
              limits. Your hard work will pay off.
            </Typography>
          </Box>
          <ProgressBar
            total={problems && problems.length}
            easy={count.easy}
            medium={count.medium}
            hard={count.hard}
            height="200px"
            width="380px"
          />
        </Box>
      )}
    </Box>
  );
};

export default TopView;
