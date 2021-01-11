import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import SectionHeader from "../section-header/section-header";
import { portfolioContent as content } from "./content";
import Axios from "axios";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { Image, Transformation } from "cloudinary-react";

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
        {content.links.map(({ url, imgLink, alt, showURL, publicId }, key) => {
          return (
            <PortfolioCard
              url={url}
              key={key}
              imgLink={imgLink}
              alt={alt}
              showURL={showURL}
              delay={key}
              publicId={publicId}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

const PortfolioCard = ({ url, publicId, alt, showURL, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  let cardRef = React.useRef(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    gsap.to(cardRef.current, {
      x: -300,
      duration: 0,
      opacity: 0,
      ease: "expo.easeInOut",
    });
    // eslint-disable-next-line
  }, []);

  const slideIn = () => {
    !hasAnimated &&
      gsap
        .to(cardRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.5 * delay,
          ease: "expo.easeInOut",
        })
        .then(setHasAnimated(true));
  };

  const slideOut = () => {};

  inView ? slideIn() : slideOut();

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
      <div ref={ref}>
        <div ref={cardRef}>
          <div className={classes.portImgCardContainer}>
            <Image
              className={`${classes.img} cld-responsive`}
              dpr="auto"
              responsive
              width="auto"
              crop="scale"
              responsiveUseBreakpoints="true"
              alt={alt}
              publicID={publicId}
              cloudName="mibase"
            ></Image>
          </div>
          <Typography align="center" className={classes.cardName} variant="h4">
            {showURL}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};
