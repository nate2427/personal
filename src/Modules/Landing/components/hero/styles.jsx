import { makeStyles } from "@material-ui/core";
import Nate from "../../../../assets/images/nate-professional-removebg-preview.png";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50vh",
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
    paddingBottom: "7rem",
  },
  heroWordsImg: {
    padding: "2rem 2rem 0 2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 0rem 0 1rem",
    },
  },
  heroButtons: {
    borderRadius: 0,
    height: "5rem",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#f0f0f0",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  heroImage: {
    backgroundImage: `url(${Nate})`,
    [theme.breakpoints.down("sm")]: {
      minHeight: "50vh",
    },
    [theme.breakpoints.down("md")]: {
      minHeight: "79vh",
    },
    // [theme.breakpoints.down("lg")]: {
    //   minHeight: "86.2vh",
    // },
    minHeight: "88vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflowY: "hidden",
    "@media screen and (max-width: 820px) and (orientation: landscape)": {
      minHeight: "84vh",
    },
  },
  heroLeftContainer: {
    alignSelf: "center",
  },
  heroDivider: {
    height: ".5rem",
    width: "30%",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.secondary.dark
        : theme.palette.secondary.light,
  },
  heroSpacing: {
    paddingBottom: "2rem",
  },
  name: {
    fontSize: "6rem",
    lineHeight: "7rem",
  },
  hello: {
    fontSize: "2.3rem",
    color:
      theme.palette.type === "dark"
        ? theme.palette.secondary.dark
        : theme.palette.secondary.light,
  },
  occupation: {
    color: theme.palette.type === "dark" ? "#f0f0f0" : "#757575",
  },
}));
