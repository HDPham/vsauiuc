import React from 'react';
import {Row, Col} from 'reactstrap';

function Calendar(props) {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const calendarDates = () => {
		const currDate = new Date();
		const firstDate = new Date(currDate.getFullYear(), currDate.getMonth());
		const numOfDays = new Date(currDate.getFullYear(), currDate.getMonth(), 0).getDate();
		const rows = [];
		let pastCount = 0;
		let upcCount = 0;
		for(; pastCount < props.pastEvents.length; pastCount++) {
			if(props.pastEvents[pastCount].endDate.getTime() >= firstDate.getTime())
				break;
		}
		for(let i = 0, blankCount = 0, dateCount = 1; i < Math.ceil(numOfDays/7); i++) {
			let columns = [];
			for(let k = 0; k < 7; k++) {
				if(blankCount >= firstDate.getDay() && dateCount <= numOfDays) {
					if(pastCount < props.pastEvents.length && dateCount >= props.pastEvents[pastCount].startDate.getDate() && dateCount <= props.pastEvents[pastCount].endDate.getDate()) {
						columns.push(
							<Col key={i * 7 + k} className="border w-auto" style={{flexBasis: 'auto', backgroundColor: 'coral'}}>
								<div style={{paddingTop: '100%'}}>
									<span className="position-absolute" style={{top: '0', right: '5%'}}>{dateCount}</span>
									<div className="d-none d-md-block position-absolute w-100 text-center font-weight-bold" style={{top: '50%', transform: 'translateY(-50%)'}}>{props.pastEvents[pastCount].name}</div>
								</div>
							</Col>
						);
						if(dateCount >= props.pastEvents[pastCount].endDate.getDate())
							pastCount++;
					}
					else if(upcCount < props.upcEvents.length && dateCount >= props.upcEvents[upcCount].startDate.getDate() && dateCount <= props.upcEvents[upcCount].endDate.getDate()) {
						columns.push(
							<Col key={i * 7 + k} className="border w-auto" style={{flexBasis: 'auto', backgroundColor: 'coral'}}>
								<div className="position-relative" style={{paddingTop: '100%'}}>
									<span className="position-absolute" style={{top: '0', right: '5%'}}>{dateCount}</span>
									<div className="d-none d-md-block position-absolute w-100 text-center font-weight-bold" style={{top: '50%', transform: 'translateY(-50%)'}}>{props.upcEvents[upcCount].name}</div>
								</div>
							</Col>
						);
						if(dateCount >= props.upcEvents[upcCount].endDate.getDate())
							upcCount++;
					}
					else {
						columns.push(
							<Col key={i * 7 + k} className="border w-auto" style={{flexBasis: 'auto'}}>
								<div style={{paddingTop: '100%'}}>
									<span className="position-absolute" style={{top: '0', right: '5%'}}>{dateCount}</span>
								</div>
							</Col>
						);
					}
					dateCount++;
				}
				else {
					columns.push(<Col key={i * 7 + k} className="border w-auto" style={{flexBasis: 'auto'}}><div style={{paddingTop: '100%'}}></div></Col>);
					blankCount++;
				}
			}
			rows.push(
				<Row key={i}>
					{columns}
				</Row>
			);
		}
		return rows;
	}
	
	return (
		<>
			<h1 className="text-center">{props.currDate.toLocaleDateString(undefined, {month: 'long', year: 'numeric'})}</h1>
			<Row className='text-center'>
				{days.map(day => <Col key={day}>{day}</Col>)}
			</Row>
			{calendarDates()}
		</>
	)
}

export default Calendar;