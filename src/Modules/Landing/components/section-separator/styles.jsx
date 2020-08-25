import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  separator: {
    padding: "7rem 0",
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
  },
  divider: {
    width: "100%",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.primary.light
        : theme.palette.secondary.main,
    opacity: theme.palette.type === "dark" ? "1" : ".5",
  },
}));
