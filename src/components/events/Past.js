import React from 'react';
import {Row, Col} from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faMap, faLocationArrow, faCalendarAlt, faClock, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(faMap, faLocationArrow, faCalendarAlt, faClock, faUserCircle);

function Past(props) {
	return (
		<>
			{props.pastEvents.map(event => 
			<Row key={event.id} className="justify-content-center">
				<Col xs={8} sm={5} md={3}>
					<div className='event-date'>
						<div className='rounded-top text-center event-month'>
							<span className="text-white font-weight-bold">{event.month}</span>
						</div>
						<div className='rounded-bottom event-day'>
							{event.day}
						</div>
					</div>
					<img src={event.cover} alt="Scavenger Event" className="mw-100 rounded"></img>
				</Col>
				<Col xs={12} sm={7} md={9} className="mt-4 mt-sm-0">
					<div className="ml-0 ml-sm-4 event-info">
						<h2 className="text-center text-sm-left">{event.name}</h2>
						<div className="text-secondary font-weight-bold">
							<FontAwesomeIcon icon="map" />
							{event.locationSecondary ? 
							<>
								<span>{event.location}</span>
								<p className="info-secondary"><FontAwesomeIcon icon="location-arrow" /><span>{event.locationSecondary}</span></p>
							</> : 
							<span>{event.location}</span>
							}
							<FontAwesomeIcon icon="calendar-alt" />
							{event.startDate.toDateString() === event.endDate.toDateString() ?
							<>
								<span>{event.startDate.toLocaleDateString(undefined, {weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'})}</span>
								<p className="info-secondary"><FontAwesomeIcon icon="clock" /><span>{event.startTime} - {event.endTime}</span></p>
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
									Hosted by
									{event.admins.length > 0 &&
										event.admins.length > 1 ?
											event.admins.length > 2 ?
												event.admins.map((admin, index) => {
													if(index !== event.admins.length - 1)
														return <> {admin},</>
													return <> and {admin}</>
												})
												:
												<> {event.admins[0]} and {event.admins[1]}</>
											:
											<> {event.admins[0]}</>
									}
								</span>
							</p>
							<a href="https://www.facebook.com/vsauiuc/" target="_blank" rel="noopener noreferrer" className="text-maroon">View on Facebook</a>
						</div>
					</div>
				</Col>
			</Row>
			)}
		</>
	)
}

export default Past