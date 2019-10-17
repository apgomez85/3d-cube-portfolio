import React from 'react';
import Blog1 from '../components/blogentries/Blog1';
import Blog2 from '../components/blogentries/Blog2';
import Grid from '@material-ui/core/Grid';

const style = {
  display: 'flex',
  color: '#6A6C6E',
  fontFamily: 'ostrich-sans-light'
};

export default function BlogPage() {
  return (
    <Grid style={style} container spacing={3}>
      <Grid item xs={12}>
        <img
          height="140"
          width="280"
          src={require('../images/computer_desk2.jpg')}
          alt=""
        />
        <span>Some Text</span>
        <Blog1 />
      </Grid>
      <Grid item xs={12}>
        <Blog2 />
      </Grid>
    </Grid>
  );
}
