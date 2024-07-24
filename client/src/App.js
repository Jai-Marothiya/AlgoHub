// src/App.js
import React, { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/Auth/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/UserView/Dashboard";
import { DataContext } from "./context/DataProvider";
import { getUsers } from "./utils/getUser";

const getToken = () => {
  const tokenString = localStorage.getItem("refreshToken");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

const App = () => {
  const { setAccount, isAuthenticated, setIsAuthenticated } =
    useContext(DataContext);

  const fetchData = async (token) => {
    await getUsers(token, setIsAuthenticated, setAccount);
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      fetchData(token);
    }
  }, []);

  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <Box
          sx={{
            width: "99vw",
            height: "100vh",
            "&::-webkit-scrollbar": {
              width: "6px",
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
          <Routes>
            <Route exact path="/auth" element={<Login />} />
            <Route
              path="/"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />
              }
            />
          </Routes>
        </Box>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;
