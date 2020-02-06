import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavbarBrand } from 'reactstrap';
import Nav from './components/layout/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Events from './components/events/Events';
import Carousel from './components/vcn/Carousel';
import Vcn from './components/vcn/Vcn';
import Contact from './components/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import logo from './logo_64x64.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMap, faLocationArrow, faCalendarAlt, faClock, faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faMap, faLocationArrow, faCalendarAlt, faClock, faUserCircle);

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<header>
				<h1 className="fade-in">
					<NavbarBrand tag={Link} to="/">
						<img src={logo} alt="UIUC VSA Logo" /> <span className="align-middle text-white font-weight-bold">VSA UIUC</span>
					</NavbarBrand>
				</h1>
				<Route render={(props) => <Nav pathname={props.location.pathname}></Nav>} />
				<Route exact path ="/vcn" component={Carousel} />
			</header>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/events" component={Events} />
			<Route exact path="/vcn" component={Vcn} />
		</Router>
	);
}

export default App;