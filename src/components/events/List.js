import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function List(props) {
	return (
		<>
			{props.events.map(event => 
			<Row tag="article" key={event.id} className="justify-content-around align-items-center">
				<Col xs={8} md={5} lg={4} xl={3}>
					<div className='event-date text-center font-weight-bold'>
						<div className='rounded-top text-white event-month'>
							{event.month}
						</div>
						<div className='rounded-bottom event-day'>
							{event.day}
						</div>
					</div>
					<img src={event.img} alt={event.name} className="w-100 h-100 rounded"></img>
				</Col>
				<Col xs={12} md={7} className="mt-4 mt-md-0 event-info">
					<h3 className="text-center text-md-left">{event.name}</h3>
					<div className="text-secondary font-weight-bold">
						<FontAwesomeIcon icon="map" />
						{event.locationSecondary ? 
						<>
							<span>{event.location}</span>
							<p className="ml-5"><FontAwesomeIcon icon="location-arrow" /><span>{event.locationSecondary}</span></p>
						</> : 
						<span>{event.location}</span>
						}
						<FontAwesomeIcon icon="calendar-alt" />
						{event.startDate.toDateString() === event.endDate.toDateString() ?
						<>
							<span>{event.startDate.toLocaleDateString(undefined, {weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'})}</span>
							<p className="ml-5"><FontAwesomeIcon icon="clock" /><span>{event.startTime} - {event.endTime}</span></p>
						</>
						:
						<>
							<span>{event.startDate.toLocaleDateString(undefined, {weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'})} - {event.endDate.toLocaleDateString(undefined, {weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'})}</span>
							<p className="ml-5 text-secondary font-weight-bold"><FontAwesomeIcon icon="clock" /><span>{event.startDate.toLocaleDateString()} at {event.startTime} to {event.endDate.toLocaleDateString()} at {event.endTime}</span></p>
						</>
						}
						<p>
							<FontAwesomeIcon icon="user-circle" />
							<span>
								Hosted by&nbsp;
								{event.admins.length > 0 &&
									event.admins.length > 1 ?
										event.admins.length > 2 ?
											`${event.admins.slice(0, -1).join(', ')}, and ${event.admins.slice(-1)}`
											:
											`${event.admins[0]} and ${event.admins[1]}`
										:
										event.admins[0]
								}
							</span>
						</p>
						<a href="https://www.facebook.com/vsauiuc/" target="_blank" rel="noopener noreferrer" className="text-maroon">View on Facebook</a>
					</div>
				</Col>
			</Row>
			)}
		</>
	)
}

export default List