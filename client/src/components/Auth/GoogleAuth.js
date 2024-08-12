import { Box, CircularProgress, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useContext } from "react";
import axios from "axios";
import GoogleIcon from "../icons/GoogleIcon";
import { DataContext } from "../../context/DataProvider";
import { Navigate } from "react-router-dom";
import { endpoints } from "../../constants/endpoints";

const GoogleAuth = ({ loading, setLoading }) => {
  const { setAccount, setIsAuthenticated } = useContext(DataContext);
  const responseSuccessGoogle = async (token_id) => {
    let userInfo = await axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${token_id}` },
      })
      .then((res) => res.data);
    if (userInfo && userInfo.email) {
      setLoading(true);
    }
    axios({
      method: "POST",
      url: endpoints.googleLogin,
      data: {
        token_id: token_id,
        name: userInfo.name,
        email: userInfo.email,
        photo: userInfo.picture,
      },
    }).then((response) => {
      setAccount(response.data.user);
      setIsAuthenticated(true);
      <Navigate to="/" />;
      localStorage.setItem("refreshToken", JSON.stringify(response.data.token));
    });
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      responseSuccessGoogle(codeResponse.access_token);
    },
    onError: (error) => console.log("Login Failed:", error.message),
  });

  return (
    <Box sx={{ width: "fit-content" }}>
      {loading ? (
        <Box
          sx={{
            mr: 2,
            width: "518px",

            border: "0.5px solid rgba(0, 0, 0, 0.34)",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              px: 4,
              py: 3,
              display: "flex",
              "&:hover": {
                cursor: "not-allowed",
              },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CircularProgress size={24} />
            <Typography
              sx={{
                width: "90%",
                textAlign: "center",
                fontFamily: "Jost, sans-serif",
                fontSize: "25px",
                fontWeight: "400",
                lineHeight: "32.0px",
                letterSpacing: " 1px",
                color: "rgba(0, 0, 0, 0.54)",
                WebkitFontSmoothing: "antialiased", // Smooths font on Webkit browsers (Chrome, Safari)
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              Continue with Google
            </Typography>
          </Box>
        </Box>
      ) : (
        <GoogleIcon login={login} width="100%" />
      )}
    </Box>
  );
};

export default GoogleAuth;
