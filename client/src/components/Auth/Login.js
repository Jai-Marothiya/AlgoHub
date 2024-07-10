import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import GoogleAuth from "./GoogleAuth";
import ALogo from "../icons/ALogo";
import { DataContext } from "../../context/DataProvider";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
// import {SideImage} from "../icons/"

const Login = () => {
  const { isAuthenticated, setProblems } = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      //fetching all the problems
      axios({
        method: "GET",
        url: "http://localhost:5000/get-problems",
      }).then((response) => {
        console.log("Fetched Problems successfully: ", response);
        setProblems(response.data);
      });

      //if user authenticated then navigate to dashboard directly
      navigate("/");
    }
  }, [isAuthenticated]);
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
        src="SideImage.png" // Update this path to your PNG file
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
                fontFamily: "Roboto, sans-serif",
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
                fontFamily: "Roboto, sans-serif",
                fontSize: "20px",
                lineHeight: "32px",
                fontWeight: "100",
                letterSpacing: "-0px",
                color: "rgba(0, 0, 0, 0.72)",
              }}
            >
              Stay ahead in your coding journey through access to a repository
              of coding questions from various platforms.
            </Typography>
          </Box>
          <GoogleAuth />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
