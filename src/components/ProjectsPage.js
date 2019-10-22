import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    maxWidth: 345,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '60px'
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Grid sm="10" container="true">
        <Card
          raised="true"
          className={[classes.card, 'project-card'].join(' ')}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 1"
              // height="140"
              image={require('../images/computer_desk2.jpg')}
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
        <Card
          raised="true"
          className={[classes.card, 'project-card'].join(' ')}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 1"
              height="140"
              image={require('../images/computer_desk2.jpg')}
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
        <Card
          raised="true"
          className={[classes.card, 'project-card'].join(' ')}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 1"
              height="140"
              image={require('../images/computer_desk2.jpg')}
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
      </Grid>
      <Grid sm="10" container="true">
        <Card
          raised="true"
          className={[classes.card, 'project-card'].join(' ')}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 1"
              height="140"
              image={require('../images/computer_desk2.jpg')}
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
        <Card
          raised="true"
          className={[classes.card, 'project-card'].join(' ')}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 1"
              height="140"
              image={require('../images/computer_desk2.jpg')}
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
      </Grid>
    </div>
  );
}
