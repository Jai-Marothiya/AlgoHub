import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../icons/Logo.js";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider.js";

const adminSettings = ["Admin View", "User View", "Profile", "Logout"];
const nonAdminSettings = ["Logout"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { account, setIsAuthenticated, adminView, setAdminView } =
    React.useContext(DataContext);

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

  return (
    <AppBar
      position="static"
      sx={{
        background: "#fff",
        boxShadow: "none",
        borderBottom: "2px solid rgba(0, 0, 0, 0.28)",
        pl: 6,
        pr: 4,
        position: "sticky",
        top: "0",
        zIndex: "20",
      }}
    >
      <Box maxWidth="100%">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo />
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  src="/static/images/avatar/2.jpg"
                  sx={{
                    background: "#3246DE",
                    fill: "#fff",
                    height: "28px",
                    width: "28px",
                  }}
                />
              </IconButton>
            </Tooltip>
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
            <Typography
              variant="h6"
              noWrap
              sx={{
                ml: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "Jost, sans-serif",
                font: 2,
                color: "rgba(0, 0, 0, 0.87)",
                textDecoration: "none",
              }}
            >
              {account.name}
            </Typography>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default Navbar;
