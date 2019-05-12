import React, { useState } from "react";
import { Editor, EditorState, ContentState } from "draft-js";
import { makeStyles } from "@material-ui/styles";

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

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend posuere scelerisque. Quisque non lectus congue, faucibus urna sed, rhoncus justo. Integer vel tristique ligula. Mauris blandit massa eget risus tempus ultrices. Ut fermentum velit vel mi semper, eget finibus felis vestibulum. Curabitur eget varius enim. Vivamus semper mattis placerat.

Cras vel molestie mi. Etiam eget purus eu turpis porta blandit vitae vitae risus. Ut ex nulla, facilisis a ipsum et, auctor dictum enim. Vestibulum congue nulla est, at hendrerit eros dignissim sed. Curabitur pulvinar massa ut lacus fringilla, tempor aliquet augue mollis. Nam rhoncus, tortor euismod vestibulum consectetur, orci lacus sodales tortor, eget ornare orci elit sit amet est. Mauris at ipsum condimentum, euismod libero tristique, congue leo. Phasellus id nibh in orci posuere euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam commodo urna enim, a blandit diam mollis non. Curabitur eros eros, luctus eget lacinia eget, laoreet a lacus. Nam at nibh vehicula tortor auctor hendrerit eu at libero. Aliquam lorem erat, facilisis vitae libero euismod, vestibulum auctor tortor. Maecenas tellus nibh, aliquet et purus in, vestibulum congue nisi.

Vestibulum ornare ligula hendrerit est facilisis, quis vehicula tellus tristique. Curabitur ac mi neque. Ut non ornare tortor. Nam feugiat, tortor vel ultricies venenatis, ipsum eros maximus nibh, in tincidunt massa lectus at dolor. Sed sed libero lacus. Pellentesque vitae pretium neque. Etiam ac dolor et diam venenatis lacinia. Donec nulla ligula, ultricies ut blandit non, tempus sagittis dolor. Curabitur rhoncus augue faucibus tortor dapibus ultrices. Aliquam condimentum aliquet ante, nec porta nisl commodo eget. Vestibulum tristique non arcu vitae molestie. In hac habitasse platea dictumst. Nam convallis, lectus quis mattis accumsan, enim odio luctus odio, at tempus elit nisl vel tortor.

Phasellus ac mi in metus blandit porttitor sed ac risus. Pellentesque interdum erat tortor, a malesuada leo ultricies a. In quis dui nec nisl rutrum placerat. Integer convallis pulvinar ex ac porttitor. Nulla condimentum ante nec massa tempus pharetra. Praesent iaculis eget nunc in gravida. Integer vitae ultrices turpis. Morbi et tellus ac enim lacinia ullamcorper in scelerisque orci. Praesent efficitur faucibus ligula, id semper nibh ultrices tempor. Pellentesque eget lorem lobortis lectus sollicitudin aliquet. Sed congue finibus purus id molestie.

Nam interdum mauris et imperdiet interdum. Suspendisse vestibulum lobortis eros non convallis. Nunc vehicula quis quam at aliquet. Nulla lobortis felis arcu, ultricies placerat elit cursus consequat. Integer faucibus felis vel cursus lobortis. Nulla non gravida neque. Nulla et nunc ut sem efficitur luctus ullamcorper vitae arcu. Vivamus condimentum, odio sit amet fringilla vulputate, ex lorem tincidunt risus, in pulvinar tortor turpis ut orci. Phasellus laoreet tortor nulla, et maximus mauris tincidunt at. Vivamus commodo neque at vulputate auctor. Fusce faucibus libero at nibh malesuada viverra. Vestibulum dui odio, dictum id euismod non, dignissim sed elit. Nam fringilla elit eu mattis gravida. Duis eget fermentum leo. Sed consequat laoreet elit bibendum elementum. Sed faucibus auctor ante id facilisis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend posuere scelerisque. Quisque non lectus congue, faucibus urna sed, rhoncus justo. Integer vel tristique ligula. Mauris blandit massa eget risus tempus ultrices. Ut fermentum velit vel mi semper, eget finibus felis vestibulum. Curabitur eget varius enim. Vivamus semper mattis placerat.

