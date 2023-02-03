// import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import styles from "../styles/barChart.module.css";

// import Editor from "@monaco-editor/react";
import dynamic from "next/dynamic";
import { useRef } from "react";
const Editor = dynamic(() => import("@/components/MonacoEditBar"), {
  ssr: false,
});

function MonacoEdit() {
  return (
    <>
      {/* <button onClick={showValue}>Show value</button> */}
      <Editor />
    </>
  );
}
export default MonacoEdit;
