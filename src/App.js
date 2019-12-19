import React from 'react';

import Header from "components/Header";
import Body from "components/Body";
import ModalButton from "./components/buttons/ModalButton";
import Settings from "./components/sections/Settings";
import Sidebar from "./components/sections/Sidebar";
import Main from "./components/sections/Main";
import EventForm from "./components/forms/EventForm";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: process.env.REACT_APP_WEBSITE_NAME,
			navbarFixedToTop: true,
			settingsDialogOptions: {
				icon: "cog",
				title: "Settings"
			},
			eventFormDialogOptions: {
				icon: "add",
				title: 'Book Meeting Room'
			},
			calendarOptions: {
				googleCalendarApiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY,
				events: {
					googleCalendarId: process.env.REACT_APP_GOOGLE_CALENDAR_ID,
				}
			}
		};
	}

	render() {
		const {title, navbarFixedToTop, settingsDialogOptions, eventFormDialogOptions, calendarOptions} = this.state;

		const sidebar = (
			<Sidebar>
				<ModalButton icon={eventFormDialogOptions.icon} large={true} fill={true} intent={'primary'}
										 text={eventFormDialogOptions.title} dialogContent={<EventForm/>}
										 dialogOptions={eventFormDialogOptions}/>
			</Sidebar>
		);

		return (
			<React.Fragment>
				<Header title={title} fixedToTop={navbarFixedToTop}>
					<ModalButton icon={settingsDialogOptions.icon} minimal={true} dialogContent={<Settings/>}
											 dialogOptions={settingsDialogOptions}/>
				</Header>

				<Body offsetTop={navbarFixedToTop} sidebarWidth={250} sidebar={sidebar}>
					<Main calendarOptions={calendarOptions}/>
				</Body>
			</React.Fragment>
		)
	}
};
