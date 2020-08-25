import React, { useRef, useState, useContext } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  CircularProgress,
} from "@material-ui/core";
import emailjs from "emailjs-com";
import SectionHeader from "../section-header/section-header";

import { useStyles } from "./styles";
import { contactContent as content } from "./content";
import { ThemeContext } from "../../../../App";

export default function () {
  const classes = useStyles();
  const ref = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [messageSentWithError, setMessageSentWithError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={`${classes.container}`}
      item
      xs={12}
      lg={11}
      id="contact"
    >
      <SectionHeader title="Contact" description="Available for freelance" />
      <Grid container>
        <InputForm reference={ref} />
        <MyInfo />
      </Grid>
      <Grid
        item
        xs={12}
        container
        justify="flex-start"
        className={`${classes.buttonContainer}`}
      >
        {loading ? (
          <Grid
            item
            container
            justify="center"
            className={classes.loaderContainer}
            xs={12}
          >
            <CircularProgress color="secondary" />
          </Grid>
        ) : null}

        {messageSent ? (
          <Grid
            item
            xs={12}
            container
            justify="center"
            className={classes.loaderContainer}
          >
            <Typography
              variant="h4"
              color="secondary"
              className={`${classes.sentMessgae}`}
            >
              Sent!
            </Typography>
          </Grid>
        ) : null}

        {messageSentWithError ? (
          <Grid
            item
            xs={12}
            container
            justify="center"
            className={classes.loaderContainer}
          >
            <Typography
              variant="h4"
              color="error"
              className={`${classes.sentMessgae}`}
            >
              Error Sending Message !
            </Typography>
          </Grid>
        ) : null}

        <Grid item xs={12} md={3}>
          <Button
            className={`${classes.button}`}
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {
              const service_id = "gmail";
              const template_id = "template_vwi236bZ";
              const user_id = "user_4Sd3PL1XIEE0y4imZuIR3";
              setLoading(true);

              emailjs
                .sendForm(service_id, template_id, ref.current, user_id)
                .then(
                  () => {
                    setMessageSent(true);
                    setLoading(false);
                  },
                  () => {
                    setMessageSentWithError(true);
                    setLoading(false);
                  }
                );
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const InputForm = ({ reference }) => {
  const classes = useStyles();

  const [showSelectType, setShowSelectType] = useState(true);
  const {
    darkModeOn,
    setSelectValue,
    selectValue,
    setMessageValue,
    messageValue,
  } = useContext(ThemeContext);
  const [inputVals, setInputVals] = React.useState(["", "", ""]);

  console.log(messageValue ? messageValue : "not yet");

  const inputStyle = {
    WebkitBoxShadow: `0 0 0px 1000px ${"#5e666e"} inset`,
    borderRadius: "unset",
    caretColor: darkModeOn ? "#121212" : "#f5f5f5",
    "input:InternalAutofillSelected": {
      color: "yellow !important",
      backgroundColor: "red",
    },
  };

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <Grid container item xs={12} md={6}>
      <form
        autoComplete="off"
        className={`${classes.form}`}
        id="contactForm"
        ref={reference}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Nate");
        }}
      >
        <Grid container className={`${classes.inputContainer}`}>
          <FormControl
            className={`${classes.formControl} `}
            color={darkModeOn ? "primary" : "secondary"}
          >
            <Select
              value={selectValue ? selectValue : "Type of Service"}
              onChange={handleChange}
              onClick={() => (showSelectType ? setShowSelectType(false) : null)}
              placeholder="Type of Service*"
              fullWidth
              disableUnderline
              name="service"
              defaultValue="Type of Service*"
              className={`${classes.input} ${classes.selectContainer}`}
              classes={{
                icon: classes.icon,
              }}
              inputProps={{
                placeholder: "Type of Service*",
              }}
              MenuProps={{
                classes: {
                  paper: classes.overrideMenuPaper,
                },
              }}
            >
              {showSelectType ? (
                <MenuItem
                  className={classes.menuItem}
                  value={"Type of Service"}
                >
                  Type of Service*
                </MenuItem>
              ) : null}

              <MenuItem className={classes.menuItem} value={"None"}>
                None
              </MenuItem>
              <MenuItem className={classes.menuItem} value={"Web Development"}>
                Web Development
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                value={"Code Tutoring and Teaching"}
              >
                Code Tutoring and/or Teaching
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                value={"Software Consultation"}
              >
                Software Consultation
              </MenuItem>
              <MenuItem className={classes.menuItem} value={"Debugging"}>
                Debugging
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {content.inputs.map((input, key) => {
          return (
            <Grid container key={key} className={`${classes.inputContainer}`}>
              <TextField
                className={`${classes.input}`}
                fullWidth
                label={input.placeholder}
                type={input.type}
                variant="filled"
                color="secondary"
                name={input.name}
                autoComplete="off"
                onChange={
                  key === 3
                    ? (e) => setMessageValue(e.target.value)
                    : (e) => {
                        inputVals[key] = e.target.value;
                        setInputVals([...inputVals]);
                      }
                }
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: `${classes.overrideInput}`,
                    inputMultiline: classes.overrideTextarea,
                  },
                }}
                InputLabelProps={{
                  color: darkModeOn ? "primary" : "secondary",
                  classes: {
                    root: `${classes.overrideLabel} `,
                  },
                }}
                // eslint-disable-next-line
                inputProps={{ style: inputStyle }}
                multiline={input.multi && input.multi}
                rows={input.rowsMin && input.rowsMin}
                value={key === 3 ? messageValue : inputVals[key]}
              />
            </Grid>
          );
        })}
      </form>
    </Grid>
  );
};

const MyInfo = () => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} md={6} className={`${classes.outerContainer}`}>
      <Grid
        container
        item
        xs={12}
        className={`${classes.myInfoContainer}`}
        justify="center"
        alignItems="center"
      >
        <Grid container className={`${classes.innerContainer}`}>
          <Typography
            className={`${classes.infoText}`}
            align="left"
            variant="h3"
          >
            Let's talk
          </Typography>

          <Typography
            className={`${classes.infoText}`}
            variant="h4"
            align="left"
          >
            Got a project? Need some help? Don’t hesitate to contact.
          </Typography>

          <Typography
            className={`${classes.infoText} ${classes.smallerText}`}
            variant="body1"
            align="left"
          >
            P - 616.410.3799
          </Typography>
          <Typography
            className={`${classes.infoText} ${classes.smallerText}`}
            variant="body1"
            align="left"
          >
            E - nate.baker@mibase.net
          </Typography>
          <Typography
            className={`${classes.infoText} ${classes.smallerText}`}
            variant="body1"
            align="left"
          >
            A - Dallas, TX
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
