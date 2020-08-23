import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50vh",
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
    padding: "0 2rem",
  },
  icon: {
    fontSize: "10rem",
    paddingTop: "2rem",
    paddingBottom: "1rem",
    color: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
  },
  word: {
    width: "100%",
    paddingBottom: "2rem",
    color: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    fontSize: "2rem",
  },
  hobbyContainer: {
    backgroundColor: theme.palette.secondary.main,
  },
  hobbyContainer2: {
    borderRight: `${
      theme.palette.type === "dark" ? "#000" : "#f5f5f5"
    } solid .2rem`,
    [theme.breakpoints.down("xs")]: {
      borderRight: "unset",
      borderBottom: `${
        theme.palette.type === "dark" ? "#000" : "#f5f5f5"
      } solid .2rem`,
    },
  },
}));
