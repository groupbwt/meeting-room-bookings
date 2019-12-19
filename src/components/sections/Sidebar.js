import React from "react";

export default class Sidebar extends React.Component {
	render() {
		// @todo: add sidebar content
		return (
			<React.Fragment>
				{this.props.children}
			</React.Fragment>
		)
	}
}
