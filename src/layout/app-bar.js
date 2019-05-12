import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  appToolbar: {
    justifyContent: "flex-end",
  }
}));

const AppBar = ({ onMenuClick }) => {
  const classes = useStyles();

  return (
    <MuiAppBar>
      <Toolbar className={classes.appToolbar} variant="dense" disableGutters>
        <Typography color="inherit" variant="overline">
          Fortnightly — Mar 01
        </Typography>
        <IconButton color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
