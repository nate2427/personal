import { makeStyles } from "@material-ui/core/esm";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  icon: {
    color: "#505050",
    fontSize: "5rem",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  name: {
    width: "100%",
    lineHeight: "3rem",
    fontSize: "2rem",
  },
  occupation: {
    width: "100%",
    color: "#909090",
    fontSize: "1.7rem",
    fontWeight: "400",
  },
  aviContainers: {
    width: "fit-content",
  },
  personNameContainer: {
    width: "fit-content",
    paddingLeft: "1rem",
  },
  body: {
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
      lineHeight: "2.5rem",
    },
    color: theme.palette.type === "dark" ? "#f0f0f0" : "#707070",
    fontStyle: "italic",
    lineHeight: "3.2rem",
  },
  bodyContainer: {
    padding: "2rem 0",
    justifyContent: "center",
  },
  testimonialContainer: {},
}));
