import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          component="img"
          alt="Get-Dev"
          image={require("../../images/project-pics/get-dev.PNG")}
          title="Get-Dev"
          style={{ borderStyle: "ridge" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Get-Dev
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <img
              src={require("../../images/icons/mongodb.svg")}
              alt=""
              style={{
                width: 60,
                height: 40
              }}
            />
            <img
              src={require("../../images/icons/expressjs.svg")}
              alt=""
              style={{
                width: 40,
                height: 25
              }}
            />
            <br />
            <img
              src={require("../../images/icons/reactjs-icon.svg")}
              alt=""
              style={{
                width: 40,
                height: 30
              }}
            />
            <img
              src={require("../../images/icons/nodejs-icon.svg")}
              alt=""
              style={{
                width: 40,
                height: 30
              }}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <Dialog
        fullWidth="true"
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Get-Dev</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A fullstack app using the MERN stack. A social media app for web
            developers. Users are able to make an account that lists their
            skills, education and work experience. It is possible to write a
            post, with the ability to comment, like and dislike. Gravatar is
            used for the profile image.
            <br />
            <br />
            <img
              src={require("../../images/project-pics/get-dev.PNG")}
              alt=""
              style={{
                width: 425,
                height: 250,
                borderStyle: "ridge"
              }}
            />
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
