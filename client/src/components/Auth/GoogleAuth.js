import { Box } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useContext } from "react";
import axios from "axios";
import GoogleIcon from "../icons/GoogleIcon";
import { DataContext } from "../../context/DataProvider";
import { Navigate } from "react-router-dom";

const GoogleAuth = () => {
  const { setAccount, setIsAuthenticated } = useContext(DataContext);
  const responseSuccessGoogle = async (token_id) => {
    let userInfo = await axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${token_id}` },
      })
      .then((res) => res.data);

    axios({
      method: "POST",
      url: "http://localhost:5000/google-login",
      data: {
        token_id: token_id,
        name: userInfo.name,
        email: userInfo.email,
      },
    }).then((response) => {
      console.log("Google Login success");
      setAccount(response.data.user);
      <Navigate to="/" />;
      setIsAuthenticated(true);
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
      <GoogleIcon login={login} width="100%" />
    </Box>
  );
};

export default GoogleAuth;
