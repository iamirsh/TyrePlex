import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import user1 from "../assets/images/Nasir.png";
import user2 from "../assets/images/P.png";
import user3 from "../assets/images/R.png";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap icons

const Testimonials = () => {
  const testimonials = [
    {
      image: user1,
      name: "Md Nasir",
      comment:
        "I had a fantastic experience using this product. It exceeded my expectations.",
    },
    {
      image: user3,
      name: "Rohit Bhati",
      comment: "This product is amazing! It has completely changed my life.",
    },
    {
      image: user2,
      name: "Pradeep Kumar",
      comment:
        "I highly recommend this product to anyone looking for a solution.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "20px 0" }}>
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
          227 Google Reviews
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
        <Row className="justify-content-center">
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
                    className="rounded-circle"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <Card.Title className="mt-2" style={{ fontSize: "1.25rem" }}>
                  {testimonial.name}
                </Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  <i className="bi bi-chat-left-quote"></i>{" "}
                  {testimonial.comment}
                </Card.Text>
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
  );
};

export default Testimonials;
