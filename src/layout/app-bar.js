import React from 'react';
import { makeStyles } from "@material-ui/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import isMobile from '../helpers/mobile';

const useStyles = makeStyles({
  appToolbar: {
    justifyContent: 'space-between',
    flexDirection: isMobile ? 'row-reverse' : 'row'
  }
});

const AppBar = ({ onMenuClick }) => {
  const classes = useStyles();

  return (
    <MuiAppBar>
      <Toolbar className={classes.appToolbar} variant="dense">
        <IconButton color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography color="inherit" variant="overline">
          Fortnightly
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
