import React from "react";
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
} from "@material-ui/core";
import { ChevronRight as ChevronRightIcon } from "@material-ui/icons";
import {
  unstable_useMediaQuery as useMediaQuery
} from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "flex-end"
  }
});

const toListItem = ({ icon, label, onClick }, index) => (
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <Toolbar className={classes.toolbar} variant="dense" disableGutters>
        <Typography color="inherit" variant="overline">
          Fortnightly — Mar 01
        </Typography>
        <IconButton color="inherit" onClick={onClose}>
          <ChevronRightIcon />
        </IconButton>
      </Toolbar>
      <div style={{ width }}>
        <List>
          {userItems.map(toListItem)}
        </List>
        <Divider />
        <List>
          {globalItems.map(toListItem)}
        </List>
      </div>
    </Drawer>
  );
}

export default SideBar;
