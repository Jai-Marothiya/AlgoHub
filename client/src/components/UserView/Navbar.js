import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../icons/Logo.js";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider.js";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilterSidebar from "./SideBar/FilterSidebar.js";
import ProgressBar from "./ProgressBar.js";

const adminSettings = ["Admin View", "User View", "Profile", "Logout"];
const nonAdminSettings = ["Logout"];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const {
    account,
    setIsAuthenticated,
    adminView,
    setAdminView,
    problems,
    userProblems,
  } = React.useContext(DataContext);

  const [count, setCount] = React.useState({ easy: 0, medium: 0, hard: 0 });

  React.useEffect(() => {
    const completedProblems = problems.filter((problem) => {
      const userProblem =
        userProblems &&
        userProblems.find(
          (up) => up.problem_id === problem.id && up.status === true
        );
      return userProblem ? true : false;
    });
    // Count the number of problems for each level
    const { easy, medium, hard } = completedProblems.reduce(
      (acc, problem) => {
        if (problem.problem_level === "Easy") acc.easy += 1;
        else if (problem.problem_level === "Medium") acc.medium += 1;
        else if (problem.problem_level === "Hard") acc.hard += 1;
        return acc;
      },
      { easy: 0, medium: 0, hard: 0 }
    );

    setCount({ easy, medium, hard });
  }, [account, problems, userProblems]);

  const drawerRef = React.useRef(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (val) => {
    setAnchorElUser(null);
    if (val === "Logout") {
      handleLogout();
    } else if (val === "Admin View") {
      setAdminView(true);
    } else if (val === "User View") {
      setAdminView(false);
    }
  };

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("refreshToken");
    googleLogout();
    setIsAuthenticated(false);
    navigate("/auth");
  };

  // Close the drawer when clicking outside of it
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle mobile menu open/close
  const toggleMobileMenu = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMenuOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#fff",
        boxShadow: "none",
        borderBottom: "2px solid rgba(0, 0, 0, 0.28)",
        pl: { xs: 2, sm: 4, md: 6 }, // Responsive padding
        pr: { xs: 3, sm: 4, md: 6 }, // Responsive padding
        top: "0",
        zIndex: "20",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        {/* Hamburger menu for mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton
            size="large"
            aria-label="open drawer"
            onClick={toggleMobileMenu(true)}
            color="default"
          >
            <MenuIcon sx={{ fontSize: "28px" }} />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Logo />
        </Box>

        {/* Drawer for mobile menu */}
        <Drawer
          anchor="left"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu(false)}
        >
          <Box ref={drawerRef} sx={{ width: 300, px: 2 }} role="presentation">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "180px",
              }}
            >
              <ProgressBar
                total={problems && problems.length}
                easy={count.easy}
                medium={count.medium}
                hard={count.hard}
                height="150px"
                width="300px"
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "20px",
                color: "rgba(0, 0, 0, 0.87)",
                pt: "24px",
                fontWeight: "400",
                lineHeight: "22.0px",
              }}
            >
              Filters
            </Typography>
            <FilterSidebar />
          </Box>
        </Drawer>

        {/* User avatar and name */}
        <Box
          sx={{
            flexGrow: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Tooltip>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={account?.name}
                src={account?.photo}
                sx={{ height: "32px", width: "32px" }}
              >
                <AccountCircleIcon
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#fff",
                    fill: "#3246DE",
                  }}
                />
              </Avatar>
            </IconButton>
          </Tooltip>

          {/* Hide user name on mobile */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              ml: 1,
              display: { xs: "none", md: "flex" }, // Hide on mobile
              fontFamily: "Jost, sans-serif",
              font: 2,
              color: "rgba(0, 0, 0, 0.87)",
              textDecoration: "none",
            }}
          >
            {account.name}
          </Typography>
        </Box>

        {/* User settings menu */}
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {(account.is_admin ? adminSettings : nonAdminSettings).map(
            (setting) =>
              (adminView && setting === "Admin View") ||
              (!adminView && setting === "User View") ? (
                <></>
              ) : (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                  sx={{ py: "4px" }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "Jost, sans-serif",
                      font: 2,
                      lineHeight: "28px",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              )
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
