import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  ButtonGroup,
  Paper,
  InputBase,
  IconButton,
  Hidden,
  Menu,
  MenuItem,
} from "@mui/material";
import house from "../src/assets/house.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";


import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";

const options = ["Home", "About", "Gallery", "Pricing", "About"];

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF", // White text color
      secondary: "#cce3de",
    },
  },
});

function App() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          sx={{
            backgroundImage: `url(${house})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "35em",
            minWidth: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <AppBar
            position="fixed"
            sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography variant="h5">Proper.</Typography>
              <Hidden smDown>
                <ButtonGroup
                  variant="text"
                  aria-label="Basic button group"
                  size="large"
                >
                  <Button sx={{ color: "white" }}>Home</Button>
                  <Button sx={{ color: "white" }}>About</Button>
                  <Button sx={{ color: "white" }}>Gallery</Button>
                  <Button sx={{ color: "white" }}>Pricing</Button>
                  <Button sx={{ color: "white" }}>Contact</Button>
                </ButtonGroup>
              </Hidden>
              <Hidden smUp>
                <ButtonGroup
                  variant="text"
                  ref={anchorRef}
                  aria-label="Button group with a nested menu"
                >
                  <Button onClick={handleClick}>
                    {options[selectedIndex]}
                  </Button>
                  <Button
                    size="small"
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
                <Popper
                  sx={{
                    zIndex: 1,
                    color: "black",
                  }}
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper
                        sx={{
                          zIndex: 1,
                          color: "black",
                        }}
                      >
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu" autoFocusItem>
                            {options.map((option, index) => (
                              <MenuItem
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) =>
                                  handleMenuItemClick(event, index)
                                }
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Hidden>
            </Toolbar>
          </AppBar>
          <Grid>
            <Fade in={isVisible} timeout={1000}>
              <Typography variant="h2" sx={{ fontWeight: "500", color: "white" }}>
                Get Ready.
              </Typography>
            </Fade>
            <Fade in={isVisible} timeout={1500}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontWeight: "460", color: "white" }}
              >
                We're finishing!
              </Typography>
            </Fade>
            <Fade in={isVisible} timeout={2000}>
              <Slide direction="right" in={isVisible} timeout={2000}>
                <Typography variant="h5" gutterBottom>
                  Enter your Email for the latest news.
                </Typography>
              </Slide>
            </Fade>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: { xs: "100%", sm: 400 },
                mt: 2,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, color: "black" }}
                placeholder="Your Email"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <SendIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
