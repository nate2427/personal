import React from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import TvOutlinedIcon from "@material-ui/icons/TvOutlined";
import BugReportOutlinedIcon from "@material-ui/icons/BugReportOutlined";
import ContactPhoneOutlinedOutlinedIcon from "@material-ui/icons/ContactPhoneOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";

import { useStyles } from "./styles";
import SectionHeader from "../section-header/section-header";
import { serviceContent as content } from "./content";
import Service from "../muiServiceCard/muiServiceCard";

export default function () {
  const classes = useStyles();
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down("xs"));
  const icons = [
    <TvOutlinedIcon fontSize="large" className={`${classes.icon}`} />,
    <SupervisedUserCircleOutlinedIcon
      fontSize="large"
      className={`${classes.icon}`}
    />,
    <ContactPhoneOutlinedOutlinedIcon
      fontSize="large"
      className={`${classes.icon}`}
    />,
    <BugReportOutlinedIcon fontSize="large" className={`${classes.icon}`} />,
  ];
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={`${classes.container}`}
      item
      xs={12}
      lg={11}
      id="services"
    >
      <SectionHeader title="Services" description="Versatile & Expert" />
      <Grid container justify={screenSize ? "center" : "flex-start"}>
        {content.services.map((service, key) => {
          return (
            <Grid
              className={`${classes.serviceContainer}`}
              item
              key={key}
              xs={12}
              sm={6}
            >
              <Service service={service} icon={icons[key]} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
