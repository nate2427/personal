import React from "react";
import { Grid } from "@material-ui/core";

import { useStyles } from "./styles";
import SectionHeader from "../section-header/section-header";
import Carrousel from "../muiCarrousel/muiCarrousel";

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
      id="testimonials"
    >
      <SectionHeader title="Testimonials" description="" />
      <Grid container justify="center">
        <Carrousel />
      </Grid>
    </Grid>
  );
}
