import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentMode = () => {
  return (
    <>
      <h2
        className="text-center my-4"
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
          color: "#333",
          position: "relative",
        }}
      >
        Payment Mode
        <div
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#f5576c",
            margin: "10px auto 0",
            borderRadius: "2px",
          }}
        ></div>
      </h2>
      <Container className="bg-light p-4">
        <Row>
          <Col sm={6} className="mb-2">
            <div className="d-flex align-items-center gap-3">
              <i
                className="bi bi-check-lg text-success"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }} // Increased font size and added boldness
              ></i>
              <span>Deposit to Account</span>
            </div>
          </Col>
          <Col sm={6} className="mb-2">
            <div className="d-flex align-items-center gap-3">
              <i
                className="bi bi-check-lg text-success"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              ></i>
              <span>Net Banking</span>
            </div>
          </Col>
          <Col sm={6} className="mb-2">
            <div className="d-flex align-items-center gap-3">
              <i
                className="bi bi-check-lg text-success"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              ></i>
              <span>Credit Card/Debit Card</span>
            </div>
          </Col>
          <Col sm={6} className="mb-2">
            <div className="d-flex align-items-center gap-3">
              <i
                className="bi bi-check-lg text-success"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              ></i>
              <span>UPI</span>
            </div>
          </Col>
          <Col sm={6} className="mb-2">
            <div className="d-flex align-items-center gap-3">
              <i
                className="bi bi-check-lg text-success"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              ></i>
              <span>Wallets (PayTM/PhonePe/Amazon etc.)</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentMode;
