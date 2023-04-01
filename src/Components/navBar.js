import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../Css/navBar.css";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#a3aaab",
    },
  },
});

const pages = ["Feature", "Pricing", "Contact"];

function NavBar() {
  const [navBar, setNavBar] = useState(null);

  const handleOpenNavMenu = (event) => {
    setNavBar(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavBar(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="primary" position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize:"30px",
                letterSpacing: ".3rem",
                color: "white",
                textDecoration:"none"
              }}
            >
              Blogi
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={navBar}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(navBar)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`$/${page}`}
                    >
                    <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".0rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Blogi
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="nav_menus"
                  sx={{
                    my: 2,
                    color: "white",
                    border: "2px solid transparent",
                    mt: 2.5,
                  }}
                >
                  {/* <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`${page}`}
                  > */}
                  <Typography>{page}</Typography>
                  {/* </Link> */}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                className="nav_menus"
                sx={{
                  my: 2,
                  color: "white",
                  border: "2px solid transparent",
                  mt: 2.5,
                }}
              >
                <Typography>Login</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                className="nav_menus"
                sx={{
                  my: 2,
                  color: "white",
                  border: "2px solid transparent",
                  mt: 2.5,
                }}
              >
                <Typography>SignUp</Typography>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ mt: 8 }} className="blog_header">
        <h1 className="blog_title">Blogs</h1>
        <Typography variant="body1">All News about Blogi in one Place</Typography>
      </Box>
    </ThemeProvider>
  );
}
export default NavBar;
