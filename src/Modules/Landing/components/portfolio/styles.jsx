import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50vh",
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
    padding: "0 2rem",
  },
  aTag: {
    width: "100%",
  },
  aTagContainer: {
    paddingTop: "2rem",
    paddingBottom: "10rem",
  },
  iframelyEmbed: {
    width: "100%",
    padding: "1rem",
    height: "auto",
    position: "relative",
  },
}));
