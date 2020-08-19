import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50vh",
    backgroundColor: theme.palette.type === "dark" ? "#828388" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
  },
}));
