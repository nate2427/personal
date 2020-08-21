import React from "react";
import { Grid } from "@material-ui/core";

import { useStyles } from "./styles";
import SectionHeader from "../section-header/section-header";

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
      <SectionHeader title="Resume" description="Education & Experiences" />
    </Grid>
  );
}
