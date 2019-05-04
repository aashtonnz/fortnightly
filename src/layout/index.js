import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import {
  NoteAdd as NoteAddIcon,
  Public as PublicIcon
} from '@material-ui/icons';

import isMobile from '../helpers/mobile';
import AppBar from './app-bar';
import SideBar from './side-bar';

const items = {
  user: [
    {
      label: 'Create Article',
      icon: <NoteAddIcon />,
      onClick: () => alert('Create Article clicked')
    }
  ],
  global: Array(30)
    .fill({
      label: 'Top Articles',
      icon: <PublicIcon />,
      onClick: () => alert('Top Articles clicked')
    })
};

const content = (
  <div>
    <h1>This is the article title</h1>
    {Array(20).fill(<p>Lorem sit enim aute consequat labore duis. Elit fugiat anim irure fugiat ipsum laboris ea consectetur adipisicing ut cupidatat. Proident proident laborum labore ea incididunt fugiat mollit velit fugiat. Culpa magna ea fugiat qui eiusmod esse do culpa occaecat aute tempor sunt dolore esse. Tempor commodo cupidatat nisi laborum labore ad sunt cupidatat sunt. Enim eiusmod laborum ad esse sit id Lorem laboris minim deserunt quis labore Lorem. Anim et aute ad eu. Mollit amet eu id magna. Commodo tempor deserunt ea ea exercitation tempor. Cillum irure Lorem sit anim fugiat eu ullamco aliqua dolore dolore.</p>)}
  </div>
);

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

const Layout = () => {
  const classes = useStyles();
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
        {content}
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
