import { makeStyles } from "@material-ui/core/esm";
export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "16vh",
    paddingTop: "1rem",
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
