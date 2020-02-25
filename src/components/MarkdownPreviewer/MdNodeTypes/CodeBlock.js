import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx, javascript, json, less, sass, scss } from "react-syntax-highlighter/dist/esm/languages/prism";

class CodeBlock extends PureComponent {
	static propTypes = {
		value: PropTypes.string.isRequired,
		language: PropTypes.string
	};

	static defaultProps = {
		language: null
	};

	componentWillMount() {
		// 注册markdown代码样式
		SyntaxHighlighter.registerLanguage("jsx", jsx);
		SyntaxHighlighter.registerLanguage("javascript", javascript);
		SyntaxHighlighter.registerLanguage("json", json);
		SyntaxHighlighter.registerLanguage("less", less);
		SyntaxHighlighter.registerLanguage("sass", sass);
		SyntaxHighlighter.registerLanguage("scss", scss);
	}

	render() {
		const { language, value } = this.props;
		return (
			<figure className="highlight">
				<SyntaxHighlighter language={language} style={coy}>
					{value}
				</SyntaxHighlighter>
			</figure>
		);
	}
}

export default CodeBlock;
