import React, { useContext } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useMediaQuery, Grid, Typography } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { scroller, Element } from "react-scroll";

import { ThemeContext } from "../../App";
import { links as navLinks } from "./navbarLinks";
import { useStyles } from "./styles";
// components of the landing page
import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Resume from "./components/resume/resume";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Hobbies from "./components/hobbies/hobbies";

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const { darkModeOn, setDarkModeOn } = useContext(ThemeContext); // dark mode

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    console.log("made it");
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {screenSize ? (
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar variant="dense">
            <Grid container justify="center">
              <Grid container item justify="space-between">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
                <IconButton
                  aria-label="dark mode"
                  onClick={() => setDarkModeOn(!darkModeOn)}
                >
                  <Brightness4Icon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      ) : null}
      <Drawer
        className={`${classes.drawer} ${
          !open && screenSize ? classes.drawerGone : ""
        }`}
        variant={screenSize ? "persistent" : "permanent"}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {screenSize ? (
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
          </div>
        ) : (
          ""
        )}

        <List className={`${classes.list}`}>
          {navLinks.map((navItem, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                scroller.scrollTo(navItem.id, {
                  containerId: "scrollcntr",
                  smooth: true,
                  duration: 900,
                });
              }}
            >
              <ListItemIcon>{navItem.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={`${classes.listItem}`}>
                    {navItem.name}
                  </Typography>
                }
              />
            </ListItem>
          ))}
          {screenSize ? (
            ""
          ) : (
            <ListItem button onClick={() => setDarkModeOn(!darkModeOn)}>
              <ListItemIcon>
                <Brightness4Icon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={`${classes.listItem}`}>
                    Dark Mode
                  </Typography>
                }
              />
            </ListItem>
          )}
        </List>
      </Drawer>
      <main
        className={clsx(
          classes.content,
          {
            [classes.contentShift]: open,
          },
          +` ${screenSize && open ? "" : classes.appBarAndMain} ${
            screenSize && open ? "" : classes.rmMinHeight
          }`
        )}
      >
        <div name="container" id="mainContainer">
          <Grid
            container
            className={classes.componentContainer}
            id="scrollcntr"
          >
            <Hero />
            <About />
            <Element name="about"></Element>
            <Resume />
            <Element name="resume"></Element>
            <Services />
            <Element name="services"></Element>
            <Portfolio />
            <Element name="portfolio"></Element>
            <Testimonials />
            <Element name="testimonials"></Element>
            <Hobbies />
            <Element name="hobbies"></Element>
            <Contact />
            <Element name="contact"></Element>
          </Grid>
        </div>
      </main>
    </div>
  );
}
