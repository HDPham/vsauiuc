import { useState, useEffect, useLayoutEffect } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav as NavRS,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from '/logo_64x64.png';

function Nav() {
  const links = [
    {
      name: 'Home',
      to: '/',
    },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Events', to: '/events' },
    { name: 'VCN', to: '/vcn' },
  ];

  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [exit, setExit] = useState(false);

  useLayoutEffect(() => {
    const navEl = document.getElementsByTagName('nav')[0];
    navEl.removeAttribute('style');
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/' || isOpen) {
      const headerEl = document.getElementsByTagName('header')[0];
      const navEl = document.getElementsByTagName('nav')[0];
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const height = entry.borderBoxSize
            ? `${entry.borderBoxSize.blockSize}px`
            : `${2 * entry.contentRect.y + entry.contentRect.height}px`;
          if (headerEl.style.paddingTop !== height)
            headerEl.style.paddingTop = height;
        }
      });

      resizeObserver.observe(navEl, { box: 'border-box' });

      if (isOpen) {
        const mq = window.matchMedia('(min-width: 768px)');
        const stopToggler = (mq) => {
          if (mq.matches) {
            setExit(false);
            setIsOpen(false);
          }
        };
        mq.addEventListener('change', stopToggler);

        return () => {
          headerEl.removeAttribute('style');
          resizeObserver.unobserve(navEl);
          mq.removeEventListener('change', stopToggler);
        };
      }

      return () => {
        headerEl.removeAttribute('style');
        resizeObserver.unobserve(navEl);
      };
    }
  }, [pathname, isOpen]);

  const toggle = () => setIsOpen(!isOpen);
  const onEnter = () => setExit(true);
  const onExit = () => {
    if (pathname === '/') {
      const navEl = document.getElementsByTagName('nav')[0];
      navEl.classList.add('navbar-dark');
      navEl.classList.remove('navbar-light');
    }
  };
  const onExited = () => {
    const navEl = document.getElementsByTagName('nav')[0];
    if (!exit) navEl.style.transition = 'none';
    else if (pathname === '/') {
      navEl.classList.add('navbar-light');
      navEl.classList.remove('navbar-dark');
    }
  };

  return (
    <Navbar
      expand="md"
      className={`d-flex justify-content-between fade-in ${
        pathname === '/' && !isOpen ? 'navbar-light' : 'bg-dark navbar-dark'
      }`}
      style={isOpen ? { transition: 'none' } : { transition: null }}
    >
      <NavbarBrand tag={Link} to="/">
        <img src={logo} alt="UIUC VSA Logo" />{' '}
        <span className="align-middle text-white font-weight-bold">
          VSA UIUC
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="ml-auto" />
      <Collapse
        isOpen={isOpen}
        exit={exit}
        onEnter={onEnter}
        onExit={onExit}
        onExited={onExited}
        navbar
        className="text-center"
      >
        <NavRS className="ms-auto" navbar>
          {links.map(({ name, to }) => (
            <NavItem key={to}>
              <NavLink tag={RouterNavLink} to={to} className="nav__link">
                {name}
              </NavLink>
            </NavItem>
          ))}
        </NavRS>
      </Collapse>
    </Navbar>
  );
}

export default Nav;
