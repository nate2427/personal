import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import SectionHeader from "../section-header/section-header";
import Timeline from "../muiTimeline/muiTimeinline";
import { resumeContent as content } from "./content";

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
      <SectionHeader title="Resume" description="Experiences & Education" />
      <Grid container>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography
              align="left"
              variant="h4"
              component="h1"
              className={`${classes.resumeSubtitle}`}
            >
              Experiences
            </Typography>
          </Grid>
          <Timeline entries={content.exEntries} align="alternate" />
        </Grid>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography
              align="left"
              variant="h4"
              component="h1"
              className={`${classes.resumeSubtitle} ${classes.ed}`}
            >
              Education
            </Typography>
          </Grid>
          <Timeline entries={content.edEntries} align="alternate" />
        </Grid>
      </Grid>
    </Grid>
  );
}
