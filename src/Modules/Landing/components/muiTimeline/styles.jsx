import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  overridePaper: { backgroundColor: theme.palette.secondary.main },
  title: {
    fontSize: "2rem",
    lineHeight: "3rem",
    paddingBottom: "1rem",
    fontWeight: "700",
  },
  description: {
    fontSize: "1.8rem",
    lineHeight: "2.5rem",
    paddingBottom: "1rem",
  },
  ul: {
    padding: "1rem",
    paddingLeft: "1.7rem",
    fontWeight: "700",
    listStyleType: "square",
  },
  opposite: {
    flex: 0.25,
    [theme.breakpoints.down("xs")]: {
      flex: 0,
    },
  },
  separator: {
    minHeight: "40rem",
    [theme.breakpoints.down("xs")]: {
      minHeight: "45rem",
    },
  },
  dateRange: {
    color: theme.palette.type === "dark" ? "#bfbfbf" : "#505050",
  },
}));
