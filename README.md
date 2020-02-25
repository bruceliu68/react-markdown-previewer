# react-markdown-previewer

react markdown解析器

## Usage

### react-markdown-previewer

安装

```sh
npm install --save-dev react-markdown-previewer
```
使用

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";

const titleMd = "# 这是h1标签";
const codeMd = "<button>测试</button>";

ReactDOM.render(
    <div>
        <MdPreviewer md={titleMd}></MdPreviewer>
        <CodePreviewer code={codeMd} showCode={true}>
            <button>测试</button>
        </CodePreviewer>
    </div>,
    document.getElementById('app')
);
```

## License
MIT