import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import SectionHeader from "../section-header/section-header";
import { portfolioContent as content } from "./content";
import Axios from "axios";
import { useState } from "react";

export default function () {
  const classes = useStyles();
  const [links, setLinks] = useState([]);
  useEffect(() => {
    window.iframely && window.iframely.load();
    Axios.get(
      "https://iframe.ly/api/oembed?url=http://www.natebaker.me&api_key=24f3c852a5f6bdcefc17d1&iframe=card"
    )
      .then((data) => {
        links.push(data);
        setLinks([...links]);
      })
      .catch((err) => {});
    // eslint-disable-next-line
  }, []);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={`${classes.container}`}
      item
      xs={12}
      lg={11}
      id="portfolio"
    >
      <SectionHeader title="Portfolio" description="Skilled & Experienced" />
      <Grid container item xs={12} lg={10} justify="center">
        {content.links.map(({ url, imgLink, alt, showURL }, key) => {
          return (
            <PortfolioCard
              url={url}
              key={key}
              imgLink={imgLink}
              alt={alt}
              showURL={showURL}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

const PortfolioCard = ({ url, imgLink, alt, showURL }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      sm={6}
      className={classes.portCardContainer}
      onClick={() => {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.click();
      }}
    >
      <div className={classes.portImgCardContainer}>
        <img className={classes.img} src={imgLink} alt={alt} />
      </div>
      <Typography align="center" className={classes.cardName} variant="h4">
        {showURL}
      </Typography>
    </Grid>
  );
};
