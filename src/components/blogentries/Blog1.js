import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Read
      </Button>
      <Dialog
        fullWidth="true"
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          The Lessons Music Taught Me For Coding
        </DialogTitle>
        <DialogContent>
          <img
            src={require("../../images/blog-pics/coding-music.jpg")}
            alt=""
            style={{
              width: 375,
              height: 250
            }}
          />
          <DialogContentText paragraph={true}>
            I've met a lot of developers from different stages in their coding
            journey. Many who are coming into the field to make a career change
            and have a better financial future. There are a ton of articles,
            blogs and youtube videos that claim you can achieve this in 3-6
            months. Sure this is possible, but I believe it to be unlikely or at
            the very least, very difficult. <br />
            <br />I believe coding is something you learn through practice. Much
            like learning an instrument. You can read and watch as many guides,
            tutorials and courses as you want, but it won't really stick with
            you, unless you put it into practice. It is also important to start
            from the bottom up. You must understand the concepts before moving
            on to the next step. I know it can seem overwhelming and monotonous,
            but it will save you a lot of headache and time in the long run.
            <br />
            <br />I have found that many developers, who have passed the
            honeymoon period of learning to code, have learned this lesson. I
            try to pass this along to people dipping their toes in the water of
            web development. It's not easy, it will not be something you can do
            expertly, or even at an intermidiate level in 3 months. Now if you
            are coding 8+ hours a day, everyday, then I can see it being a
            possibility. But this is not the case for most people. I've been
            learning to code for over two years, with a full-time job and very
            little free time to feel comfortable enough to say "I am ready."
            <br />
            <br />
            When I was learning to play guitar. I wanted to play the fun songs
            as soon as possible. This resulted in having bad and sloppy
            technique. It's not until I took formal lessons that I realized how
            important it was to take it a step at a time. When you learn a new
            song or start a new coding project. It is ideal to take it piece by
            piece. Break down each component and get it under your fingers, get
            it right, and move on to the next part. There may be adjustments to
            make later on, but they will be minor and easy to fix. Take it slow,
            learn it well and never stop improving.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
