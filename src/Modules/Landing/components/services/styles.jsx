import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50vh",
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
    padding: "0 2rem",
  },
  serviceContainer: {
    padding: "5rem 2rem 1rem 0rem",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 0",
    },
  },
  icon: {
    fontSize: "5rem",
    color: theme.palette.secondary.main,
  },
}));
