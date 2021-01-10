import React from "react";

import Typography from "@material-ui/core/Typography";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Olivia from "../../../../assets/images/olivia-starnes.jpeg";
import Alexus from "../../../../assets/images/alexus-mcgriff.PNG";
import Thomas from "../../../../assets/images/thomas-hoang.jpeg";

import { useStyles } from "./styles";
import { Grid, Avatar } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    name: "Alexus McGriff",
    occupationTitle: "Business Analyst - Citigroup",
    body:
      "Nate teaches in a way that the student can understand. He made Web Development clearer to me in a few weeks than university did in an entire semester. Not only does Nate guide and teach his students, he learns new things with them if he doesn’t know. Would definitely recommend partnering with him on web projects.",
    avi: Alexus,
  },
  {
    name: "Thomas Hoang",
    occupationTitle: "Software Engineer - JPMorgan Chase & Co.",
    body:
      "I've had the honor of working with Nate to complete social media applications, search engines, and an virtual education platform. He shows tremendous ability being a leader during architecture designs of applications and shows proficient ability with full stack development on all of his products",
    avi: Thomas,
  },
  {
    name: "Olivia Starnes",
    occupationTitle: "High School Junior - Nashville, TN",
    body:
      "As a former student of one of Nate Baker’s classes, I can easily say that I’ve never understood coding more clear! He makes it easy to follow along and enjoy.",
    avi: Olivia,
  },
];

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {tutorialSteps.map(({ name, occupationTitle, body, avi }, index) => (
          <div key={index} className={`${classes.testimonialContainer}`}>
            <FormatQuoteIcon fontSize="large" className={`${classes.icon}`} />
            <Grid container className={`${classes.bodyContainer}`}>
              <Grid item xs={10} md={8}>
                <Typography variant="body1" className={`${classes.body}`}>
                  {body}
                </Typography>
              </Grid>
            </Grid>
            {Math.abs(activeStep - index) <= tutorialSteps.length - 1 ? (
              <ReviewerComment
                name={name}
                occupation={occupationTitle}
                avi={avi}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

const ReviewerComment = ({ name, occupation, avi }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        item
        container
        alignItems="flex-start"
        className={`${classes.aviContainers}`}
      >
        <Avatar alt="Nate Baker" src={avi} className={classes.large} />
      </Grid>
      <Grid item container className={`${classes.personNameContainer}`}>
        <Typography className={`${classes.name}`} variant="h4">
          {name}
        </Typography>
        <Typography className={`${classes.occupation}`} variant="h6">
          {occupation}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SwipeableTextMobileStepper;
