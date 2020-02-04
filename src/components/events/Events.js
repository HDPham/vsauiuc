import React, { useState } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Calendar from './Calendar';
import List from './List';
import classNames from 'classnames';

function Events() {
	const [activeTab, setActiveTab] = useState('1');
	const currDate = new Date();

	const upcEvents = [
		{
			id: 1,
			imgName: 'event_pizza.jpg',
			name: 'Pizza Party!',
			location: 'That One Place',
			locationSecondary: '123 Sesame Street',
			startDate: new Date(currDate.getFullYear(), currDate.getMonth() + 1, -1, 18),
			endDate: new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0, 23, 59),
			admins: ['VSA', 'PSA', 'TASC'],
			get startTime() { 
				return this.startDate.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})
			},
			get endTime() { 
				return this.endDate.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})
			},
			get month() { 
				return this.startDate.toLocaleDateString(undefined, {month: 'short'})
			}, 
			get day() { 
				return this.startDate.toLocaleDateString(undefined, {day: 'numeric'})
			}
		}
	]
	const pastEvents = [
		{
			id: 1,
			imgName: 'event_scavenger.jpg',
			name: 'Scavenger Hunt!',
			location: 'That Other Place',
			locationSecondary: '221B Baker Street',
			startDate: new Date(currDate.getFullYear(), currDate.getMonth(), 0, 12),
			endDate: new Date(currDate.getFullYear(), currDate.getMonth(), 0, 18),
			admins: ['VSA', 'PSA'],
			get startTime() { 
				return this.startDate.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})
			},
			get endTime() { 
				return this.endDate.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})
			},
			get month() { 
				return this.startDate.toLocaleDateString(undefined, {month: 'short'})
			}, 
			get day() { 
				return this.startDate.toLocaleDateString(undefined, {day: 'numeric'})
			}
		}
	]

	const toggle = tab => {
		if(activeTab !== tab) setActiveTab(tab);
	}

	return (
		<Container tag="main" role="main" id="events" className="mt-4 fade-in">
			<Nav tabs className="text-center justify-content-center justify-content-sm-start">
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
			<TabContent activeTab={activeTab} className="mt-4">
				<TabPane tabId="1" tag="section">
					<h2 className="d-none">Upcoming Events</h2>
					<List events={upcEvents}></List>
				</TabPane>
				<TabPane tabId="2" tag="section">
					<h2 className="d-none">Past Events</h2>
					<List events={pastEvents}></List>
				</TabPane>
				<TabPane tabId="3" tag="section">
					<h2 className="d-none">Calendar</h2>
					<Calendar currDate={currDate} pastEvents={pastEvents} upcEvents={upcEvents}></Calendar>
				</TabPane>
			</TabContent>
		</Container>
	)
}

export default Events;