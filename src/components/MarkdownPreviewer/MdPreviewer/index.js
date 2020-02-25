import "./index.less";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown/with-html";
import { CodeBlock, HeadingBlock } from "../MdNodeTypes";

class MdPreviewer extends PureComponent {

	render() {
		const { md } = this.props;

		return (
			<div className="markdown-previewer-container">
				<ReactMarkdown
					source={md}
					escapeHtml={false}
					renderers={{
						code: CodeBlock,
						heading: HeadingBlock
					}}
				/>
			</div>
		);
	}
}

MdPreviewer.propTypes = {
	md: PropTypes.string.isRequired
};

MdPreviewer.defaultProps = {
	md: null
};

export default MdPreviewer;
