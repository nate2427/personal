import React from "react";
import { Typography, Grid } from "@material-ui/core";

import { useStyles } from "./styles";

export default function () {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={`${classes.container}`}
      item
      xs={12}
      id="resume"
    >
      <Typography variant="h1">Resume</Typography>
    </Grid>
  );
}