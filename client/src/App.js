// src/App.js
import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/Auth/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/UserView/Dashboard";
import { DataContext } from "./context/DataProvider";
import { getUsers } from "./utils/getUser";
import LoaderDialog from "./components/Auth/LoaderDialog";

const getToken = () => {
  const tokenString = localStorage.getItem("refreshToken");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

const App = () => {
  const { setAccount, isAuthenticated, setIsAuthenticated } =
    useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);

  const fetchData = async (token) => {
    await getUsers(token, setIsAuthenticated, setAccount);
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      setRefreshLoading(true);
      fetchData(token);
    }
  }, []);

  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <Box
          sx={{
            width: "100%",
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
            <Route
              exact
              path="/auth"
              element={
                <Login
                  loading={loading}
                  setLoading={setLoading}
                  refreshLoading={refreshLoading}
                  setRefreshLoading={setRefreshLoading}
                />
              }
            />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Dashboard setLoading={setLoading} />
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />
          </Routes>
        </Box>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;
