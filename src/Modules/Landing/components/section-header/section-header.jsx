import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";

import { useStyles } from "./styles";

export default function ({ title, description }) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="flex-start"
      className={`${classes.container}`}
      item
      xs={12}
      id="resume"
    >
      <Typography variant="h2" className={`${classes.title}`}>
        {title}
      </Typography>
      <Grid item xs={12} className={`${classes.lineContainer}`}>
        <Divider className={`${classes.divider}`} />
      </Grid>
      <Typography className={`${classes.description}`} variant="h4">
        {description}
      </Typography>
    </Grid>
  );
}
