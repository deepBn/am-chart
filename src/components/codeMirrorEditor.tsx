import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

export default function CodeMirrorEditor() {
  
     
  return (
    <>
     
      <CodeMirror
        value=""
        height="100vh"
        width="100%"
        theme="dark"
        autoFocus={true}
        placeholder="// some comment"
        // autocompletion={options}
        // options={{
        //   autocompletion: true,
        //   lineNumbers: true,
        // }}
        extensions={[python()]}
      />
    </>
  );
}