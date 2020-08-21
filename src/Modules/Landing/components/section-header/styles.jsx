import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "20vh",
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
  description: {
    color: theme.palette.type === "dark" ? "#bfbfbf" : "#505050",
    fontSize: "2rem",
  },
}));
