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

import { useStyles } from "./styles";
import { Button, Grid } from "@material-ui/core";

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
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={setOpen(false)} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
