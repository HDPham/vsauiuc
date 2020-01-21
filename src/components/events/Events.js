import React, {useState} from 'react';
import {Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classNames from 'classnames';
import Upcoming from './Upcoming';
import Past from './Past';
import Calendar from './Calendar';

function Events() {
	const [activeTab, setActiveTab] = useState('1');
	const currDate = new Date();
	const upcStartDateTime = new Date(currDate.getFullYear(), currDate.getMonth() + 1, -1, 18);
	const upcEndDateTime = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0, 23, 59);
	const pastStartDateTime = new Date(currDate.getFullYear(), currDate.getMonth(), 0, 12);
	const pastEndDateTime = new Date(currDate.getFullYear(), currDate.getMonth(), 0, 18);

	const upcEvents = [
		{
			id: 1,
			cover: `${process.env.PUBLIC_URL}/images/event_pizza.jpg`,
			name: 'Pizza Party!',
			location: 'That One Place',
			locationSecondary: '123 Sesame Street',
			startDate: upcStartDateTime,
			endDate: upcEndDateTime,
			startTime: upcStartDateTime.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'}),
			endTime: upcEndDateTime.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'}),
			month: upcStartDateTime.toLocaleDateString(undefined, {month: 'short'}), 
			day: upcStartDateTime.toLocaleDateString(undefined, {day: 'numeric'}),
			admins: ['VSA', 'PSA']
		}
	]
	const pastEvents = [
		{
			id: 1,
			cover: `${process.env.PUBLIC_URL}/images/event_scavenger.jpg`,
			name: 'Scavenger Hunt!',
			location: 'That Other Place',
			locationSecondary: '221B Baker Street',
			startDate: pastStartDateTime,
			endDate: pastEndDateTime,
			startTime: pastStartDateTime.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'}),
			endTime: pastEndDateTime.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'}),
			month: pastStartDateTime.toLocaleDateString(undefined, {month: 'short'}),
			day: pastStartDateTime.toLocaleDateString(undefined, {day: 'numeric'}),
			admins: ['VSA', 'PSA']
		}
	]

	const toggle = tab => {
		if(activeTab !== tab) setActiveTab(tab);
	}

	return (
		<Container tag="main" role="main" className="fade-in">
			<Row className="mt-5">
				<Col>
					<Nav tabs className="flex-column flex-sm-row text-center">
						<NavItem>
							<NavLink className={classNames({active: activeTab === '1'})} onClick={() => {toggle('1');}}>Upcoming Events</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={classNames({active: activeTab === '2'})} onClick={() => {toggle('2');}}>Past Events</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={classNames({active: activeTab === '3'})} onClick={() => {toggle('3');}}>Calendar</NavLink>
						</NavItem>
					</Nav>
				</Col>
			</Row>
			<TabContent activeTab={activeTab} className="mt-4">
				<TabPane tabId="1">
					<Upcoming upcEvents={upcEvents}></Upcoming>
				</TabPane>
				<TabPane tabId="2">
					<Past pastEvents={pastEvents}></Past>
				</TabPane>
				<TabPane tabId="3">
					<Calendar currDate={currDate} pastEvents={pastEvents} upcEvents={upcEvents}></Calendar>
				</TabPane>
			</TabContent>
		</Container>
	)
}

export default Events;