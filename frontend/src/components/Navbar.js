import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand id="logo" href="home">
          PickUP
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="navLinks" href="home">
            Home
          </Nav.Link>
          <Nav.Link className="navLinks" href="addTrip">
            Add Trip
          </Nav.Link>
          <Nav.Link className="navLinks" href="filter">
            Filter
          </Nav.Link>
          <Nav.Link className="navLinks" href="contactUs">
            Contact Us
          </Nav.Link>
          <Nav.Link className="navLinks" href="profile">
            Profile
          </Nav.Link>
          <Nav.Link className="navLinks" href="login">
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
