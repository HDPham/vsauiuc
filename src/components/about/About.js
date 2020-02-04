import React, { useState } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import boardList from '../../Board';
import classNames from 'classnames';

function About() {
	const [activeTab, setActiveTab] = useState(1);

	const toggle = tab => {
		if(activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Container tag="main" role="main" id="about" className="fade-in">

			<Row tag="section" className="justify-content-center align-items-center mt-4 mb-5">
				<Col tag="header" xs={11}>
					<h2 className="text-center text-lg-left display-4 text-maroon">Mission Statement</h2>
				</Col>
				<Col lg={7}>
					<p className="mt-4 text-center text-lg-left">The <b>Vietnamese Student Association</b> at the <b>University of Illinois at Urbana-Champaign</b>, (hereon, &ldquo;VSA&rdquo;) was established at the University of Illinois in 1983. VSA is an organization dedicated to promoting cultural awareness through a variety of events on campus and in the Urbana-Champaign community. VSA strives to establish a supportive environment for those of Vietnamese and non-Vietnamese descent to interact and engage in activities that preserve and appreciate the Vietnamese culture and heritage. VSA is open to everyone that is interested in learning or sharing the Vietnamese culture.<br /><br />VSA shall organize events for the campus and community to promote knowledge of Vietnamese culture or Vietnamese American and Asian American awareness.<br /><br />VSA shall strengthen and support the greater Vietnamese American student community through active involvement with the Union of Vietnamese Student Associations of the Midwest (UVSA-Midwest) as well as other VSA&rsquo;s in the Union of North American Vietnamese Student Association (UNAVSA).<br /><br />VSA shall strengthen the campus Asian Pacific Islander American (hereon, &ldquo;APIA&rdquo;) Community and support other campus APIA organizations. If affiliated with the Asian Pacific American Coalition, (hereon, &ldquo;APAC&rdquo;) then VSA shall be active in supporting the APAC organization.</p>
				</Col>
				<Col tag="figure" lg={4}>
					<img className="mt-2 w-100 rounded" src={`${process.env.PUBLIC_URL}/images/about_img_1.jpg`} alt="About 1"/>
					<img className="mt-4 w-100 rounded" src={`${process.env.PUBLIC_URL}/images/about_img_2.jpg`} alt="About 2"/>
				</Col>
			</Row>

			<hr />

			<Row tag="section" className="justify-content-center mt-5">
				<Col tag="header" xs={12}>
					<h2 className="text-center text-maroon">The Officer Board</h2>
				</Col>
				<Col xs={12}>
					<Nav tabs className="justify-content-center">
						{boardList.map(board => 
						<NavItem key={board.id}>
							<NavLink className={classNames({active: activeTab === board.id})} onClick={() => toggle(board.id)}>{board.yearRange}</NavLink>
						</NavItem>
						)}
					</Nav>
					<TabContent activeTab={activeTab} className="mt-4">
						{boardList.map(board => 
						<TabPane tabId={board.id} key={board.id}>
							<Row className="justify-content-center align-items-center">
								{board.img.name ?
								<>
									<Col tag="figure" lg={7}>
										<img className="w-100 rounded" src={`${process.env.PUBLIC_URL}/images/${board.img.name}`} alt={board.img.altText} />
									</Col>
									<Col lg={5}>
										<ul className="board-members">
											{board.boardMembers.map(member => <li key={member.position}><span className="text-maroon">{member.position}:</span> {member.name}</li>)}
										</ul>
									</Col>
								</>
								:
								<Col lg={12}>
									<ul className="board-members">
										{board.boardMembers.map(member => <li key={member.position}><span className="text-maroon">{member.position}:</span> {member.name}</li>)}
									</ul>
								</Col>
								}
								
							</Row>
						</TabPane>
						)}
					</TabContent>
				</Col>
			</Row>
		</Container>
	);
}

export default About;