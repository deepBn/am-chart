import AceEditor from "react-ace";
import { split as SplitEditor } from "react-ace";
// import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
function AceCodeEditor() {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  return (
    <>
      {/* <h1>React-ace</h1> */}
      <AceEditor
        width="500px"
        height="500px"
        placeholder="// write some code"
        mode="python"
        theme="monokai"
        focus={true}
        cursorStart={1}
        onChange={onChange}
        fontSize={18}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
          useWorker: false,
        }}
      />
    </>
  );
}

export default AceCodeEditor;
