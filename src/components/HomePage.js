import React from 'react';
import Grid from '@material-ui/core/Grid';

const style = {
  display: 'flex',
  color: '#6A6C6E',
  fontFamily: 'ostrich-sans-light',
  lineHeight: '1.25'
};

export default function HomePage() {
  return (
    <div>
      <Grid justify="center" container={true}>
        <h2 style={style}>Adrian Gomez</h2>
      </Grid>
    </div>
  );
}
