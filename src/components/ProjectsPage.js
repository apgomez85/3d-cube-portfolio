import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Bugtracker from "./projectentries/Bugtracker";
import GetDev from "./projectentries/GetDev";
import ChatApp from "./projectentries/ChatApp";

const useStyles = makeStyles({
  card: {
    display: "flex",
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "60px"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Grid sm="10" container="true">
        <Card
          raised="true"
          className={[classes.card, "project-card"].join(" ")}
        >
          <Bugtracker />
          <CardActions>
            <Button size="small" color="primary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/apgomez85/BugTracker"
              >
                GitHub
              </a>
            </Button>
            <Button size="small" color="primary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bugtracker.adrianindevelopment.com"
              >
                Live
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card
          raised="true"
          className={[classes.card, "project-card"].join(" ")}
        >
          <GetDev />
          <CardActions>
            <Button size="small" color="primary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/apgomez85/get-dev-app"
              >
                GitHub
              </a>
            </Button>
            <Button size="small" color="primary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://get-dev.adrianindevelopment.com"
              >
                Live
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card
          raised="true"
          className={[classes.card, "project-card"].join(" ")}
        >
          <ChatApp />
          <CardActions>
            <Button size="small" color="primary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/apgomez85/chat-app"
              >
                GitHub
              </a>
            </Button>
            <Button size="small" color="primary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chat-app.adrianindevelopment.com"
              >
                Live
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
