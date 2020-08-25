import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

export default function () {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      lg={11}
      justify="center"
      className={classes.container}
    >
      <Grid container item xs={12} justify="space-between">
        <Typography className={classes.mibase} variant="h5">
          Powered by Mibase, LLC
        </Typography>
      </Grid>
    </Grid>
  );
}
