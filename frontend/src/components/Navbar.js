import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="navLinks" href="home">
            Home
          </Nav.Link>
          <Nav.Link className="navLinks" href="features">
            Add Trip
          </Nav.Link>
          <Nav.Link className="navLinks" href="pricing">
            Filter
          </Nav.Link>
          <Nav.Link className="navLinks" href="pricing">
            Contact Us
          </Nav.Link>
          <Nav.Link className="navLinks" href="pricing">
            About Us
          </Nav.Link>
          <Nav.Link className="navLinks" href="pricing">
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
