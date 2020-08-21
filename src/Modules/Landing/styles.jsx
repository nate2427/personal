import { makeStyles } from "@material-ui/core";

const drawerWidth = 200;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarAlt: {
    backgroundColor: "#242f46",
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
  overWriteBorderColor: {
    borderRightColor: "rgba(255, 255, 255, 0.12)",
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
    // display: "flex",
    // alignItems: "center",
    // height: "100vh",
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
  list: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  listItem: {
    fontSize: "2rem",
  },
  componentContainer: {
    height: "95vh",
    overflowY: "scroll",
  },
  icon: {
    color: "#f5f5f5",
  },
  openNavSmallScreen: {
    position: "absolute",
  },
  mainSmallScreenAlt: {
    padding: 0,
    paddingTop: "50px",
  },
  period: {
    color:
      theme.palette.type === "dark"
        ? theme.palette.secondary.dark
        : theme.palette.secondary.light,
  },
}));
