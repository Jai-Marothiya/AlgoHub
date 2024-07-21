import React, { useContext } from "react";
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Typography,
  OutlinedInput,
  Chip,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import {
  ProblemLevel,
  ProblemPlatforms,
  ProblemTags,
} from "../../../constants/Constants";
import PlatformLogo from "../TableRow/PlatformLogo";
import { DataContext } from "../../../context/DataProvider";
import axios from "axios";
import { endpoints } from "../../../constants/endpoints";

const EditProblemForm = ({
  setToggleEdit,
  problem,
  setOpenSnackbar,
  setSnackbarMessage,
}) => {
  const {
    id,
    problem_desc,
    problem_url,
    problem_tags,
    platform,
    problem_level,
  } = problem;
  const [platformSelected, setPlatformSelected] = React.useState(platform);
  const [problemWritten, setProblemWritten] = React.useState(problem_desc);
  const [problemLink, setProblemLink] = React.useState(problem_url);
  const [problemTagsSelected, setProblemTagsSelected] =
    React.useState(problem_tags);
  const [problemDifficulty, setProblemDifficulty] =
    React.useState(problem_level);
  const { account, problems, setProblems } = useContext(DataContext);

  const handleTopicsChange = (event) => {
    const {
      target: { value },
    } = event;
    setProblemTagsSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const EditProblem = () => {
    if (
      problemWritten === problem_desc &&
      problemLink === problem_url &&
      problemTagsSelected === problem_tags &&
      platformSelected === platform &&
      problemDifficulty === problem_level
    ) {
      setSnackbarMessage("No edits found!");
      setOpenSnackbar(true);
      setToggleEdit(false);
      return;
    }
    axios({
      method: "PUT",
      url: endpoints.updateProblem,
      data: {
        id: id,
        problem_desc: problemWritten,
        problem_url: problemLink,
        problem_tags: problemTagsSelected,
        platform: platformSelected,
        problem_level: problemDifficulty,
        uploaded_by: account.id,
      },
    }).then((response) => {
      console.log("Status Updated Successfully: ", response.data);
      setSnackbarMessage("Problem Updated Successfully");
      setOpenSnackbar(true);
      setToggleEdit(false);
      setProblemDifficulty("");
      setProblemLink("");
      setProblemTagsSelected([]);
      setProblemWritten("");
      setPlatformSelected("");

      setProblems((prevProblems) =>
        prevProblems.map((problem) =>
          problem.id !== id ? problem : response.data.updatedProblem
        )
      );
      console.log("response.data.newProblem: ", response.data.updatedProblem);
      console.log("updated one:  ", [
        ...problems,
        response.data.updatedProblem,
      ]);
    });
  };

  const handleDiscard = () => {
    setSnackbarMessage("Changes discarded");
    setOpenSnackbar(true);
    setToggleEdit(false);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: 2,
        maxWidth: "780px",
        width: "760px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            pb: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "18.0px",
              letterSpacing: " 0.5px",
              color: "rgba(0, 0, 0, 0.54)",
            }}
          >
            Question
          </Typography>
          <TextField
            value={problemWritten}
            onChange={(e) => setProblemWritten(e.target.value)}
            border="none"
            sx={{ borderRadius: 0, maxWidth: "760px" }}
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-input": {
                  whiteSpace: "pre-wrap",
                  overflowY: "auto",
                  p: "8px 12px",
                },
                "&.MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)", // Default border color
                  },
                  "&:hover fieldset": {
                    border: "none",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)", // Disable hover effect
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)", // Disable focus effect
                  },
                },
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, pb: 3, width: "100%" }}>
          <Box sx={{ maxWidth: "260px", width: "100%", mr: 5 }}>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "18.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.54)",
                pb: "4px",
              }}
            >
              Platform
            </Typography>
            <FormControl
              variant="standard"
              sx={{ minWidth: 120, width: "100%" }}
            >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                defaultValue={""}
                value={platformSelected}
                onChange={(e) => setPlatformSelected(e.target.value)}
                label="Platform"
                sx={{
                  py: "4px",
                  pl: "12px",
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                  },
                  "&:before": {
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  },
                  "&:after": {
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  },
                  "&.Mui-focused:before": {
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                {Object.keys(ProblemPlatforms).map((key) => (
                  <MenuItem
                    value={ProblemPlatforms[key]}
                    sx={{ display: "flex" }}
                  >
                    <PlatformLogo
                      width="20px"
                      height="20px"
                      Platform={ProblemPlatforms[key]}
                    />
                    {ProblemPlatforms[key]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "100%",
              maxWidth: "450px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "18.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.54)",
                pb: "4px",
              }}
            >
              Link
            </Typography>
            <TextField
              value={problemLink}
              onChange={(e) => setProblemLink(e.target.value)}
              border="none"
              sx={{ borderRadius: 0 }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-input": {
                    whiteSpace: "pre-wrap",
                    overflowY: "auto",
                    p: "8px 12px",
                  },
                  "&.MuiOutlinedInput-root": {
                    "& fieldset": {
                      p: "8px 12px",
                      border: "none",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.08)", // Default border color
                    },
                    "&:hover fieldset": {
                      p: "8px 12px",
                      border: "none",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.08)", // Disable hover effect
                    },
                    "&.Mui-focused fieldset": {
                      p: "8px 12px",
                      border: "none",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.08)", // Disable focus effect
                    },
                  },
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ maxWidth: "260px", width: "100%", mr: 5 }}>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "18.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.54)",
                mb: "8px",
              }}
            >
              Difficulty
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                py: "8px",
              }}
            >
              {Object.keys(ProblemLevel).map((key) => (
                <Box
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                    borderRadius: 4,
                    background:
                      problemDifficulty &&
                      problemDifficulty === ProblemLevel[key]
                        ? ProblemLevel[key] === ProblemLevel.EASY
                          ? "rgb(64,170,0,0.13)"
                          : ProblemLevel[key] === ProblemLevel.MEDIUM
                          ? "rgb(255,172,96,0.13)"
                          : "rgb(255,63,63,0.13)"
                        : "#fff",
                    paddingY: "4px",
                    paddingX: "16px",
                    mr: "10px",
                    mb: "12px",
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                  }}
                  onClick={() => setProblemDifficulty(ProblemLevel[key])}
                >
                  <Typography
                    sx={{
                      color:
                        ProblemLevel[key] === ProblemLevel.EASY
                          ? "#128208"
                          : ProblemLevel[key] === ProblemLevel.MEDIUM
                          ? "#ED7404"
                          : "#D21111",
                      fontFamily: "Jost, sans-serif",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "14.0px",
                      letterSpacing: "0px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {problemDifficulty === ProblemLevel[key] && (
                      <CheckIcon
                        fill={
                          ProblemLevel[key] === ProblemLevel.EASY
                            ? "#128208"
                            : ProblemLevel[key] === ProblemLevel.MEDIUM
                            ? "#ED7404"
                            : "#D21111"
                        }
                        fontSize="14px"
                      />
                    )}
                    {ProblemLevel[key]}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "100%",
              maxWidth: "450px",
              m: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "18.0px",
                letterSpacing: " 0.5px",
                color: "rgba(0, 0, 0, 0.54)",
                pb: "8px",
              }}
            >
              Topics
            </Typography>
            <FormControl sx={{ width: "100%" }}>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={problemTagsSelected}
                onChange={handleTopicsChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "nowrap",
                      gap: 0.5,
                      overflowX: "auto",
                      maxWidth: "100%",
                      width: "100%",
                      "&::-webkit-scrollbar": {
                        height: "6px",
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
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        sx={{
                          fontFamily: "Jost, sans-serif",
                          fontSize: "12px",
                          p: "8px 4px",
                          fontWeight: "400",
                          lineHeight: "14.0px",
                          letterSpacing: " 0.5px",
                          color: "#252A83",
                          background: "#F8FAFF",
                        }}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: "300px",
                      overflow: "auto",

                      "&::-webkit-scrollbar": {
                        width: "8px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0, 0, 0, 0.08)",
                        borderRadius: "10px",
                        height: "100px",
                      },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent",
                      },
                    },
                  },
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                }}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    pt: "8px",
                    pb: "12px",
                    pl: "12px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                {Object.keys(ProblemTags).map((key) => (
                  <MenuItem key={ProblemTags[key]} value={ProblemTags[key]}>
                    {ProblemTags[key]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 4,
        }}
      >
        <Box>
          <Button
            sx={{
              paddingX: 2,
              paddingY: 1.5,
              mr: "20px",
              "&:hover": {
                background: "#F5F7FF",
                borderRadius: "4px",
              },
              color: "#1E3DCE",
              fontFamily: "Jost, sans-serif",
              fontSize: "14px",
              lineHeight: "14px",
              fontWeight: "500",
              borderRadius: "4px",
              textTransform: "none",
            }}
            onClick={handleDiscard}
          >
            Discard
          </Button>
          <Button
            sx={{
              paddingX: 2,
              paddingY: 1.5,
              background: "rgba(65, 93, 221, 1)",
              "&:hover": {
                background: "#1E3DCE",
              },
              color: "#fff",
              fontFamily: "Jost, sans-serif",
              fontSize: "14px",
              lineHeight: "14px",
              fontWeight: "500",
              borderRadius: "4px",
              textTransform: "none",
            }}
            onClick={EditProblem}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProblemForm;
