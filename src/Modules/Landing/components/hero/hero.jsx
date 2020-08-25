import React from "react";
import { Grid, Button, Typography, Divider } from "@material-ui/core";
import { scroller } from "react-scroll";

import { useStyles } from "./styles";

export default function () {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="flex-end"
      // direction="column-reverse"
      className={`${classes.container}`}
      item
      xs={12}
      lg={11}
      id="home"
    >
      <Grid container item xs={12} className={`${classes.heroWordsImg}`}>
        <Grid
          item
          container
          sm={5}
          xs={12}
          className={`${classes.heroLeftContainer}`}
        >
          <Grid item xs={12} className={`${classes.heroSpacing}`}>
            <Typography className={`${classes.hello}`} variant="h5">
              Hi, I'm
            </Typography>
          </Grid>
          <Grid item xs={12} className={`${classes.heroSpacing}`}>
            <Typography className={`${classes.name}`} variant="h3">
              Nate <br /> Baker
            </Typography>
          </Grid>
          <Grid item xs={12} className={`${classes.heroSpacing}`}>
            <Divider className={`${classes.heroDivider}`} />
          </Grid>
          <Grid className={`${classes.heroSpacing}`} item xs={12}>
            <Typography className={`${classes.occupation}`} variant="h4">
              Freelance Web Developer and Coding Instructor
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={7} xs={12}>
          <div className={classes.heroImage}></div>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Button
            classes={{ root: classes.heroButtons }}
            fullWidth
            variant="contained"
            color="secondary"
          >
            Download Resume
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            classes={{ root: classes.heroButtons }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              scroller.scrollTo("portfolio", {
                containerId: "scrollcntr",
                smooth: true,
                duration: 900,
              });
            }}
          >
            View Portfolio
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
