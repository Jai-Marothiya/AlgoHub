// src/App.js
import React, { useContext, useEffect, useState } from "react";
import { Box, CircularProgress, circularProgressClasses } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/Auth/Login";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Dashboard from "./components/UserView/Dashboard";
import { DataContext } from "./context/DataProvider";
import { getUsers } from "./utils/getUser";
import { getProblems } from "./utils/getProblems";

const getToken = () => {
  const tokenString = localStorage.getItem("refreshToken");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setAccount, isAuthenticated, setIsAuthenticated } =
    useContext(DataContext);

  const fetchData = async (token) => {
    const user = await getUsers(
      token,
      setIsLoading,
      setIsAuthenticated,
      setAccount
    );
  };

  useEffect(() => {
    const token = getToken();
    setIsLoading(true);
    if (token) {
      fetchData(token);
    } else {
      setIsLoading(false); // No token found, no need to wait
    }
  }, []);

  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <Box>
          <Routes>
            <Route exact path="/auth" element={<Login />} />
            {/* <Route
              path="/"
              element={
                <PrivateRoute
                  isAuthenticated={isAuthenticated}
                  isLoading={isLoading}
                />
              }
            > */}

            <Route
              path="/"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />
              }
            />

            {/* </Route> */}
          </Routes>
        </Box>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;
