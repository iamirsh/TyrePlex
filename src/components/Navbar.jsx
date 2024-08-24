import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/TP-logo.png";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap icons

const MyNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Company Logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        {/* Navbar Toggle for collapsing */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="bi bi-list"></i> {/* Hamburger icon */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Car Tyres</Nav.Link>
            <Nav.Link href="#features">Bike Tyres</Nav.Link>
            <Nav.Link href="#pressure">Tyre Pressure</Nav.Link>
            <Nav.Link href="#commercial">Commercial Tyres</Nav.Link>
            <Nav.Link href="#accessories">Accessories</Nav.Link>
            <Nav.Link href="#more">More</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
