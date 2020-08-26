import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

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
      <Grid container item xs={12} lg={10} justify="flex-start">
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
                    paddingTop: "120px",
                    padddingBottom: "70.9937%",
                  }}
                >
                  {/* eslint-disable-next-line*/}
                  <a
                    href={url}
                    data-iframely-url="//cdn.iframe.ly/api/iframe?url=http%3A%2F%2Fwww.natebaker.me&amp;key=c16798116f1de5306d282ad5963b1e2f&amp;iframe=card"
                  ></a>

                  <script
                    async
                    src="//cdn.iframe.ly/embed.js"
                    charSet="utf-8"
                  ></script>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
