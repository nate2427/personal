import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "16vh",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
  title: {
    fontWeight: "700",
  },
  divider: {
    width: "10%",
    height: ".3rem",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.secondary.dark
        : theme.palette.secondary.light,
  },
  lineContainer: {
    padding: "1rem 0",
  },
  description: {
    color: theme.palette.type === "dark" ? "#bfbfbf" : "#505050",
    fontSize: "2rem",
  },
}));
