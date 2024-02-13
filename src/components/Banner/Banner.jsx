import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: 'url(./banner2.jpg)'
  },

  banerContent: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around'
  }
}))

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.banerContent}>

      </Container>
    </div>
  )
}

export default Banner
