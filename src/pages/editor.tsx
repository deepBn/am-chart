
import React from "react";


// import AceEditorComponent from "@/components/aceEditor";
import dynamic from "next/dynamic";

const AceEditorComponent = dynamic(import('@/components/aceEditor'))
const EditorNewWindow = () => {

    return (
        <AceEditorComponent />

    )

}
export default EditorNewWindow;