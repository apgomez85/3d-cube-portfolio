import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={[classes.card, 'project-card'].join(' ')}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project 1"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Project 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Project 1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Project 1 description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            GitHub
          </Button>
          <Button size="small" color="primary">
            Live
          </Button>
        </CardActions>
      </Card>
      <Card className={[classes.card, 'project-card'].join(' ')}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project 1"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Project 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Project 1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Project 1 description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            GitHub
          </Button>
          <Button size="small" color="primary">
            Live
          </Button>
        </CardActions>
      </Card>
      <Card className={[classes.card, 'project-card'].join(' ')}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project 1"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Project 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Project 1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Project 1 description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            GitHub
          </Button>
          <Button size="small" color="primary">
            Live
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
