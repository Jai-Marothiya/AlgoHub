import { Box } from "@mui/material";
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

  return (
    <Box>
      <Navbar />
      <TopView />
      <Box
        sx={{
          maxWidth: "96%",
          minWidth: "1280",
          pl: 6,
          pr: 4,
          display: "flex",
          marginX: "auto",
          gap: 2,
          pb: 10,
          justifyContent: "space-between",
        }}
      >
        <FilterSidebar />
        <ProblemsTable />
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
