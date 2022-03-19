import React from "react";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../reducers/loginReducer";

import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
//nav
const NavBar = () => {
  const state = useSelector((state) => {
    return { isLoggedIn: state.loginReducer.isLoggedIn };
  });
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const history = useNavigate();
  return (
    <>
    <Navbar id="position" bg="dark" variant="dark">
      <Container>
        {token ? (
          <>
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
              <Nav.Link className="navLinks" href="trips">
                Book trip
              </Nav.Link>
              <Nav.Link className="navLinks" href="profile">
                Profile
              </Nav.Link>
              <Nav.Link
                className="navLinks"
                onClick={() => {
                  dispatch(logout());
                  localStorage.clear();
                  history("/login");
                }}
                href=""
              >
                Logout
              </Nav.Link>
            </Nav>
          </>
        ) : (
          <>
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
              <Nav.Link className="navLinks" href="trips">
                Book trip
              </Nav.Link>
              <Nav.Link className="navLinks" href="profile">
                Profile
              </Nav.Link>
            <Nav.Link className="navLinks" href="login">
              Login
            </Nav.Link>
            </Nav>
          </>
        )}
      </Container>
    </Navbar>
  </>
  )
        }










export default NavBar;
