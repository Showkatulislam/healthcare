import React from "react";
import {Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../context/useAuth";

const Header = () => {
  const {user,logout}=useAuth()
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="#home">
           All Care mediacal hospitall
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/doctor">
              Doctor
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
            {
              user?.email?<Nav.Link onClick={logout} >logout</Nav.Link>:<Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            }

            <Navbar.Text>
             User: <a href="/">{user.displayName || (user.email?"showkatul":"")}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
