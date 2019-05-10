import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Person as PersonIcon,
  NoteAdd as NoteAddIcon,
  Public as PublicIcon
} from '@material-ui/icons';

import AppBar from './app-bar';
import SideBar from './side-bar';
import {
  unstable_useMediaQuery as useMediaQuery
} from '@material-ui/core/useMediaQuery';

const items = {
  user: [
    {
      label: 'Login / Signup',
      icon: <PersonIcon />,
      onClick: () => alert('Login / Signup clicked')
    },
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

const sideBarWidth = 300;

const useStyles = makeStyles(theme => ({
  content: {
    minHeight: '100vh',
    padding: '100px',
    transition: theme.transitions.create('padding', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  shiftContent: {
    paddingLeft: `${100 + sideBarWidth}px`
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sideBarOpen, setSideBarOpen] = useState(!isMobile);

  const handleToggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  
  const handleCloseSideBar = () => {
    setSideBarOpen(false);
  };

  return (
    <>
      <AppBar onMenuClick={handleToggleSideBar}/>
      <Paper
        className={[
          classes.content,
          sideBarOpen && !isMobile ? classes.shiftContent : ''
        ].join(' ')}
      >
        {children}
      </Paper>
      <SideBar
        userItems={items.user}
        globalItems={items.global}
        width={sideBarWidth}
        isOpen={sideBarOpen}
        onClose={handleCloseSideBar}
      />
    </>
  );
};

export default Layout;
