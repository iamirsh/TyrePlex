import React from "react";
import wheel from "../assets/images/wheels.png";
import balancing from "../assets/images/balancing.png";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported globally

const Services = () => {
  const services = [
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

      {/* Main Content */}
      <div
        className="container rounded-3 p-2 pt-4"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <Container>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                <Card
                  className="h-100 p-4 d-flex flex-column align-items-center justify-content-center text-center card-hover"
                  style={{
                    borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    transition: "transform 0.2s ease-in-out",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {/* Service Icon */}
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
                      src={service.image}
                      alt={service.name}
                      style={{ width: "70px", height: "70px" }}
                    />
                  </div>
                  {/* Service Title */}
                  <Card.Title className="mt-2" style={{ fontSize: "1.25rem" }}>
                    {service.name}
                  </Card.Title>
                  {/* Book Now Button */}
                  <Button variant="danger">Book Now</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <style jsx>{`
          @media (max-width: 768px) {
            .mb-4 {
              margin-bottom: 1.5rem; // Adjust space between cards
            }
          }
          
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </div>
    </>
  );
};

export default Services;
