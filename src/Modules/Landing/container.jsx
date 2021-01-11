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
import loadable from "@loadable/component";

import { ThemeContext } from "../../App";
import { links as navLinks } from "./navbarLinks";
import { useStyles } from "./styles";

// components of the landing page
const About = loadable(() => import("./components/about/about"));
const Hero = loadable(() => import("./components/hero/hero"));
const Resume = loadable(() => import("./components/resume/resume"));
const Portfolio = loadable(() => import("./components/portfolio/portfolio"));
const Testimonials = loadable(() =>
  import("./components/testimonials/testimonials")
);
const Contact = loadable(() => import("./components/contact/contact"));
const Footer = loadable(() => import("./components/footer/footer"));
const SectionSeparator = loadable(() =>
  import("./components/section-separator/section-separator")
);
const Services = loadable(() => import("./components/services/services"));

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
          classes={{
            colorPrimary: classes.appBarAlt,
          }}
        >
          <Toolbar variant="dense">
            <Grid container justify="center">
              <Grid container item justify="space-between">
                {!open ? (
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(
                      classes.menuButton,
                      open && classes.hide,
                      classes.icon
                    )}
                  >
                    <MenuIcon fontSize="large" className={`${classes.icon}`} />
                  </IconButton>
                ) : null}

                <Typography
                  variant="h3"
                  onClick={() => {
                    scroller.scrollTo("home", {
                      containerId: "scrollcntr",
                      smooth: true,
                      duration: 700,
                    });
                  }}
                >
                  Baker <span className={`${classes.period}`}>.</span>
                </Typography>
                <IconButton
                  aria-label="dark mode"
                  onClick={() => setDarkModeOn(!darkModeOn)}
                  className={`${classes.icon}`}
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
        } ${screenSize && open ? classes.openNavSmallScreen : ""}`}
        variant={screenSize ? "persistent" : "permanent"}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
          paperAnchorDockedLeft: classes.overWriteBorderColor,
        }}
      >
        {screenSize ? (
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon className={`${classes.icon}`} fontSize="large" />
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
                setOpen(false);
                scroller.scrollTo(navItem.id, {
                  containerId: "scrollcntr",
                  smooth: true,
                  duration: 600,
                });
              }}
            >
              <ListItemIcon className={`${classes.icon}`}>
                {navItem.icon}
              </ListItemIcon>
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
              <ListItemIcon className={`${classes.icon}`}>
                <Brightness4Icon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={`${classes.listItem}`}>
                    {darkModeOn ? "Light Mode" : "Dark Mode"}
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
          ` ${screenSize && open ? "" : classes.appBarAndMain} ${
            screenSize && open ? "" : classes.rmMinHeight
          } ${screenSize ? classes.mainSmallScreenAlt : ""}`
        )}
      >
        <div name="container" id="mainContainer">
          <Grid
            container
            className={`${classes.componentContainer} `}
            id="scrollcntr"
            justify="center"
          >
            <Hero />
            <About />
            <Element name="about"></Element>
            <SectionSeparator />
            <Resume />
            <Element name="resume"></Element>
            <SectionSeparator />
            <Services />
            <Element name="services"></Element>
            <SectionSeparator />
            <Portfolio />
            <Element name="portfolio"></Element>
            <SectionSeparator />
            <Testimonials />
            <Element name="testimonials"></Element>
            <SectionSeparator />
            {/* <Hobbies />
            <Element name="hobbies"></Element>
            <SectionSeparator /> */}
            <Contact />
            <Element name="contact"></Element>
            <SectionSeparator />
            <Footer />
          </Grid>
        </div>
      </main>
    </div>
  );
}
