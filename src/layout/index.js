import React, { useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import { Paper } from '@material-ui/core';
import {
  NoteAdd as NoteAddIcon,
  Public as PublicIcon
} from '@material-ui/icons';

import isMobile from '../helpers/mobile';
import AppBar from './app-bar';
import Drawer from './drawer';

const useStyles = makeStyles({
  content: {
    height: '100vh',
    padding: '100px'
  }
});

const items = {
  user: [
    {
      label: 'Create Article',
      icon: <NoteAddIcon />,
      onClick: () => alert('Create Article clicked')
    }
  ],
  global: [
    {
      label: 'Top Articles',
      icon: <PublicIcon />,
      onClick: () => alert('Top Articles clicked')
    }
  ]
};

const Layout = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <div>
        <AppBar onMenuClick={handleToggleDrawer}/>
        <Paper className={classes.content}>
          blahblahblah
        </Paper>
      </div>
      <Drawer
        userItems={items.user}
        globalItems={items.global}
        isOpen={drawerOpen}
        onClose={handleCloseDrawer}
      />
    </>
  );
};

export default Layout;
