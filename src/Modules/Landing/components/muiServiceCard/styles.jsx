import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    width: "100%",
    height: "100%",
  },
  overrideRoot: {
    padding: "0",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  iconButton: {
    paddingLeft: "0",
  },

  content: {
    flex: "1 0 auto",
    paddingTop: 0,
  },
  title: {
    fontSize: "2rem",
    color: theme.palette.type === "dark" ? "#f0f0f0" : "#000",
    fontWeight: "700",
  },
  description: {
    color: theme.palette.type === "dark" ? "#bfbfbf" : "#505050",
    textTransform: "none",
    paddingTop: "1rem",
    fontSize: "1.7rem",
    fontWeight: "500",
    lineHeight: "2.7rem",
  },
  buttonContainer: {
    paddingTop: "4rem",
  },
  button: {
    fontSize: "1.5rem",
    fontWeight: "600",
  },
}));
