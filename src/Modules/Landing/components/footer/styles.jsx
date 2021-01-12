import { makeStyles } from "@material-ui/core/esm";
export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "10vh",
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
    paddingBottom: "7rem",
    padding: "0 2rem",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "15rem",
    },
  },
  mibase: {
    color: "#707070",
  },
}));
