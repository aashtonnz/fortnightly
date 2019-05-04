import React from 'react';
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Drawer,
  Toolbar,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';
import {
  unstable_useMediaQuery as useMediaQuery
} from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
    padding: '0 6px 0 18px'
  },
  topList: {
    paddingTop: '0'
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={isOpen}
      onClose={onClose}
    >
      <Toolbar className={classes.toolbar} variant="dense" disableGutters>
        <Typography color="inherit" variant="overline">
          Fortnightly — Mar 01
        </Typography>
        <IconButton color="inherit" onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <div style={{ width }}>
        <List className={classes.topList}>
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
