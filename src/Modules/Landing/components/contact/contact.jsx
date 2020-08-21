import React from "react";
import { Grid } from "@material-ui/core";
import SectionHeader from "../section-header/section-header";

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
      id="contact"
    >
      <SectionHeader title="Contact" description="Available for freelance" />
    </Grid>
  );
}
