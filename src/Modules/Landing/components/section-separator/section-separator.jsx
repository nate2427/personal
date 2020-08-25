import React from "react";
import { Grid, Divider } from "@material-ui/core";

import { useStyles } from "./styles";

export default function () {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      lg={11}
      className={classes.separator}
      alignItems="center"
    >
      <Divider className={classes.divider} />
    </Grid>
  );
}
