import { Box, Button, Tooltip, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Tag from "./Tag";
import PlatformLogo from "./PlatformLogo";
import Level from "./Level";
import { capitalizeFirstLetter } from "../../../utils/utils";
import { endpoints } from "../../../constants/endpoints";
import { DataContext } from "../../../context/DataProvider";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import axios from "axios";
import Tick from "../../icons/Tick";
import AddNoteDialog from "./AddNoteDialog";
import EditProblemDialog from "./EditProblemDialog";

const TableRow = ({ last, problem }) => {
  const { account, setAccount, adminView } = useContext(DataContext);
  const [toggleNote, setToggleNote] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [note, setNote] = useState("");
  const {
    id,
    problem_desc,
    problem_url,
    problem_tags,
    platform,
    problem_level,
  } = problem;
  const [isCompleted, setIsCompleted] = useState(
    account.problems_completed.indexOf(id)
  );

  const problemTagsArray =
    problem_tags && problem_tags.map((tag) => capitalizeFirstLetter(tag));

  const updateStatus = async () => {
    axios({
      method: "PUT",
      url: endpoints.markCompleted,
      data: {
        user_id: account.id,
        problem_id: id,
      },
    }).then((response) => {
      setAccount(response.data.user);
    });
  };

  const getNote = async () => {
    if (!account || !account.id || !id) return;
    axios({
      method: "POST",
      url: endpoints.getNote,
      data: {
        user_id: account.id,
        problem_id: id,
      },
    }).then((response) => {
      setNote(response.data.data);
    });
  };

  useEffect(() => {
    setIsCompleted(account.problems_completed.indexOf(id));
    getNote();
  }, [account, toggleNote]);

  return (
    <>
      <Box
        sx={{
          borderBottom: last ? "none" : "2px solid rgba(221, 228, 252, 1)",
          paddingX: 2,
          paddingY: 3,
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
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.87)",
                fontFamily: "Jost, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "32.0px",
                letterSpacing: "0px",
              }}
            >
              {problem_desc}
            </Typography>
          </Box>
          <Box sx={{ mt: "12px", display: "flex", alignItems: "center" }}>
            {!adminView && (
              <Typography
                sx={{
                  color: "rgba(71, 100, 234, 1)",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "34.0px",
                  letterSpacing: "0px",
                  mr: 2,
                  "&:hover": {
                    background: "#F5F7FF",
                    borderRadius: "4px",
                    cursor: "pointer",
                  },
                  display: "flex",
                  alignItems: "center",
                  paddingX: 2,
                  paddingY: 1.2,
                }}
                onClick={updateStatus}
              >
                {isCompleted === -1 ? (
                  "Mark as Completed"
                ) : (
                  <>
                    <Tick width="20px" height="20px" /> Completed
                  </>
                )}
              </Typography>
            )}
            {adminView ? (
              <Button
                sx={{
                  paddingX: 2,
                  paddingY: 1.5,
                  mr: 2,
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
                  mr: 2,
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
            {problemTagsArray &&
              problemTagsArray.map((tag, index) => (
                <Tag key={index} tag={tag} />
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