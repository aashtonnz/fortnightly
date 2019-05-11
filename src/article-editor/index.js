import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  controlBox: {
    maxWidth: "1000px",
    margin: "auto",
    background: "darkgrey",
    height: "30px",
    marginBottom: "20px"
  },
  paper: {
    maxWidth: "1000px",
    margin: "auto"
  },
  editor: {
    padding: "0 50px"
  },
  marginBox: {
    display: "flex",
    justifyContent: "space-between"
  },
  topLeftMarker: {
    borderRight: "1px solid lightgrey",
    borderBottom: "1px solid lightgrey",
    margin: "40px 0 0 40px", 
    width: "10px",
    height: "10px"
  },
  topRightMarker: {
    borderLeft: "1px solid lightgrey",
    borderBottom: "1px solid lightgrey", 
    margin: "40px 40px 0 0", 
    width: "10px",
    height: "10px"
  },
  bottomRightMarker: {
    borderRight: "1px solid lightgrey",
    borderTop: "1px solid lightgrey", 
    margin: "0 0 40px 40px", 
    width: "10px",
    height: "10px"
  },
  bottomLeftMarker: {
    borderLeft: "1px solid lightgrey",
    borderTop: "1px solid lightgrey", 
    margin: "0 40px 40px 0", 
    width: "10px",
    height: "10px"
  }
}));

const ArticleEditor = () => {
  const classes = useStyles();
  const [ editorState, setEditorState ] = useState(EditorState.createEmpty());

  const handleStateUpdate = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <>
      <div className={classes.controlBox} />
      <Paper className={classes.paper}>
        <div className={classes.marginBox}>
          <div className={classes.topLeftMarker} />
          <div className={classes.topRightMarker} />
        </div>
        <Typography>
          <div className={classes.editor}>
            <Editor editorState={editorState} onChange={handleStateUpdate} />
          </div>
        </Typography>
        <div className={classes.marginBox}>
          <div className={classes.bottomRightMarker} />
          <div className={classes.bottomLeftMarker} />
        </div>
      </Paper>
    </>
  );
};

export default ArticleEditor;