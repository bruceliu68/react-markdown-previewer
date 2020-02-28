import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Tooltip } from "antd";
import Clipboard from "react-clipboard.js";
import cls from "classnames";
import "./index.less";
import MdPreviewer from "../MdPreviewer";

const Image1 = require("../img/code.png");
const Image2 = require("../img/code2.png");

class CodePreviewer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cliped: false,
			showCode: false
		};
	}

	onClipSuccess = () => {
		this.setState({
			cliped: true
		});
	};
	onClipLeave = () => {
		setTimeout(() => {
			this.setState({
				cliped: false
			});
		}, 300);
	};
	componentDidMount() {
		const { showCode } = this.props;
		this.setState({
			showCode
		});
	}
	render() {
		const { children, code } = this.props;
		return (
			<div className="code-preview-container">
				<div className="cp-component">{children}</div>
				<div className="cp-operate">
					<Clipboard className="copy-wrapper" data-clipboard-text={code} onSuccess={this.onClipSuccess}>
						<Tooltip title={this.state.cliped ? "已复制" : "复制到剪贴板"} onMouseLeave={this.onClipLeave}>
							<Icon type="copy" />
						</Tooltip>
					</Clipboard>
					<Tooltip title={this.state.showCode ? "隐藏代码" : "显示代码"}>
						<img
							className="code-img"
							src={this.state.showCode ? Image2 : Image1}
							onClick={() => this.setState({ showCode: !this.state.showCode })}
						/>
					</Tooltip>
				</div>
				<div className="cp-code">
					<div className={cls({ "code-content": true, "hide-code-content": !this.state.showCode })}>
						<MdPreviewer md={code} />
					</div>
				</div>
			</div>
		);
	}
}

CodePreviewer.propTypes = {
	showCode: PropTypes.bool,
	code: PropTypes.string
};
CodePreviewer.defaultProps = {
	showCode: true
};

export default CodePreviewer;
