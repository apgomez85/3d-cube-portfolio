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
          alt="ChatApp"
          image={require("../../images/project-pics/chat-app.PNG")}
          title="ChatApp"
          style={{ borderStyle: "ridge" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chat App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <img
              src={require("../../images/icons/nodejs-icon.svg")}
              alt=""
              style={{
                width: 60,
                height: 40
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
        <DialogTitle id="max-width-dialog-title">Chat App</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A Node JS application using socket.io to create rooms and chat with
            other people. Inludes filter for bad language and the ability to
            share your location.
            <br />
            <br />
            <img
              src={require("../../images/project-pics/chat-app.PNG")}
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
