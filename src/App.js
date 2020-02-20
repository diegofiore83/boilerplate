import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './assets/logo.svg';

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
  },
  appHeader: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)'
  },
  appText: {
    color: theme.palette.primary.contrastText,
    marginBottom: '20px'
  },
  appLogo: {
    height: '40vmin', 
    pointerEvents: 'none',
    animation: '$appLogoSpin infinite 20s linear',
  },
  '@keyframes appLogoSpin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  }
}));

const Component = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <Typography className={classes.appText} variant="h6">
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <Button variant="contained" color="secondary">
          Learn React
        </Button>
      </header>
    </div>
  );
};

Component.displayName = 'App';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
