import {
  Box,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Tag from "./Tag";
import PlatformLogo from "./PlatformLogo";
import Level from "./Level";
import { endpoints } from "../../../constants/endpoints";
import { DataContext } from "../../../context/DataProvider";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import axios from "axios";
import Tick from "../../icons/Tick";
import AddNoteDialog from "./AddNoteDialog";
import EditProblemDialog from "./EditProblemDialog";
import StarIcon from "../../icons/StarIcon";

const TableRow = ({ last, problem, note }) => {
  const { account, adminView, userProblems, tags, setUserProblems } =
    useContext(DataContext);
  const [toggleNote, setToggleNote] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    id,
    problem_desc,
    problem_url,
    problem_tags,
    platform,
    problem_level,
  } = problem;
  const [isCompleted, setIsCompleted] = useState(() => {
    const foundProblem =
      userProblems &&
      userProblems.find((userProblem) => userProblem.problem_id === problem.id);
    return foundProblem ? foundProblem.status : false;
  });
  const [isStared, setIsStared] = useState(() => {
    const foundProblem =
      userProblems &&
      userProblems.find((userProblem) => userProblem.problem_id === problem.id);
    return foundProblem ? foundProblem.stared : false;
  });

  const isSmallScreen = useMediaQuery("(max-width:1280px)");

  const updateStatus = async () => {
    setLoading(true);
    axios({
      method: "PUT",
      url: endpoints.markCompleted,
      data: {
        user_id: account.id,
        problem_id: id,
      },
    }).then((response) => {
      const data = response.data.userProblem;
      setUserProblems((prevUserProblems) => {
        const problemExists = prevUserProblems.some(
          (userProblem) => userProblem.problem_id === data.problem_id
        );

        if (problemExists) {
          return prevUserProblems.map((userProblem) =>
            userProblem.problem_id === data.problem_id ? data : userProblem
          );
        } else {
          return [...prevUserProblems, data];
        }
      });
      setLoading(false);
      setIsCompleted(data && data.status);
    });
  };

  const updateStaredStatus = async () => {
    axios({
      method: "PUT",
      url: endpoints.markStared,
      data: {
        user_id: account.id,
        problem_id: id,
      },
    }).then((response) => {
      const data = response.data.userProblem;
      setIsStared(!isStared);
      setUserProblems((prevUserProblems) => {
        const problemExists = prevUserProblems.some(
          (userProblem) => userProblem.problem_id === data.problem_id
        );

        if (problemExists) {
          return prevUserProblems.map((userProblem) =>
            userProblem.problem_id === data.problem_id ? data : userProblem
          );
        } else {
          return [...prevUserProblems, data];
        }
      });
      setIsStared(data && data.stared);
    });
  };

  useEffect(() => {
    setIsCompleted(() => {
      const foundProblem =
        userProblems &&
        userProblems.find(
          (userProblem) => userProblem.problem_id === problem.id
        );
      return foundProblem ? foundProblem.status : false;
    });
  }, [account]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: last ? "none" : "2px solid rgba(221, 228, 252, 1)",
          paddingX: 2,
          paddingY: 3,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PlatformLogo Platform={platform} width="44px" height="44px" />
            <Tooltip
              title={
                (isSmallScreen && problem_desc.length > 25) ||
                problem_desc.length >= 40
                  ? problem_desc
                  : ""
              }
            >
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.87)",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32.0px",
                  letterSpacing: "0px",
                  textOverflow: "ellipsis",
                }}
              >
                {truncateText(problem_desc, isSmallScreen ? 25 : 40)}
              </Typography>
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: isSmallScreen ? "16px" : "24px",
            }}
          >
            {!adminView && (
              <>
                <Typography
                  sx={{
                    color: "rgba(71, 100, 234, 1)",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20.0px",
                    letterSpacing: "0px",
                    width: "130px",
                    height: "40px",
                    "&:hover": {
                      background: "#F5F7FF",
                      borderRadius: "4px",
                      cursor: "pointer",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={updateStatus}
                >
                  {loading ? (
                    <CircularProgress size={"20px"} sx={{ px: "30px" }} />
                  ) : !isCompleted ? (
                    "Mark as Completed"
                  ) : (
                    <>
                      <Tick width="20px" height="20px" /> Completed
                    </>
                  )}
                </Typography>
                <Box
                  sx={{ p: "8px", "&:hover": { cursor: "pointer" } }}
                  onClick={updateStaredStatus}
                >
                  <StarIcon
                    width="23px"
                    height="23px"
                    fill={isStared ? "#415DDD" : ""}
                  />
                </Box>
              </>
            )}
            {adminView ? (
              <Button
                sx={{
                  paddingLeft: 2,
                  paddingY: 1.5,
                  height: "40px",
                  background: "rgba(65, 93, 221, 1)",
                  "&:hover": {
                    background: "#1E3DCE",
                  },
                  color: "#fff",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                  borderRadius: "4px",
                  textTransform: "none",
                  lineHeight: "16px",
                }}
                onClick={() => setToggleEdit(true)}
              >
                Edit Problem
              </Button>
            ) : (
              <Button
                component="a"
                href={problem_url}
                target="_blank"
                sx={{
                  paddingX: 2,
                  paddingY: 1.5,
                  height: "40px",
                  background: "rgba(65, 93, 221, 1)",
                  "&:hover": {
                    background: "#1E3DCE",
                  },
                  color: "#fff",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                  borderRadius: "4px",
                  textTransform: "none",
                  lineHeight: "16px",
                }}
              >
                Solve Problem
              </Button>
            )}
            {!adminView && (
              <Tooltip title="Add notes for future">
                <StickyNote2OutlinedIcon
                  sx={{
                    paddingX: 2,
                    paddingY: 1.5,
                    fontSize: "28px",
                    fill: "rgba(65, 93, 221, 1)",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => {
                    setToggleNote(!toggleNote);
                  }}
                />
              </Tooltip>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Level level={problem_level} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              overflowX: "scroll",
              "&::-webkit-scrollbar": {
                height: "6px",
                width: "20px",
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
            {problem_tags &&
              problem_tags.map((tag, index) => (
                <Tag
                  key={index}
                  tag={tag}
                  isChecked={tags.indexOf(tag) !== -1}
                />
              ))}
          </Box>
        </Box>
      </Box>
      <AddNoteDialog
        toggleNote={toggleNote}
        setToggleNote={setToggleNote}
        problemId={id}
        note={note}
      />
      <EditProblemDialog
        toggleEdit={toggleEdit}
        setToggleEdit={setToggleEdit}
        problem={problem}
      />
    </>
  );
};

export default TableRow;
