import React from "react";
import { Card, Container, Carousel } from "react-bootstrap";
import CEAT from "../assets/images/ceat.png";
import APOLLO from "../assets/images/apollo.png";
import BRIDGESTONE from "../assets/images/bridgestone.png";
import GOODYEAR from "../assets/images/goodyear.png";
import JKTYRE from "../assets/images/jktyre.png";
import MRF from "../assets/images/MRF.png";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap icons

const Deals = () => {
  // List of brands with their images
  const testimonials = [
    { image: MRF, name: "MRF" },
    { image: CEAT, name: "CEAT" },
    { image: APOLLO, name: "APOLLO" },
    { image: BRIDGESTONE, name: "BRIDGESTONE" },
    { image: GOODYEAR, name: "GOODYEAR" },
    { image: JKTYRE, name: "JKTYRE" },
    { image: CEAT, name: "CEAT" },
    { image: APOLLO, name: "APOLLO" },
    { image: BRIDGESTONE, name: "BRIDGESTONE" },
    { image: MRF, name: "MRF" },
    { image: CEAT, name: "CEAT" },
  ];

  // Function to split the testimonials array into chunks
  const chunkSize = 5;
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += chunkSize) {
    groupedTestimonials.push(testimonials.slice(i, i + chunkSize));
  }

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
        Deals in
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
      <Container className="my-4" style={{ backgroundColor: "#f8f9fa" }}>
        <Carousel indicators={false} controls={true}>
          {groupedTestimonials.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex gap-4 p-4">
                {group.map((testimonial, idx) => (
                  <Card
                    key={idx}
                    className="testimonial-card p-2 text-center"
                    style={{
                      width: "200px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      border: "none",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ height: "80px", width:"100%", objectFit: "contain" }} // Adjusted height to improve visual balance
                    />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1rem" }}>
                        {testimonial.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Deals;
