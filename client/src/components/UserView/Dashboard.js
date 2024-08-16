import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ProblemsTable from "./ProblemsTable";
import Footer from "./Footer";
import FilterSidebar from "./SideBar/FilterSidebar";
import TopView from "./TopView";

const Dashboard = ({ setLoading }) => {
  useEffect(() => {
    setLoading(false);
  }, []);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ height: "100%" }}>
      <Navbar />
      {isLargeScreen && <TopView />}
      <Box
        sx={{
          maxWidth: "96%",
          minWidth: "1280",
          pl: { xs: 2, sm: 3, md: 6 },
          pr: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          marginX: "auto",
          gap: 2,
          pb: 10,
          pt: { xs: 6, md: 0 },
          justifyContent: "space-between",
        }}
      >
        {isLargeScreen && <FilterSidebar />}
        <ProblemsTable />
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
