import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
    padding: "0 1rem",
  },
  aboutBody: {
    fontSize: "2rem",
    lineHeight: "4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      lineHeight: "3rem",
    },
  },
}));
