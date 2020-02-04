import React, { useState, useEffect, useLayoutEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav as NavRS,
	NavItem,
	NavLink
} from 'reactstrap';

function Nav(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [exit, setExit] = useState(false);

	useEffect(() => {
		const h1El = document.getElementsByTagName('h1')[0];
		const navEl = document.getElementsByTagName('nav')[0];
		const mq = window.matchMedia('(min-width: 768px)');
		const brandTop = () => {
			h1El.style.top = `${(navEl.offsetHeight - h1El.offsetHeight) / 2}px`;
		};
		brandTop(mq);
		mq.addListener(brandTop);

		return () => {
			mq.removeListener(brandTop);
		};
	}, [])

	useLayoutEffect(() => {
		const navEl = document.getElementsByTagName('nav')[0];
		navEl.removeAttribute('style');
	}, [props.pathname])

	useEffect(() => {
		if(props.pathname !== '/' || isOpen) {
			const headerEl = document.getElementsByTagName('header')[0];
			const navEl = document.getElementsByTagName('nav')[0];
			const resizeObserver = new ResizeObserver(entries => {
				for(const entry of entries) {
					const height = entry.borderBoxSize ? `${entry.borderBoxSize.blockSize}px` : `${2 * entry.contentRect.y + entry.contentRect.height}px`;
					if(headerEl.style.paddingTop !== height)
						headerEl.style.paddingTop = height;
				}
			});

			resizeObserver.observe(navEl, {box : 'border-box'});

			if(isOpen) {
				const mq = window.matchMedia('(min-width: 768px)');
				const stopToggler = mq => {
					if(mq.matches) {
						setExit(false);
						setIsOpen(false);
					}
				};
				mq.addListener(stopToggler);

				return () => {
					headerEl.removeAttribute('style');
					resizeObserver.unobserve(navEl);
					mq.removeListener(stopToggler);
				};
			}

			return () => {
				headerEl.removeAttribute('style');
				resizeObserver.unobserve(navEl);
			};
		}
	}, [props.pathname, isOpen]);

	const toggle = () => setIsOpen(!isOpen);
	const onEnter = () => {
		setExit(true);
	};
	const onExit = () => {
		if(props.pathname === '/') {
			const navEl = document.getElementsByTagName('nav')[0];
			navEl.classList.add('navbar-dark');
			navEl.classList.remove('navbar-light');
		}
	};
	const onExited = () => {
		const navEl = document.getElementsByTagName('nav')[0];
		if(!exit)
			navEl.style.transition = 'none';
		else if(props.pathname === '/') {
			navEl.classList.add('navbar-light');
			navEl.classList.remove('navbar-dark');
		}
	};

	return (
		<Navbar expand="md" className={`fixed-top fade-in ${props.pathname === '/' && !isOpen ? 'navbar-light' : 'bg-dark navbar-dark'}`} style={isOpen ? {transition: 'none'} : {transition: null}}>

			<NavbarToggler onClick={toggle} className="ml-auto" />

			<Collapse isOpen={isOpen} exit={exit} onEnter={onEnter} onExit={onExit} onExited={onExited} navbar className="text-center">
				<NavRS className="ml-auto" navbar>
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
				</NavRS>
			</Collapse>
		</Navbar>
	);
}

export default Nav;