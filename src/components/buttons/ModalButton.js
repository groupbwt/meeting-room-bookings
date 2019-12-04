import React from "react";
import PropTypes from 'prop-types';
import {Button, Dialog} from "@blueprintjs/core";

export default class ModalButton extends React.Component {
	static propTypes = {
		dialogContent: PropTypes.node.isRequired,
		dialogOptions: PropTypes.shape({
			isOpen: PropTypes.bool,
		})
	};
	static defaultProps = {
		dialogOptions: {}
	};

	constructor(props) {
		super(props);
		this.state = {
			isOpen: this.props.dialogOptions.isOpen || false
		};
	}

	toggleDialog = (isOpen = null) => {
		this.setState(state => ({
			isOpen: isOpen !== null ? Boolean(isOpen) : !state.isOpen
		}));
	};

	render() {
		const {dialogOptions, dialogContent, ...props} = this.props;

		return (
			<React.Fragment>
				<Button {...props} onClick={this.toggleDialog.bind(this, true)}/>

				<Dialog
					{...dialogOptions}
					isOpen={this.state.isOpen}
					onClose={this.toggleDialog.bind(this, false)}
				>
					{dialogContent}
				</Dialog>
			</React.Fragment>
		)
	}
}
