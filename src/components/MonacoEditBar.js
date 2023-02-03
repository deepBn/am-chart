// import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import styles from "../styles/barChart.module.css";

import Editor from "@monaco-editor/react";
import dynamic from "next/dynamic";
import { useRef } from "react";
// const Editor = dynamic(() => import("@monaco-editor/react"), {
//   ssr: false,
// });

function MonacoEditBar() {
  const options = {
    acceptSuggestionOnCommitCharacter: true,
    acceptSuggestionOnEnter: "on",
    accessibilitySupport: "auto",
    autoIndent: false,
    automaticLayout: true,
    codeLens: true,
    colorDecorators: true,
    contextmenu: true,
    cursorBlinking: "blink",
    cursorSmoothCaretAnimation: false,
    cursorStyle: "line",
    disableLayerHinting: false,
    disableMonospaceOptimizations: false,
    dragAndDrop: false,
    fixedOverflowWidgets: false,
    folding: true,
    foldingStrategy: "auto",
    fontLigatures: false,
    formatOnPaste: false,
    formatOnType: false,
    hideCursorInOverviewRuler: false,
    highlightActiveIndentGuide: true,
    links: true,
    mouseWheelZoom: false,
    multiCursorMergeOverlapping: true,
    multiCursorModifier: "alt",
    overviewRulerBorder: true,
    overviewRulerLanes: 2,
    quickSuggestions: true,
    quickSuggestionsDelay: 100,
    readOnly: false,
    renderControlCharacters: false,
    renderFinalNewline: true,
    renderIndentGuides: true,
    renderLineHighlight: "all",
    renderWhitespace: "none",
    revealHorizontalRightPadding: 30,
    roundedSelection: true,
    rulers: [],
    scrollBeyondLastColumn: 5,
    scrollBeyondLastLine: true,
    selectOnLineNumbers: true,
    selectionClipboard: true,
    selectionHighlight: true,
    showFoldingControls: "mouseover",
    smoothScrolling: false,
    suggestOnTriggerCharacters: true,
    wordBasedSuggestions: true,
    wordSeparators: "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
    wordWrap: "off",
    wordWrapBreakAfterCharacters: "\t})]?|&,;",
    wordWrapBreakBeforeCharacters: "{([+",
    wordWrapBreakObtrusiveCharacters: ".",
    wordWrapColumn: 80,
    wordWrapMinified: true,
    wrappingIndent: "none",
  };
  const editorRef = useRef(null);
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  // const showValue = () => {
  //   alert(editorRef.current.getValue());
  // };
  function handleEditorValidation(markers) {
    // model markers
    markers.forEach((marker) => console.log("onValidate:", marker.message));
  }
  return (
    <>
      {/* <button onClick={showValue}>Show value</button> */}
      <div className={styles.editbar}>
        <div>
          <p>Untitle Script</p>
        </div>
        <div className={styles.editbar_right}>
          <p>Open</p>
          <p>Save</p>
          <p>Add to Chart</p>
          <p>Publish script</p>
          <p onClick={() => window.open("monacoEditor", "_blank")}>...</p>
        </div>
      </div>
      <Editor
        {...options}
        height="90vh"
        defaultLanguage="python"
        defaultValue="// some comment"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        onValidate={handleEditorValidation}
      />
    </>
  );
}
export default MonacoEditBar;
