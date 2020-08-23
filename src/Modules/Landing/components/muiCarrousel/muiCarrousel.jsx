import React from "react";

import Typography from "@material-ui/core/Typography";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Nate from "../../../../assets/images/nate-professional-removebg-preview.png";

import { useStyles } from "./styles";
import { Grid, Avatar } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    console.log(step);
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
        {tutorialSteps.map((step, index) => (
          <div key={step.label} className={`${classes.testimonialContainer}`}>
            <FormatQuoteIcon fontSize="large" className={`${classes.icon}`} />
            <Grid container className={`${classes.bodyContainer}`}>
              <Grid item xs={10} md={8}>
                <Typography variant="body1" className={`${classes.body}`}>
                  Bruce really helped us achieve our design goals. His
                  presentation along with fantastic readability ensures that our
                  brand standing is strong. We highly recommend his for all your
                  digital needs.
                </Typography>
              </Grid>
            </Grid>
            {Math.abs(activeStep - index) <= tutorialSteps.length - 1 ? (
              <ReviewerComment />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

const ReviewerComment = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        item
        container
        alignItems="flex-start"
        className={`${classes.aviContainers}`}
      >
        <Avatar alt="Nate Baker" src={Nate} className={classes.large} />
      </Grid>
      <Grid item container className={`${classes.personNameContainer}`}>
        <Typography className={`${classes.name}`} variant="h4">
          Nate Baker
        </Typography>
        <Typography className={`${classes.occupation}`} variant="h6">
          Founder of Mibase, LLC
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SwipeableTextMobileStepper;
