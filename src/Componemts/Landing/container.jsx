import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useMediaQuery, Grid } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import { ThemeContext } from "../../App";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarAndMain: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    visibility: "hidden",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerGone: { width: 0 },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  rmPadding: {
    padding: "1rem 2rem",
  },
}));

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
              <Grid container item xs="12" justify="space-between">
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
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
        ) : (
          ""
        )}
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {screenSize ? (
            ""
          ) : (
            <ListItem
              button
              onClick={() => setDarkModeOn(!darkModeOn)}
              className
            >
              <ListItemIcon>
                <Brightness4Icon fontSize="default" />
              </ListItemIcon>
              <ListItemText primary={"Dark Mode"} />
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
        {!screenSize ? "" : <div className={classes.drawerHeader} />}
      </main>
    </div>
  );
}
