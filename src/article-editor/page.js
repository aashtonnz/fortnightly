import React, { useState, useEffect } from "react";
import { Editor, EditorState, ContentState } from "draft-js";
import { makeStyles } from "@material-ui/styles";

import axios from './axios-article';

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: "800px",
    margin: "auto"
  },
  editor: {
    padding: "0 10px",
    textAlign: "justify"
  },
  marginBox: {
    display: "flex",
    justifyContent: "space-between"
  },
  topLeftMarker: {
    borderRight: "1px solid lightgrey",
    borderBottom: "1px solid lightgrey",
    width: "10px",
    height: "10px"
  },
  topRightMarker: {
    borderLeft: "1px solid lightgrey",
    borderBottom: "1px solid lightgrey", 
    width: "10px",
    height: "10px"
  },
  bottomRightMarker: {
    borderRight: "1px solid lightgrey",
    borderTop: "1px solid lightgrey", 
    width: "10px",
    height: "10px"
  },
  bottomLeftMarker: {
    borderLeft: "1px solid lightgrey",
    borderTop: "1px solid lightgrey", 
    width: "10px",
    height: "10px"
  }
}));

const ArticleEditor = () => {
  const classes = useStyles();
  const [
    editorState,
    setEditorState
  ] = useState(EditorState.createWithContent(ContentState.createFromText("")));
  const [plainText, setPlainText] = useState();

  useEffect(() => {
    axios.get("/article/LeugTW6wlrH0VTHNOrJ.json")
      .then(response => {
        const newPlainText = response.data.plainText;
        const content = new ContentState.createFromText(newPlainText);
        setEditorState(EditorState.createWithContent(content));
        setPlainText(newPlainText);
        console.log(response);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    axios.put("/article/LeugTW6wlrH0VTHNOrJ.json", { plainText })
      .then(console.log)
      .catch(console.log);
  }, [plainText]);

  const handleStateUpdate = (newEditorState) => {
    const newPlainText = newEditorState.getCurrentContent().getPlainText();
    setEditorState(newEditorState);
    setPlainText(newPlainText);
  };

  return (
    <div className={classes.paper}>
      <div className={classes.marginBox}>
        <div className={classes.topLeftMarker} />
        <div className={classes.topRightMarker} />
      </div>
      <div className={classes.editor}>
        <Editor editorState={editorState} onChange={handleStateUpdate} />
      </div>
      <div className={classes.marginBox}>
        <div className={classes.bottomRightMarker} />
        <div className={classes.bottomLeftMarker} />
      </div>
    </div>
  );
};

export default ArticleEditor;