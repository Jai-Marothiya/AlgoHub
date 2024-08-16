import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import GoogleAuth from "./GoogleAuth";
import ALogo from "../icons/ALogo";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../../constants/endpoints";
import LoaderDialog from "./LoaderDialog";
import LoadingSkeleton from "./LoadingSkeleton";
import Logo from "../icons/Logo";

const Login = ({ loading, setLoading, refreshLoading, setRefreshLoading }) => {
  const {
    isAuthenticated,
    account,
    problems,
    setProblems,
    userProblems,
    setUserProblems,
  } = useContext(DataContext);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

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

      //if user authenticated then navigate to dashboard directly
    }
  }, [isAuthenticated, problems]);

  useEffect(() => {
    if (isAuthenticated) {
      //fetching all the problems
      axios({
        method: "POST",
        url: endpoints.getUserProblems,
        data: {
          user_id: account.id,
        },
      }).then((response) => {
        setUserProblems(response.data.userProblems);
        navigate("/");
        setRefreshLoading(false);
      });

      //if user authenticated then navigate to dashboard directly
    }
  }, [isAuthenticated, userProblems]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "100vh", sm: "100%" },
        width: "100%",
        flexDirection: { xs: "column", sm: "row" }, // Stack column on small screens, row on larger screens
        overflow: "hidden", // Ensures no overflow issues on smaller screens
      }}
    >
      {!refreshLoading ? (
        <>
          <Box
            component="img"
            src="SideImage.jpeg" // Update this path to your PNG file
            sx={{
              width: { xs: "100%", sm: "30%" },
              height: { xs: "30vh", sm: "100%" },
              objectFit: "cover",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            sx={{
              width: { xs: "100%", sm: "70%" },
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: {
                xs: "linear-gradient(to bottom right, rgba(179, 203, 232, 0.25), rgba(156, 161, 186, 0.25))",
                sm: "none",
              },
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "70%", lg: "50%", xlg: "40%" },
                height: { xs: "100%", sm: "fit-content" },
                background: { xs: "rgba(255, 255, 255, 0.4)", sm: "none" },
                borderRadius: 2,
                p: { xs: "0 24px", sm: "0 36px", md: 0 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Box
                sx={{
                  position: { xs: "absolute", sm: "relative" },
                  top: { xs: "16px", sm: "0" },
                }}
              >
                {isLargeScreen ? (
                  <ALogo width="70px" height="70px" />
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      pb: 2,
                      width: "100vw",
                      mx: "-24px",

                      borderBottom: "2px solid rgba(0, 0, 0, 0.28)",
                    }}
                  >
                    <Logo pl="24px" />
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: { xs: "32px", sm: "40px", md: "48px" }, // Responsive font size
                    fontWeight: "600",
                    lineHeight: { xs: "40px", sm: "50px", md: "60px" }, // Responsive line height
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
                    fontSize: { xs: "16px", sm: "18px", md: "20px" }, // Responsive font size
                    lineHeight: "32px",
                    fontWeight: "400",
                    letterSpacing: "-0px",
                    color: "rgba(0, 0, 0, 0.72)",
                  }}
                >
                  Stay ahead in your coding journey through access to a
                  repository of coding questions from various platforms.
                </Typography>
              </Box>
              <GoogleAuth loading={loading} setLoading={setLoading} />
            </Box>
          </Box>
        </>
      ) : (
        <LoadingSkeleton />
      )}
    </Box>
  );
};

export default Login;
