import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const backgroundImage =
  "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?cs=srgb&dl=astronomy-beautiful-clouds-constellation-355465.jpg&fm=jpg";

const useStyles = makeStyles({
  landingBackground: {
    height: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%"
  },
  mainContent: {
    color: "white"
  },
  paper: {
    height: 140,
    width: 100
  }
});

const Landing = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.landingBackground}>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={2}
        className={classes.mainContent}
      >
        <Typography variant={"h1"}>hello</Typography>
      </Grid>
    </Grid>
  );
};

export default Landing;
