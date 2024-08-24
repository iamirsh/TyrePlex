import React from "react";
import wheel from "../assets/images/wheels.png";
import balancing from "../assets/images/balancing.png";
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Services = () => {
  const testimonials = [
    {
      image: balancing,
      name: "Wheel Balancing",
    },
    {
      image: wheel,
      name: "Wheel Alignment",
    },
  ];
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
      <div
        className="container"
        style={{ backgroundColor: "#f8f9fa", padding: "20px 0" }}
      >
        <Container>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                <Card
                  className="testimonial-card h-100 p-4 d-flex flex-column align-items-center justify-content-center text-center"
                  style={{
                    borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    transition: "transform 0.2s ease-in-out",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center mb-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                      borderRadius: "50%",
                      padding: "10px",
                      width: "80px",
                      height: "80px",
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className=""
                      style={{ width: "70px", height: "70px" }}
                    />
                  </div>
                  <Card.Title className="mt-2" style={{ fontSize: "1.25rem" }}>
                    {testimonial.name}
                  </Card.Title>
                  <Button variant="danger">Book Now</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <style jsx>{`
          @media (max-width: 768px) {
            .testimonial-card {
              margin: 0 10px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Services;
