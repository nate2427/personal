import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ExtensionIcon from "@material-ui/icons/Extension";

import { useStyles } from "./styles";
import SectionHeader from "../section-header/section-header";

export default function () {
  const classes = useStyles();

  const hobbies = [
    {
      icon: <ImportContactsIcon className={`${classes.icon}`} />,
      title: "Reading",
    },
    {
      icon: <ExtensionIcon className={`${classes.icon}`} />,
      title: "Puzzles",
    },
    {
      icon: <RecordVoiceOverIcon className={`${classes.icon}`} />,
      title: "Motivational Speaking",
    },
    {
      icon: <FastfoodIcon className={`${classes.icon}`} />,
      title: "Eat",
    },
    {
      icon: <SportsBasketballIcon className={`${classes.icon}`} />,
      title: "Basketball",
    },
  ];
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={`${classes.container}`}
      item
      xs={12}
      id="hobbies"
    >
      <SectionHeader title="Hobbies" description="Cheerful & Enthusiastic" />
      <Grid container justify="center">
        {hobbies.map((hobby, key) => {
          return (
            <Hobby
              hobby={hobby}
              size={hobbies.length - 1}
              index={key}
              key={key}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

const Hobby = ({ hobby, index, size }) => {
  const classes = useStyles();

  return (
    <Grid
      className={`${classes.hobbyContainer} ${
        index !== size ? classes.hobbyContainer2 : ""
      }`}
      container
      item
      xs={10}
      sm={2}
      justify="center"
    >
      {hobby.icon}
      <Typography align="center" className={`${classes.word}`} variant="h3">
        {hobby.title}
      </Typography>
    </Grid>
  );
};
