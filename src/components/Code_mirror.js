import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

function CodeMirrorEditor() {
  return (
    <>
      {/* <h1>Code-Mirror</h1> */}
      <CodeMirror
        value=""
        height="500px"
        width="100%"
        theme="dark"
        autoFocus="true"
        placeholder="// write code here"
        extensions={[python()]}
      />
    </>
  );
}
export default CodeMirrorEditor;
