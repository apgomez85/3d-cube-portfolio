import React from 'react';
import { Grid } from '@material-ui/core';

const style = {
  color: 'blue',
  fontFamily: 'cursive'
};

export default function HomePage() {
  return (
    <Grid style={style} container>
      <Grid items sm>
        <h2>Adrian Gomez</h2>
      </Grid>
    </Grid>
  );
}
