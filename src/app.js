import React from 'react';
import ReactDOM from 'react-dom';

import { CodePreviewer, MdPreviewer } from "./components/MarkdownPreviewer";

const titleMd = "# 这是h1标签";
const codeMd = "`<button>测试</button>`";

ReactDOM.render(
    <div>
        <MdPreviewer md={titleMd}></MdPreviewer>
        <CodePreviewer code={codeMd} showCode={true}>
            <button>测试</button>
        </CodePreviewer>
    </div>,
    document.getElementById('app')
);
