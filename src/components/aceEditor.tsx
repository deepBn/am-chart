import React from "react";
import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/ace';

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";


const AceEditorComponent = () => {

    return (
        <div >

            <AceEditor
                mode="python"
                theme="twilight"
                width="100%"
                fontSize={20}
                showGutter={true}
                showPrintMargin={false}
                placeholder="// some comment"
                highlightActiveLine={true}
                // onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                // commands={["hi"]}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                }}
            />
        </div>
    )
}
export default AceEditorComponent;
