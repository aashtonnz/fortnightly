import React, { useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import MuiDrawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import isMobile from '../helpers/mobile-helper';

const useStyles = makeStyles({
  toobar: {
    justifyContent: "flex-end"
  }
});

const Drawer = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(!isMobile);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleIcon = isOpen ? <CloseIcon /> : <MenuIcon />;

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toobar} variant="dense">
          <IconButton
            color="inherit"
            onClick={toggleDrawer}>
            {toggleIcon}
          </IconButton>
        </Toolbar>
      </AppBar>
      <MuiDrawer
        variant={isMobile ? "temporary" : "persistent"}
        open={isOpen}
        onClose={toggleDrawer}>
        SIDE_LIST SIDE_LIST SIDE_LIST SIDE_LIST
      </MuiDrawer>
    </div>
  );
}

export default Drawer;
