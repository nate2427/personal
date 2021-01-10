import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import emailjs from "emailjs-com";

import { useStyles } from "./styles";
import { Button, Grid } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MediaControlCard({ service, icon }) {
  const classes = useStyles();
  const [showCard, setShowCard] = React.useState(false);

  return (
    <Card className={classes.root} square elevation={0}>
      <div>
        <CardContent
          className={classes.content}
          classes={{ root: classes.overrideRoot }}
        >
          {icon}
        </CardContent>
      </div>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            align="left"
            component="h5"
            variant="h5"
            className={classes.title}
          >
            {service.title}
          </Typography>
          {service.descriptions.map((sentence, index) => (
            <Typography
              variant="body2"
              className={classes.description}
              align="left"
              key={index}
            >
              {sentence}
            </Typography>
          ))}
        </CardContent>

        <Grid container justify="flex-end">
          <Grid item md={6} xs={8} className={`${classes.buttonContainer}`}>
            <Button
              className={`${classes.button}`}
              fullWidth
              variant="contained"
              color="secondary"
              onClick={
                service.title === "Automation"
                  ? () => setShowCard(true)
                  : () => {
                      const url = "https://www.wyzant.com/Tutors/Nate2427";
                      const link = document.createElement("a");
                      link.href = url;
                      link.target = "_blank";
                      link.click();
                      console.log(service.buttonLink);
                    }
              }
            >
              {service.buttonText}
            </Button>
          </Grid>
        </Grid>
      </div>
      <FormDialog isOpen={showCard} setOpen={setShowCard} />
    </Card>
  );
}

function FormDialog({ isOpen, setOpen }) {
  const [email, setEmail] = React.useState("");

  const sendAutomationRequest = () => {
    const template_params = {
      email_addy: email,
    };

    const service_id = "gmail";
    const template_id = "automation_contact";
    const user_id = "user_4Sd3PL1XIEE0y4imZuIR3";
    emailjs
      .send(service_id, template_id, template_params, user_id)
      .then(() => {
        setOpen(false);
      })
      .catch(() => {
        setOpen(false);
      });
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogTitle id="form-dialog-title">
          Service Page Coming Soon
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="textPrimary">
            The AutoNate service page is down for reconstruction but will be
            back up soon! Please, leave your email below and I will directly
            reach out to you for automation creation!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              color: "secondary",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={sendAutomationRequest} color="secondary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
