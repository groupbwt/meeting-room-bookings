import React from 'react';

import Header from "components/Header";
import Body from "components/Body";
import ModalButton from "./components/buttons/ModalButton";
import Settings from "./components/sections/Settings";
import Sidebar from "./components/sections/Sidebar";
import Main from "./components/sections/Main";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: process.env.REACT_APP_WEBSITE_NAME,
			navbarFixedToTop: true,
			settingsDialogOptions: {
				icon: "cog",
				title: "Settings"
			}
		};
	}

	render() {
		const {title, navbarFixedToTop, settingsDialogOptions} = this.state;

		return (
			<React.Fragment>
				<Header title={title} fixedToTop={navbarFixedToTop}>
					<ModalButton icon="cog" minimal={true} dialogContent={<Settings/>} dialogOptions={settingsDialogOptions}/>
				</Header>

				<Body offsetTop={navbarFixedToTop} sidebarWidth={230} sidebar={<Sidebar/>}>
					<Main/>
				</Body>
			</React.Fragment>
		)
	}
};
