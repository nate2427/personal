import React, { useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";

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
      "https://iframe.ly/api/oembed?url=natebaker.me&api_key=24f3c852a5f6bdcefc17d1&iframe=card"
    )
      .then((data) => {
        links.push(data);
        setLinks([...links]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        {content.links.map(({ url }, key) => {
          return (
            <Grid
              item
              container
              xs={12}
              sm={6}
              key={key}
              className={`${classes.aTagContainer}`}
            >
              <div className={`${classes.iframelyEmbed}`}>
                <div
                  className="iframely-responsive"
                  style={{
                    paddingBottom: "56.2963%",
                    padddingTop: "120px",
                  }}
                >
                  {/* eslint-disable-next-line*/}
                  <a
                    href={url}
                    data-iframely-url="//cdn.iframe.ly/api/iframe?url=http%3A%2F%2Fnatebaker.me&amp;key=c16798116f1de5306d282ad5963b1e2f&amp;iframe=card"
                  ></a>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
