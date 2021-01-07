import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import { useStyles } from "./styles";
import { Button, Grid } from "@material-ui/core";

export default function MediaControlCard({ service, icon }) {
  const classes = useStyles();
  const router = useHistory();

  return (
    <Card className={classes.root} square elevation={0}>
      <div>
        <CardContent
          className={classes.content}
          classes={{ root: classes.overrideRoot }}
        >
          {icon}
        </CardContent>
      </div>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            align="left"
            component="h5"
            variant="h5"
            className={classes.title}
          >
            {service.title}
          </Typography>
          {service.descriptions.map((sentence, index) => (
            <Typography
              variant="body2"
              className={classes.description}
              align="left"
              key={index}
            >
              {sentence}
            </Typography>
          ))}
        </CardContent>

        <Grid container justify="flex-end">
          <Grid item md={6} xs={8} className={`${classes.buttonContainer}`}>
            <Button
              className={`${classes.button}`}
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => {
                console.log(service.buttonLink)
                router.push(service.buttonLink);
              }}
            >
              {service.buttonText}
            </Button>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}
