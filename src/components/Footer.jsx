import React from "react";
import logo from "../assets/images/TP-logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      {/* Main footer container with background color and padding */}
      <Container className="bg-light py-4">
        <Row className="text-center text-md-start">
          {/* Logo and Social Media Icons */}
          <Col md={3} className="mb-4 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <img src={logo} alt="Logo" className="mb-3" style={{ maxWidth: "150px" }} />
              <div className="d-flex gap-3">
                <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
                <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
              </div>
            </div>
          </Col>

          {/* About Us Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>Who We Are</li>
              <li>Are you a Tyre Dealer?</li>
            </ul>
          </Col>

          {/* Legal Information Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </Col>

          {/* Support Links Section */}
          <Col md={3}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Shipping & Return Policy</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom Section with Border and Text */}
      <Container className="text-center border-top border-secondary py-3">
        <span>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</span>
      </Container>
    </>
  );
};

export default Footer;
