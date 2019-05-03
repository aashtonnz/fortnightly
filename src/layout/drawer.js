import React from 'react';
import { makeStyles } from "@material-ui/styles";
import {
  Drawer as MuiDrawer,
  Toolbar,
  IconButton,
  Typography,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

import isMobile from '../helpers/mobile';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between'
  },
  content: {
    width: '300px'
  }
});

const mapItem = ({ icon, label, onClick }, index) => (
  <ListItem key={index} button onClick={onClick}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={label} />
  </ListItem>
);

const Drawer = ({ userItems, globalItems, isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <MuiDrawer
      variant={isMobile ? "temporary" : "persistent"}
      open={isOpen}
      onClose={onClose}
    >
      <Toolbar className={classes.toolbar} variant="dense">
        <Typography variant="h5" color="primary">
          Fortnightly
        </Typography>
        <IconButton color="inherit" onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <div className={classes.content}>
        <List>
          {userItems.map(mapItem)}
        </List>
        <Divider />
        <List>
          {globalItems.map(mapItem)}
        </List>
      </div>
    </MuiDrawer>
  );
}

export default Drawer;
