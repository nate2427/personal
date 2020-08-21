import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import SectionHeader from "../section-header/section-header";
import { aboutContent as content } from "./about-content";

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
    >
      <SectionHeader title="About" description="Creative & Passionate" />
      <Grid item xs={12}>
        <Typography className={`${classes.aboutBody}`} variant="body2">
          {content.aboutBody}
        </Typography>
      </Grid>
    </Grid>
  );
}
