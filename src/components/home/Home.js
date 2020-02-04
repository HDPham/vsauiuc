import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'reactstrap';

function Home() {
	return (
		<main role="main" id="home" className="d-flex align-items-center min-vh-100 w-100 fade-in" style={{background: `url("${process.env.PUBLIC_URL}/images/front_page.jpg") center/cover`}}>
			<section className="d-flex flex-column align-items-center text-center text-white py-5 vw-100">
				<h2 className="display-3">Vietnamese Student Association</h2>
				<p className="h3">University of Illinois Urbana-Champaign</p>
				<ButtonGroup className="flex-wrap justify-content-center">
					<Link to="/about" className="mx-4 mt-4"><Button color="danger" className="px-5 py-2 font-weight-bold bg-maroon" title="Learn More">Learn More</Button></Link>
					<a href="https://www.facebook.com/vsauiuc" target="_blank" rel="noopener noreferrer" className="mx-4 mt-4"><Button color="danger" className="px-5 py-2 font-weight-bold bg-maroon" title="VSA UIUC Facebook">Visit Our Facebook</Button></a>
				</ButtonGroup>
			</section>
		</main>
	)
}

export default Home