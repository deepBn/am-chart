import dynamic from "next/dynamic";
// import CodeMirrorEditor from "../components/Code_mirror";
// import AceCodeEditor from "../components/AceCodeEditor";
const AceCodeEditor = dynamic(() => import("../components/AceCodeEditor"), {
  ssr: false,
});
const CodeMirrorEditor = dynamic(() => import("../components/Code_mirror"), {
  ssr: false,
});

function AceEditBar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <AceCodeEditor />
      <CodeMirrorEditor />
    </div>
  );
}

export default AceEditBar;
