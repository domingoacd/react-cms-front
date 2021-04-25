import React, { useState } from "react";
import EditorJs from 'react-editor-js';
import ContainerNoFooter from "../containers/containerNoFooter";
import { EDITOR_JS_TOOLS } from '../constants/TextEditor';
const TextEditor = (props) => {

  return (
    <ContainerNoFooter>
      <EditorJs tools={EDITOR_JS_TOOLS} placeholder="Start typing" inlineToolbar="true" />
    </ContainerNoFooter>
  );
};

export default TextEditor;
