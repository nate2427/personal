import { makeStyles } from "@material-ui/core/esm";
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
  portCardContainer: {
    padding: "3rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  portImgCardContainer: {},
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem",
    boxShadow:
      theme.palette.type === "dark"
        ? "0 4px 8px 0 rgba(255,255,255,0.2)"
        : "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  cardName: {
    backgroundColor: "#fdfdfd",
    width: "100%",
    marginTop: "-.5rem",
    padding: "2rem 0",
    textTransform: "capitalize",
    fontSize: "2rem",
    fontFamily: "Merriweather",
    fontWeight: "bold",
    boxShadow:
      theme.palette.type === "dark"
        ? "0 4px 8px 0 rgba(255,255,255,0.4)"
        : "0 4px 8px 0 rgba(0,0,0,0.2)",
    color: "#242f46",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
    },
  },
}));
