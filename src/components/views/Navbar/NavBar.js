import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
          <Container>
            <Navbar.Brand>Waiter-Helper.app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      );
};

export default NavBar;