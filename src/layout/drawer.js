import React, { useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import {
  Drawer as MuiDrawer, AppBar, Toolbar, IconButton, Typography, List, Divider,
  ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import {
  Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Person as PersonIcon,
  Notifications as NotificationsIcon, ChromeReaderMode as ChromeReaderModeIcon
} from '@material-ui/icons';

import isMobile from '../helpers/mobile';

const useStyles = makeStyles({
  appToolbar: {
    justifyContent: isMobile ? 'flex-end' : 'flex-start'
  },
  drawerToolbar: {
    justifyContent: 'space-between'
  },
  drawerContent: {
    width: '300px'
  },
  topList: {
    paddingTop: '0'
  }
});

const Drawer = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(!isMobile);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const sideList = (
    <div>
      <List className={classes.topList}>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Sign In" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ChromeReaderModeIcon />
          </ListItemIcon>
          <ListItemText primary="Top Articles" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.appToolbar} variant="dense">
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MuiDrawer
        variant={isMobile ? "temporary" : "persistent"} open={isOpen}
        onClose={toggleDrawer}>
        <Toolbar className={classes.drawerToolbar} variant="dense">
          <Typography variant="h5" color="primary">
            Fortnightly
          </Typography>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <div className={classes.drawerContent}>
          {sideList}
        </div>
      </MuiDrawer>
    </div>
  );
}

export default Drawer;
