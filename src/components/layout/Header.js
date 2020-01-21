import React, {useState, useEffect} from 'react';
import {NavLink as RouterNavLink, Link} from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

function Header(props) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const headerElement = document.getElementsByTagName('header')[0];
		const navElement = document.getElementsByTagName('nav')[0];
		const resizeObserver = new ResizeObserver(entries => {
			for(const entry of entries) {
				if(window.location.pathname === '/')
					headerElement.style.height =  '0'
				else if(entry.borderBoxSize)
					headerElement.style.height = `${entry.borderBoxSize.blockSize}px`;
				else
					headerElement.style.height = `${2 * entry.contentRect.y + entry.contentRect.height}px`;
			}
		});

		resizeObserver.observe(navElement);
	}, [])

	useEffect(() => {
		const headerElement = document.getElementsByTagName('header')[0];
		const navElement = document.getElementsByTagName('nav')[0];
		headerElement.style.height = props.pathname === '/' ? '0' : `${navElement.offsetHeight}px`;
		if(props.pathname === '/')
			navElement.classList.add('fade-in', 'navbar-light');
		else
			navElement.classList.add('fade-in', 'bg-dark', 'navbar-dark');
		
		return () => {
			if(props.pathname === '/')
				navElement.classList.remove('fade-in', 'navbar-light');
			else
				navElement.classList.remove('fade-in', 'bg-dark', 'navbar-dark');
		}
	}, [props.pathname]);

	useEffect(() => {
		const navElement = document.getElementsByTagName('nav')[0];
		if(isOpen)
			navElement.classList.add('bg-dark', 'navbar-dark');
	}, [isOpen]);

	const onExited = () => {
		const navElement = document.getElementsByTagName('nav')[0];
		if(props.pathname === '/') {
			navElement.classList.remove('bg-dark', 'navbar-dark');
			navElement.classList.add('navbar-light');
		}
	};

	const toggle = () => setIsOpen(!isOpen);
	
	
	return (
		<header>
			<Navbar expand="md" className="fixed-top" style={{opacity: '0'}}>

				<NavbarBrand tag={Link} to="/" className=""><img src={`${process.env.PUBLIC_URL}/images/logo_2017_2018.png`} alt="Logo" /> <strong className="align-text-top text-white">VSA UIUC</strong></NavbarBrand>

				<NavbarToggler onClick={toggle} />

				<Collapse isOpen={isOpen} onExited={onExited} navbar className="text-center">
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink tag={RouterNavLink} exact to="/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={RouterNavLink} to="/about">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={RouterNavLink} to="/contact">Contact</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={RouterNavLink} to="/events">Events</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={RouterNavLink} to="/vcn">VCN</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</header>
	);
}

export default Header;