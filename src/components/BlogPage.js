import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Blog1 from './blogentries/Blog1';
import Blog2 from './blogentries/Blog2';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 275,
    marginTop: 50
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Title
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Date
          </Typography>

          <Typography variant="body2" component="p">
            Description
          </Typography>
        </CardContent>
        <CardActions>
          <Blog1 />
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Title
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Date
          </Typography>

          <Typography variant="body2" component="p">
            Description
          </Typography>
        </CardContent>
        <CardActions>
          <Blog2 />
        </CardActions>
      </Card>
    </div>
  );
}
