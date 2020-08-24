import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import SectionHeader from "../section-header/section-header";

import { useStyles } from "./styles";
import { contactContent as content } from "./content";

export default function () {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={`${classes.container}`}
      item
      xs={12}
      id="contact"
    >
      <SectionHeader title="Contact" description="Available for freelance" />
      <Grid container>
        <InputForm />
        <MyInfo />
      </Grid>
      <Grid
        item
        xs={12}
        container
        justify="flex-start"
        className={`${classes.buttonContainer}`}
      >
        <Grid item xs={12} md={3}>
          <Button
            className={`${classes.button}`}
            variant="contained"
            color="primary"
            fullWidth
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const InputForm = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container item xs={12} md={6}>
      <form className={`${classes.form}`}>
        <Grid container className={`${classes.inputContainer}`}>
          <FormControl className={`${classes.formControl} `}>
            <Select
              labelId="demo-simple-select-helper-label"
              value={age ? age : "Type of Service*"}
              onChange={handleChange}
              placeholder="Type of Service*"
              fullWidth
              defaultValue="Type of Service*"
              className={`${classes.input} ${classes.selectContainer}`}
              classes={{
                icon: classes.icon,
              }}
            >
              <MenuItem value={10}>Web Development</MenuItem>
              <MenuItem value={20}>Code Tutoring and/or Teaching</MenuItem>
              <MenuItem value={30}>Software Consultation</MenuItem>
              <MenuItem value={30}>Debugging</MenuItem>
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
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: `${classes.overrideInput}`,
                  },
                }}
                InputLabelProps={{
                  color: "secondary",
                  classes: {
                    root: `${classes.overrideLabel} `,
                  },
                }}
                multiline={input.multi && input.multi}
                rows={input.rowsMin && input.rowsMin}
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
            Got a project? don’t hesitate to contact.
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