Cras vel molestie mi. Etiam eget purus eu turpis porta blandit vitae vitae risus. Ut ex nulla, facilisis a ipsum et, auctor dictum enim. Vestibulum congue nulla est, at hendrerit eros dignissim sed. Curabitur pulvinar massa ut lacus fringilla, tempor aliquet augue mollis. Nam rhoncus, tortor euismod vestibulum consectetur, orci lacus sodales tortor, eget ornare orci elit sit amet est. Mauris at ipsum condimentum, euismod libero tristique, congue leo. Phasellus id nibh in orci posuere euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam commodo urna enim, a blandit diam mollis non. Curabitur eros eros, luctus eget lacinia eget, laoreet a lacus. Nam at nibh vehicula tortor auctor hendrerit eu at libero. Aliquam lorem erat, facilisis vitae libero euismod, vestibulum auctor tortor. Maecenas tellus nibh, aliquet et purus in, vestibulum congue nisi.

Vestibulum ornare ligula hendrerit est facilisis, quis vehicula tellus tristique. Curabitur ac mi neque. Ut non ornare tortor. Nam feugiat, tortor vel ultricies venenatis, ipsum eros maximus nibh, in tincidunt massa lectus at dolor. Sed sed libero lacus. Pellentesque vitae pretium neque. Etiam ac dolor et diam venenatis lacinia. Donec nulla ligula, ultricies ut blandit non, tempus sagittis dolor. Curabitur rhoncus augue faucibus tortor dapibus ultrices. Aliquam condimentum aliquet ante, nec porta nisl commodo eget. Vestibulum tristique non arcu vitae molestie. In hac habitasse platea dictumst. Nam convallis, lectus quis mattis accumsan, enim odio luctus odio, at tempus elit nisl vel tortor.

Phasellus ac mi in metus blandit porttitor sed ac risus. Pellentesque interdum erat tortor, a malesuada leo ultricies a. In quis dui nec nisl rutrum placerat. Integer convallis pulvinar ex ac porttitor. Nulla condimentum ante nec massa tempus pharetra. Praesent iaculis eget nunc in gravida. Integer vitae ultrices turpis. Morbi et tellus ac enim lacinia ullamcorper in scelerisque orci. Praesent efficitur faucibus ligula, id semper nibh ultrices tempor. Pellentesque eget lorem lobortis lectus sollicitudin aliquet. Sed congue finibus purus id molestie.

Nam interdum mauris et imperdiet interdum. Suspendisse vestibulum lobortis eros non convallis. Nunc vehicula quis quam at aliquet. Nulla lobortis felis arcu, ultricies placerat elit cursus consequat. Integer faucibus felis vel cursus lobortis. Nulla non gravida neque. Nulla et nunc ut sem efficitur luctus ullamcorper vitae arcu. Vivamus condimentum, odio sit amet fringilla vulputate, ex lorem tincidunt risus, in pulvinar tortor turpis ut orci. Phasellus laoreet tortor nulla, et maximus mauris tincidunt at. Vivamus commodo neque at vulputate auctor. Fusce faucibus libero at nibh malesuada viverra. Vestibulum dui odio, dictum id euismod non, dignissim sed elit. Nam fringilla elit eu mattis gravida. Duis eget fermentum leo. Sed consequat laoreet elit bibendum elementum. Sed faucibus auctor ante id facilisis.`;

const content = new ContentState.createFromText(lipsum);

const ArticleEditor = () => {
  const classes = useStyles();
  const [ editorState, setEditorState ] = useState(EditorState.createWithContent(content));

  const handleStateUpdate = (editorState) => {
    setEditorState(editorState);
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