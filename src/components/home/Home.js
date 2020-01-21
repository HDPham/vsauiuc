import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, ButtonGroup, Button} from 'reactstrap';

function Home() {
	const homeBackground = {
		background: `url("${process.env.PUBLIC_URL}/images/front_page.jpg") center/cover`
	}

	return (
		<main role="main" className="d-flex align-items-center position-absolute vh-100 fade-in" style={homeBackground}>
			<Row className="m-0 py-5 vw-100" style={{backgroundColor: 'rgba(40,40,40, 0.7)'}}>
				<Col className="d-flex flex-column align-items-center text-center text-white">
					<h1 className="display-3">Vietnamese Student Association</h1>
					<h2 className="">University of Illinois Urbana-Champaign</h2>
					<ButtonGroup className="flex-wrap justify-content-center">
						<Link to="/about"><Button color="danger" className="mx-4 mt-4 px-5 py-2 bg-maroon" title="Learn More"><b>Learn More</b></Button></Link>
						<a href="https://www.facebook.com/vsauiuc" target="_blank" rel="noopener noreferrer"><Button color="danger" className="mx-4 mt-4 px-5 py-2 bg-maroon" title="VSA UIUC Facebook"><b>Visit Our Facebook</b></Button></a>
					</ButtonGroup>
				</Col>
			</Row>
		</main>
	)
}

export default Home