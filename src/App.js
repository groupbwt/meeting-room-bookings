import React from 'react';
import Header from "components/Header";
import Body from "components/Body";
import {Button} from "@blueprintjs/core";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: process.env.REACT_APP_WEBSITE_NAME,
			navbarFixedToTop: true
		};
	}

	handleOpenSettings = () => {
		// @todo: implement settings dialog
	};

	render() {
		const {title, navbarFixedToTop} = this.state;
		// @todo: add sidebar content
		const sidebar = (
			<React.Fragment>
				Lorem ipsum
			</React.Fragment>
		);

		return (
			<React.Fragment>
				<Header title={title} fixedToTop={navbarFixedToTop}>
					<Button className="bp3-minimal" icon="cog" onClick={this.handleOpenSettings}/>
				</Header>

				<Body offsetTop={navbarFixedToTop} sidebarWidth={230} sidebar={sidebar}>
					{/* @todo: add calendar */}
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque deleniti, dicta dolorem eius error
					hic itaque nam necessitatibus nobis quae quasi reprehenderit similique, soluta tempora temporibus tenetur,
					velit veritatis!
				</Body>
			</React.Fragment>
		)
	}
};
