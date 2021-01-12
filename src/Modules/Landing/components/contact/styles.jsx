import { makeStyles } from "@material-ui/core/esm";
export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50vh",
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
    padding: "0 2rem",
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    padding: "1rem 0",
  },
  input: {
    backgroundColor: "#5e666e",
    color: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    fontSize: "2rem",
  },
  button: {
    borderRadius: 0,
    fontSize: "1.7rem",
  },
  myInfoContainer: {
    background:
      "linear-gradient(166deg, rgba(181,120,6,1) 6%, rgba(73,95,140,1) 64%);",
  },
  outerContainer: {
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingTop: "2rem",
    },
  },
  buttonContainer: {
    justifySelf: "flex-start",
    padding: "3rem 0",
  },
  infoText: {
    width: "100%",
    color: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    padding: "1rem 0",
  },
  smallerText: {
    padding: ".5rem 0",
    fontSize: "1.5rem",
  },
  innerContainer: {
    padding: "2rem",
  },
  overrideLabel: {
    fontSize: "2rem",
    color: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
  },
  overrideInput: {
    fontSize: "1.5rem",
    color: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    padding: ".5rem",
  },
  formControl: {
    width: "100%",
  },
  selectContainer: {
    // padding-left: '1rem';
    padding: "1rem",
  },
  icon: {
    color: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    fontSize: "3rem",
  },
  sentMessgae: {
    paddingBottom: "2rem",
  },
  overrideTextarea: {
    padding: "27px 12px 10px",
    [theme.breakpoints.down("xs")]: {
      padding: "5rem 3rem",
    },
  },
  overrideMenuPaper: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
  },
  menuItem: {
    fontWeight: "700",
    fontSize: "1.2rem",
  },
  loaderContainer: {
    paddingBottom: "2rem",
  },
  formContainer: {
    paddingRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
}));
