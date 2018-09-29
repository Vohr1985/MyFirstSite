import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component{
    render() {
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>React JS</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href='/' to='/'>
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href='/event' to='/event'>
                            Event
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href='/form' to='/form'>
                            Form
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href='/clock' to='/clock'>
                            Clock
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href='/redux' to='/redux'>
                            Redux
                        </NavItem>
                        <NavItem eventKey={6} componentClass={Link} href='/tooltip' to='/tooltip'>
                            Tooltip
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}