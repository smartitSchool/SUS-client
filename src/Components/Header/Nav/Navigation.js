import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar expand="lg" className='nav'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/home' className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-item')}>
                            Home
                        </NavLink>
                        <NavLink to='/about-us' className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-item')}>
                            About Us
                        </NavLink>
                        <NavLink to='/authority' className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-item')}>
                            Authority
                        </NavLink>
                        <NavLink to='/activities' className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-item')}>
                            Activities
                        </NavLink>
                        <NavLink to='/donation' className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-item')}>
                            Donation
                        </NavLink>
                        <NavLink to='/gallery' className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-item')}>
                            Gallery
                        </NavLink>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'nav-item-active' : 'nav-item')}>
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;