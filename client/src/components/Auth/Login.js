import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import GoogleAuth from "./GoogleAuth";
import ALogo from "../icons/ALogo";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../../constants/endpoints";
import LoaderDialog from "./LoaderDialog";

const Login = () => {
  const {
    isAuthenticated,
    account,
    problems,
    setProblems,
    problemNotes,
    setProblemNotes,
  } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      //fetching all the problems
      axios({
        method: "GET",
        url: endpoints.getProblems,
      }).then((response) => {
        setProblems(response.data);
      });

      axios({
        method: "POST",
        url: endpoints.getNote,
        data: {
          user_id: account.id,
        },
      }).then((response) => {
        setProblemNotes(response.data.data);
      });

      //if user authenticated then navigate to dashboard directly
      setLoading(false);
      navigate("/");
    }
  }, [isAuthenticated, problems, problemNotes]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        component="img"
        src="SideImage.jpeg" // Update this path to your PNG file
        sx={{
          width: "30%",
          height: "100%",
        }}
      />
      <Box
        sx={{
          width: "70%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "40%", mb: 5 }}>
          <ALogo width="70px" height="70px" />
          <Box sx={{ width: "100%", mt: 5, mb: 5 }}>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "48px",
                fontWeight: "600",
                lineHeight: "60.0px",
                letterSpacing: " -0.5px",
                color: "rgba(0, 0, 0, 0.72)",
                mb: 3,
              }}
            >
              Sign Up to get Started
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "20px",
                lineHeight: "32px",
                fontWeight: "400",
                letterSpacing: "-0px",
                color: "rgba(0, 0, 0, 0.72)",
              }}
            >
              Stay ahead in your coding journey through access to a repository
              of coding questions from various platforms.
            </Typography>
          </Box>
          <GoogleAuth setLoading={setLoading} />
        </Box>
      </Box>
      <LoaderDialog open={loading} />
    </Box>
  );
};

export default Login;
