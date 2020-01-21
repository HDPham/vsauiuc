import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/layout/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Events from './components/events/Events';
import Vcn from './components/vcn/Vcn';
import Contact from './components/contact/Contact';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Route render={(props) => <Header pathname={props.location.pathname}></Header>}></Route>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/about" component={About}></Route>
			<Route exact path="/contact" component={Contact}></Route>
			<Route exact path="/events" component={Events}></Route>
			<Route exact path="/vcn" component={Vcn}></Route>
		</Router>
	);
}

export default App;