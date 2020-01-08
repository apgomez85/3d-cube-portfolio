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
          alt="Elena-Joy"
          image={require("../../images/project-pics/elena-joy.png")}
          title="Elene-Joy"
          style={{ borderStyle: "ridge" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Elena Joy Photography
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click Here For Project Summary
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
        <DialogTitle id="max-width-dialog-title">Elena Joy</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img src={require("../../images/icons/w3_html5-ar21.svg")} alt="" />
            <img
              src={require("../../images/icons/css.svg")}
              alt=""
              style={{
                width: 75,
                height: 50
              }}
            />
            <br />
            This is a landing page for a photographer. This site was made to
            have a nice modern and aesthetic layout. I used pure CSS and HTML
            with a focus on responsiveness and design.
            <br />
            <br />
            <img
              src={require("../../images/project-pics/elena-joy.png")}
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
