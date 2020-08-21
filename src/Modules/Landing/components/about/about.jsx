import React from "react";
import { Grid, Typography, LinearProgress } from "@material-ui/core";

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
      <Grid container item xs={12} className={`${classes.skillContainer}`}>
        {content.skills.map((skill, key) => (
          <Grid
            key={key}
            item
            container
            xs={12}
            sm={6}
            className={`${classes.skill}`}
          >
            <Grid
              item
              container
              xs={12}
              className={`${classes.skillWordContainer}`}
            >
              <Typography
                className={`${classes.progressWords}`}
                variant="h5"
                align="left"
              >
                {skill.skill}
              </Typography>
              <Typography
                className={`${classes.progressStatus}`}
                variant="h5"
                align="right"
              >
                {skill.status}%
              </Typography>
            </Grid>
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={skill.status}
              className={`${classes.progress}`}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
