import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar className="px-4" bg="dark" variant="dark">
      <Navbar.Brand to="/" as={NavLink}>
        Navbar
      </Navbar.Brand>
      <Nav className="me-auto fs-5">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/effect" as={NavLink}>
          UseEffect
        </Nav.Link>
        <Nav.Link to="/memo" as={NavLink}>
          UseMemo
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
