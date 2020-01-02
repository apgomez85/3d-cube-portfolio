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
          alt="Bugtracker"
          image={require("../../images/project-pics/bugtracker.PNG")}
          title="Bugtracker"
          style={{ borderStyle: "ridge" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bugtracker
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
        <DialogTitle id="max-width-dialog-title">Bugtracker</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A fullstack app using the MERN stack. With this app you can register
            bugs to fix in your project. Assign them to a particular user and
            group. Only users with admin privilages can modify users and delete
            bugs. Login is required to use the application.
            <br />
            <br />
            *Login using admin@example.com:admin123*
            <br />
            <br />
            <img
              src={require("../../images/project-pics/bugtracker.PNG")}
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
