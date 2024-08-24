import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import APOLLO from "../assets/images/apollo.png";
import Apollo_Tyre from "../assets/images/apollo_tyre.png";

const TyreSold = () => {
  const tyreSoldByDealers = [
    { price: "3,660" },
    // { price: "3,660" },
    // { price: "3,660" },
    // { price: "3,660" },
    // { price: "3,660" },
    // { price:"3,660" }
  ];
  return (
    <div
      className="container my-4"
      style={{ backgroundColor: "#f8f9fa", padding: "20px 0" }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            color: "#333",
            position: "relative",
          }}
        >
          Services offered by this dealer
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
        <Row>
          {tyreSoldByDealers.map((tyreSoldByDealer, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="mb-4">
              <Card className="border-0 shadow-sm rounded-3 position-relative overflow-hidden">
                <Card.Body>
                  {/* Warranty Badge */}
                  <div className="position-absolute top-0 end-0 p-2">
                    <span className="d-flex align-items-center bg-light text-dark rounded-pill px-2 py-1">
                      <i className="bi bi-shield-fill-check me-2"></i>5 Year
                      Warranty
                    </span>
                  </div>

                  {/* Tyre Image */}
                  <Card.Img
                    variant="top"
                    src={Apollo_Tyre}
                    alt="tyre"
                    style={{
                      height: "300px", // Adjust height as needed
                      objectFit: "contain",
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      transform: "translate(40%, 25%)", // Moves the image to the bottom right
                    }}
                  />

                  {/* Content */}
                  <div className="d-flex align-items-start">
                    <div className="pe-3 pt-3">
                      <Card.Img
                        variant="top"
                        src={APOLLO}
                        alt="logo"
                        style={{ height: "20px", objectFit: "contain" }}
                      />
                      <Card.Text className="mt-2">AMAZER 4G LIFE</Card.Text>
                      <Card.Text>145/80 R12</Card.Text>
                      <div className="d-flex gap-2 align-items-center">
                        <div className="d-flex align-items-center bg-success text-white rounded-2 px-2">
                          <i className="bi bi-star-fill"></i>
                          <span className="ms-1">4</span>
                        </div>
                        <p className="mb-0">320 Reviews</p>
                      </div>
                      <Card.Text className="mt-2">
                        ₹ {tyreSoldByDealer.price}
                      </Card.Text>
                      <Card.Text>Offer available</Card.Text>
                      <Card.Text>Tubeless</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Button className="text-center">View More</Button>
      </Container>

      <style jsx>{`
        @media (max-width: 768px) {
          .testimonial-card {
            margin: 0 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default TyreSold;
