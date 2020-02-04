import React from 'react';
import { Row, Col } from 'reactstrap';

function Calendar(props) {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const calendarDates = () => {
		const currDate = new Date();
		const firstDate = new Date(currDate.getFullYear(), currDate.getMonth());
		const numOfBlanks = firstDate.getDay();
		const numOfDays = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0).getDate();
		const rows = [];
		let cols = [];
		let pastCount = 0;
		let upcCount = 0;
		for(; pastCount < props.pastEvents.length; pastCount++) {
			if(props.pastEvents[pastCount].endDate.getTime() >= firstDate.getTime())
				break;
		}
		for(let i = 1; i <= 7 * Math.ceil((numOfBlanks + numOfDays)/7); i++) {
			if(i <= numOfBlanks || i > numOfBlanks + numOfDays)
				cols.push(<Col key={i} className="border w-auto" style={{flexBasis: 'auto'}}><div style={{paddingTop: '100%'}}></div></Col>);
			else {
				if(pastCount < props.pastEvents.length && i - numOfBlanks >= props.pastEvents[pastCount].startDate.getDate() && i - numOfBlanks <= props.pastEvents[pastCount].endDate.getDate()) {
					cols.push(
						<Col key={i} className="border w-auto" style={{flexBasis: 'auto', backgroundColor: 'coral'}}>
							<div className="position-relative" style={{paddingTop: '100%'}}>
								<span className="position-absolute" style={{top: 0, right: 0}}>{i - numOfBlanks}</span>
								<div className="d-none d-md-block position-absolute w-100 font-weight-bold" style={{top: '50%', transform: 'translateY(-50%)'}}>{props.pastEvents[pastCount].name}</div>
							</div>
						</Col>
					);
					if(i - numOfBlanks >= props.pastEvents[pastCount].endDate.getDate())
						pastCount++;
				}
				else if(upcCount < props.upcEvents.length && i - numOfBlanks >= props.upcEvents[upcCount].startDate.getDate() && i - numOfBlanks <= props.upcEvents[upcCount].endDate.getDate()) {
					cols.push(
						<Col key={i} className="border w-auto" style={{flexBasis: 'auto', backgroundColor: 'coral'}}>
							<div className="position-relative" style={{paddingTop: '100%'}}>
								<span className="position-absolute" style={{top: 0, right: 0}}>{i - numOfBlanks}</span>
								<div className="d-none d-md-block position-absolute w-100 font-weight-bold" style={{top: '50%', transform: 'translateY(-50%)'}}>{props.upcEvents[upcCount].name}</div>
							</div>
						</Col>
					);
					if(i - numOfBlanks >= props.upcEvents[upcCount].endDate.getDate())
						upcCount++;
				}
				else {
					cols.push(
						<Col key={i} className="border w-auto" style={{flexBasis: 'auto'}}>
							<div className="position-relative" style={{paddingTop: '100%'}}>
								<span className="position-absolute" style={{top: 0, right: 0}}>{i - numOfBlanks}</span>
							</div>
						</Col>
					);
				}
			}
			if(i % 7 === 0) {
				rows.push(
					<Row key={i}>
						{cols}
					</Row>
				);
				cols = [];
			}
		}
		return rows;
	};
	
	return (
		<section className="text-center">
			<h3>{props.currDate.toLocaleDateString(undefined, {month: 'long', year: 'numeric'})}</h3>
			<Row>
				{days.map(day => <Col key={day}>{day}</Col>)}
			</Row>
			{calendarDates()}
		</section>
	)
}

export default Calendar;