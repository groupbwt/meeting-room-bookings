import React from "react";
import PropTypes from 'prop-types';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default class Main extends React.Component {
	static propTypes = {
		calendarOptions: PropTypes.object
	};
	static defaultProps = {
		calendarOptions: {}
	};

	static defaultCalendarOptions = {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		},
		firstDay: 1,
		nowIndicator: true,
		navLinks: true,
		allDaySlot: false,
		minTime: '06:00:00',
		maxTime: '20:00:00',
		businessHours: {
			daysOfWeek: [1, 2, 3, 4, 5],
			startTime: '09:00',
			endTime: '18:00',
		}
	};

	constructor(props) {
		super(props);

		this.state = {
			calendarOptions: Object.assign({}, Main.defaultCalendarOptions, this.props.calendarOptions)
		};
	}

	render() {
		const {calendarOptions} = this.state;

		return (
			<FullCalendar plugins={[dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin]} {...calendarOptions}/>
		)
	}
}
