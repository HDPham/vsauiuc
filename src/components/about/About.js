import React, {useState} from 'react';
import {Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classNames from 'classnames';

function About() {
	const [activeTab, setActiveTab] = useState('1');

	const board = [
		{
			position: 'President',
			name: 'Tyler Tran'
		},
		{
			position: 'Vice President Internal',
			name: 'Isaac Ngo'
		},
		{
			position: 'Vice Present External',
			name: 'Erica Tran'
		},
		{
			position: 'Treasurer',
			name: 'Kalina Liu'
		},
		{
			position: 'Secretary',
			name: 'Hung Pham'
		},
		{
			position: 'Public Relations',
			name: 'Aileen Lu'
		},
		{
			position: 'Social',
			name: 'BoaTran Le & Phi Dang'
		},
		{
			position: 'Philanthropy',
			name: 'Amanda Lam'
		},
		{
			position: 'Athletic',
			name: 'David Poon'
		},
		{
			position: 'VCN Directors',
			name: 'Christina Tran & Nick Vo'
		}
	];

	const toggle = tab => {
		if(activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Container tag="main" role="main" className="fade-in">

			<Row className="align-items-center mt-4">
				<Col lg={7}>
					<h1 className="text-center text-lg-left display-4 text-maroon">Mission Statement</h1>
					<p className="mt-4 text-center text-lg-left">The <strong>Vietnamese Student Association</strong> at the <strong>University of Illinois at Urbana-Champaign</strong>, (hereon, &ldquo;VSA&rdquo;) was established at the University of Illinois in 1983. VSA is an organization dedicated to promoting cultural awareness through a variety of events on campus and in the Urbana-Champaign community. VSA strives to establish a supportive environment for those of Vietnamese and non-Vietnamese descent to interact and engage in activities that preserve and appreciate the Vietnamese culture and heritage. VSA is open to everyone that is interested in learning or sharing the Vietnamese culture.<br /><br />VSA shall organize events for the campus and community to promote knowledge of Vietnamese culture or Vietnamese American and Asian American awareness.<br /><br />VSA shall strengthen and support the greater Vietnamese American student community through active involvement with the Union of Vietnamese Student Associations of the Midwest (UVSA-Midwest) as well as other VSA&rsquo;s in the Union of North American Vietnamese Student Association (UNAVSA).<br /><br />VSA shall strengthen the campus Asian Pacific Islander American (hereon, &ldquo;APIA&rdquo;) Community and support other campus APIA organizations. If affiliated with the Asian Pacific American Coalition, (hereon, &ldquo;APAC&rdquo;) then VSA shall be active in supporting the APAC organization.</p>
				</Col>
				<Col tag="figure" lg={5}>
					<img className="mt-2 w-100 rounded" src={`${process.env.PUBLIC_URL}/images/about_img_1.jpg`} alt="About 1"/>
					<img className="mt-4 w-100 rounded" src={`${process.env.PUBLIC_URL}/images/about_img_2.jpg`} alt="About 2"/>
				</Col>
			</Row>

			<br /><hr /><br />

			<Row className="justify-content-center">
				<Col xs={8}>
					<h2 className="text-center text-maroon">The Officer Board</h2>
					<Nav tabs className="justify-content-center">
						<NavItem>
							<NavLink className={classNames({active: activeTab === '1'})} onClick={() => toggle('1')}>Current</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={classNames({active: activeTab === '2'})} onClick={() => toggle('2')}>2017-18</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={classNames({active: activeTab === '3'})} onClick={() => toggle('3')}>2016-17</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={classNames({active: activeTab === '4'})} onClick={() => toggle('4')}>2015-16</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={classNames({active: activeTab === '5'})} onClick={() => toggle('5')}>2014-15</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={classNames({active: activeTab === '6'})} onClick={() => toggle('6')}>2013-14</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={classNames({active: activeTab === '7'})} onClick={() => toggle('7')}>2012-13</NavLink>
						</NavItem>
					</Nav>
				</Col>
			</Row>
			<TabContent activeTab={activeTab} className="mt-4">
				<TabPane tabId="1">
					<Row className="align-items-center">
						<Col lg={7}>
							<img className="w-100 rounded" src={`${process.env.PUBLIC_URL}/images/board_17_18.jpg`} alt="Current Board" />
						</Col>
						<Col lg={5}>
							<ul className="board-list">
								{board.map(member => <li key={member.position}><span className="text-maroon">{member.position}:</span> {member.name}</li>)}
							</ul>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row className="align-items-center">
						<Col lg={7}>
							<img className="w-100 rounded" src="" alt="2017-2018 Board" />
						</Col>
						<Col lg={5}>
							<ul className="board-list">
								{board.map(member => <li key={member.position}><span className="text-maroon">{member.position}:</span> </li>)}
							</ul>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="3">
					<Row className="align-items-center">
						<Col lg={7}>
							<img className="w-100 rounded" src="" alt="2016-2017 Board" />
						</Col>
						<Col lg={5}>
							<ul className="board-list">
								{board.map(member => <li key={member.position}><span className="text-maroon">{member.position}:</span> </li>)}
							</ul>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="4">
					<Row className="align-items-center">
						<Col lg={7}>
							<img className="w-100 rounded" src="" alt="2015-2016 Board" />
						</Col>
						<Col lg={5}>
							<ul className="board-list">
								{board.map(member => <li key={member.position}><span className="text-maroon">{member.position}:</span> </li>)}
							</ul>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="5">
					<Row className="align-items-center">
						<Col lg={7}>
							<img className="w-100 rounded" src="" alt="2014-2015 Board" />
						</Col>
						<Col lg={5}>
							<ul className="board-list">
								{board.map(member => <li key={member.position}><span className="text-maroon">{member.position}:</span> </li>)}
							</ul>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="6">
					<Row className="align-items-center">
						<Col lg={7}>
							<img className="w-100 rounded" src="" alt="2013-2014 Board" />
						</Col>
						<Col lg={5}>
							<ul className="board-list">
								{board.map(member => <li key={member.position}><span className="text-maroon">{member.position}:</span> </li>)}
							</ul>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="7">
					<Row className="align-items-center">
						<Col lg={7}>
							<img className="w-100 rounded" src="" alt="2012-2013 Board" />
						</Col>
						<Col lg={5}>
							<ul className="board-list">
								{board.map(member => <li key={member.position}><span className="text-maroon">{member.position}:</span> </li>)}
							</ul>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</Container>
	);
}

export default About;