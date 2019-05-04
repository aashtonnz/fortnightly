import React from 'react';
import { makeStyles } from "@material-ui/styles";
import {
  Drawer,
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

const SideBar = ({ userItems, globalItems, isOpen, onClose, width }) => {
  const classes = useStyles();

  return (
    <Drawer
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
      <div style={{ width }}>
        <List>
          {userItems.map(mapItem)}
        </List>
        <Divider />
        <List>
          {globalItems.map(mapItem)}
        </List>
      </div>
    </Drawer>
  );
}

export default SideBar;
