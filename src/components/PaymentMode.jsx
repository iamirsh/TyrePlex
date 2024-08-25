import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const PaymentMode = () => {
  return (
    <>
      {/* Header Section */}
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
        {/* Underline Style */}
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

      {/* Container with light background for content */}
      <Container className="bg-light p-4 rounded-3">
        <Row>
          {/* Payment Options with Font Size and Bold Check Icon */}
          {[
            "Deposit to Account",
            "Net Banking",
            "Credit Card/Debit Card",
            "UPI",
            "Wallets (PayTM/PhonePe/Amazon etc.)",
          ].map((paymentOption, index) => (
            <Col sm={6} className="mb-2" key={index}>
              <div className="d-flex align-items-center gap-3">
                <i
                  className="bi bi-check-lg text-success"
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }} // Increased font size and boldness for visibility
                ></i>
                <span>{paymentOption}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PaymentMode;
