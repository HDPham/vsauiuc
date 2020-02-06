import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Vcn() {
	return (
		<>
			<Container fluid={true} tag="main" role="main" id="vcn" className="mt-4 fade-in">
				<Row className="justify-content-center">
					<Col tag="section" xs={10} lg={8} xl={6} className="text-center">
						<h2 className="display-4 text-maroon">Vietnamese Culture Night</h2>
						<p className="lead"><b>Vietnamese Culture Night (VCN)</b> is our annual cultural event showcasing traditional/modern dances and performances. Previously known as Family Day, VCN highlights the talents of VSA UIUC members, family, and friends by celebrating the culture that brings us all together. The show is free and open to all, and includes a Vietnamese-themed dinner after the show.</p>
					</Col>
				</Row>
			</Container>
			<footer className="position-absolute py-3 w-100 text-center text-secondary fade-in" style={{bottom: '0'}}>
				Organized by the Vietnamese Student Association at the University of Illinois Urbana-Champaign. <br />
				For any questions, contact us at <a href="mailto:vsauiuc.familyday@gmail.com" className="text-maroon">vsauiuc.familyday@gmail.com</a>
			</footer>
		</>
	)
}

export default Vcn;