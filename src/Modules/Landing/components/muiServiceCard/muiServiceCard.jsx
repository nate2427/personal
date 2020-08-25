import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { scroller } from "react-scroll";

import { useStyles } from "./styles";
import { Button, Grid } from "@material-ui/core";

import { ThemeContext } from "../../../../App";

export default function MediaControlCard({ service, icon }) {
  const classes = useStyles();
  const { setSelectValue, setMessageValue } = useContext(ThemeContext);

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
                setSelectValue(service.val);
                setMessageValue(
                  `Hello, Nate! I am interested in your ${service.title} service. Will you please respond to my given email address to discuss further details?`
                );
                scroller.scrollTo("contact", {
                  containerId: "scrollcntr",
                  smooth: true,
                  duration: 600,
                });
              }}
            >
              Get Consultation Today
            </Button>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}
