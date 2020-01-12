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
          alt="Portfolio"
          image={require("../../images/project-pics/portfolio.png")}
          title="Portfolio"
          style={{ borderStyle: "ridge" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Portfolio
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
        <DialogTitle id="max-width-dialog-title">My Portfolio</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img
              src={require("../../images/icons/css.svg")}
              alt=""
              style={{
                width: 75,
                height: 50
              }}
            />
            <img
              src={require("../../images/icons/material-ui.png")}
              alt=""
              style={{
                width: 50,
                height: 50
              }}
            />
            <img
              src={require("../../images/icons/reactjs-icon.svg")}
              alt=""
              style={{
                width: 75,
                height: 50
              }}
            />
            <br />
            This very site. When I started my portfolio I had an idea of making
            the navigation a cube-like transition. I used Material-UI with a
            combination of CSS transitions. Looking back, it would have been a
            lot easier to just use straight CSS. It was a learning experience
            and I'm satisfied with the outcome. Perhaps a simpler website would
            be better for my portfolio, but I have a strong attachment to this
            design for some reason.
            <br />
            <br />
            <img
              src={require("../../images/project-pics/portfolio.png")}
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
