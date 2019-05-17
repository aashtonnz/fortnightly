import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Person as PersonIcon,
  NoteAdd as NoteAddIcon,
  Public as PublicIcon
} from "@material-ui/icons";
import {
  unstable_useMediaQuery as useMediaQuery
} from "@material-ui/core/useMediaQuery";
import AppBar from "./app-bar";
import SideBar from "./side-bar";

const items = {
  user: [
    {
      label: "Login / Signup",
      icon: <PersonIcon />,
      onClick: () => alert("Login / Signup clicked")
    },
    {
      label: "Create Articles",
      icon: <NoteAddIcon />,
      onClick: () => alert("Create Articles clicked")
    }
  ],
  global: [
    {
      label: "Top Articles",
      icon: <PublicIcon />,
      onClick: () => alert("Top Articles clicked")
    }
  ]
};

const sideBarWidth = 300;

const useStyles = makeStyles(theme => ({
  content: {
    minHeight: "100vh",
    transition: theme.transitions.create("padding", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "white",
    paddingTop: "48px"
  },
  shiftContent: {
    paddingRight: `${sideBarWidth}px`
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSideBarOpen, setIsSideBarOpen] = useState(!isMobile);

  const handleToggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  
  const handleCloseSideBar = () => {
    setIsSideBarOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setIsSideBarOpen(false);
    }
  }, []);

  return (
    <>
      <AppBar onMenuClick={handleToggleSideBar}/>
      <div
        className={[
          classes.content,
          isSideBarOpen && !isMobile ? classes.shiftContent : ""
        ].join(" ")}
      >
        {children}
      </div>
      <SideBar
        userItems={items.user}
        globalItems={items.global}
        width={sideBarWidth}
        isOpen={isSideBarOpen}
        onClose={handleCloseSideBar}
      />
    </>
  );
};

export default Layout;
