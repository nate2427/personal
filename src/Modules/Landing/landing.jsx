import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "./container";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});

const Landing = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.landingBackground}>
      <Container />
    </Grid>
  );
};

export default Landing;
