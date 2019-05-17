import React, { useState, useEffect } from "react";
import { Editor, EditorState, ContentState } from "draft-js";
import { makeStyles } from "@material-ui/styles";
import axios from "./axios";

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: "800px",
    margin: "auto",
    marginBottom: "50px"
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
    titleState,
    setTitleState
  ] = useState(EditorState.createWithContent(ContentState.createFromText("")))
  const [
    editorState,
    setEditorState
  ] = useState(EditorState.createWithContent(ContentState.createFromText("")));
  const [plainText, setPlainText] = useState();
  const [titlePlainText, setTitlePlainText] = useState();

  useEffect(() => {
    axios.get("/article/LeugTW6wlrH0VTHNOrJ.json")
      .then(response => {
        let [ newPlainText, newTitlePlainText ] = ["", ""];
        if (response.data) {
          newPlainText = response.data.plainText;
          newTitlePlainText = response.data.titlePlainText;
        }
        const content = ContentState.createFromText(newPlainText);
        const titleContent = ContentState.createFromText(newTitlePlainText);
        setEditorState(EditorState.createWithContent(content));
        setPlainText(newPlainText);
        setTitleState(EditorState.createWithContent(titleContent));
        setTitlePlainText(newPlainText);
        console.log(response);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    axios.put("/article/LeugTW6wlrH0VTHNOrJ.json", { plainText, titlePlainText })
      .then(console.log)
      .catch(console.log);
  }, [plainText, titlePlainText]);

  const handleEditorStateUpdate = (newEditorState) => {
    const newPlainText = newEditorState.getCurrentContent().getPlainText();
    setEditorState(newEditorState);
    setPlainText(newPlainText);
  };

  const handleTitleStateUpdate = (newTitleState) => {
    const newPlainText = newTitleState.getCurrentContent().getPlainText();
    setTitleState(newTitleState);
    setTitlePlainText(newPlainText);
  };

  return (
    <>
      <div className={classes.paper}>
        <div className={classes.marginBox}>
          <div className={classes.topLeftMarker} />
          <div className={classes.topRightMarker} />
        </div>
        <div className={classes.editor}>
          <Editor editorState={titleState} onChange={handleTitleStateUpdate} />
        </div>
        <div className={classes.marginBox}>
          <div className={classes.bottomRightMarker} />
          <div className={classes.bottomLeftMarker} />
        </div>
      </div>
      <div className={classes.paper}>
        <div className={classes.marginBox}>
          <div className={classes.topLeftMarker} />
          <div className={classes.topRightMarker} />
        </div>
        <div className={classes.editor}>
          <Editor editorState={editorState} onChange={handleEditorStateUpdate} />
        </div>
        <div className={classes.marginBox}>
          <div className={classes.bottomRightMarker} />
          <div className={classes.bottomLeftMarker} />
        </div>
      </div>
    </>
  );
};

export default ArticleEditor;