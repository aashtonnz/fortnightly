import React from "react";
import { makeStyles } from "@material-ui/styles";

import Page from "./page";

const useStyles = makeStyles(theme => ({
  content: {
    padding: "88px 20px 40px 20px"
  }
}));

const DraftEditor = () => {
  const classes = useStyles();

  return (
    <div className={classes.content} >
      <Page />
    </div>
  );
};

export default DraftEditor;