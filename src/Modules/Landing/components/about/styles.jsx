import { makeStyles } from "@material-ui/core/esm";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
    padding: "0 2rem",
  },
  aboutBody: {
    fontSize: "2rem",
    lineHeight: "4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      lineHeight: "3rem",
    },
  },
  progress: {
    width: "100%",
    padding: ".4rem",
  },
  progressWords: {
    width: "70%",
  },
  progressStatus: {
    width: "30%",
  },
  skillContainer: {
    paddingTop: "4rem",
  },
  skill: {
    paddingRight: "2rem",
    paddingBottom: "2rem",
  },
  skillWordContainer: {
    paddingBottom: "1rem",
  },
}));
