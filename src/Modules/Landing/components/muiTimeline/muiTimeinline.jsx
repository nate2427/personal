import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

export default function CustomizedTimeline({ entries, align }) {
  const classes = useStyles();

  return (
    <Timeline align={align} classes={{ root: classes.overrideTimelineRoot }}>
      {entries.map((entry, key) => {
        return (
          <TimelineItem key={key}>
            <TimelineOppositeContent className={`${classes.opposite}`}>
              <Typography className={`${classes.dateRange}`} variant="h5">
                {entry.dateRange}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator
              className={`${
                key !== entries.length - 1 ? classes.separator : ""
              }`}
            >
              <TimelineDot color="secondary">{entry.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Paper
                elevation={10}
                color="secondary"
                className={classes.paper}
                classes={{ root: classes.overridePaper }}
              >
                <Typography
                  variant="h5"
                  component="h1"
                  className={`${classes.title}`}
                  align="left"
                >
                  {entry.title}
                </Typography>
                <ul className={`${classes.ul}`}>
                  {entry.descriptions.map((description, index) => {
                    return (
                      <li key={index}>
                        <Typography
                          align="left"
                          className={`${classes.description}`}
                        >
                          {description}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

// date range
// Name of School
// Description of completed work
