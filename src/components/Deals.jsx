import React, { useState, useEffect, useRef } from "react";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS
import "./Carousel.css"; // Custom styles

// Import images
import CEAT from "../assets/images/ceat.png";
import APOLLO from "../assets/images/apollo.png";
import BRIDGESTONE from "../assets/images/bridgestone.png";
import GOODYEAR from "../assets/images/goodyear.png";
import JKTYRE from "../assets/images/jktyre.png";
import MRF from "../assets/images/MRF.png";

const CarouselComponent = () => {
  // Array of deals with images and names
  const deals = [
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
    { image: APOLLO, name: "APOLLO" },
    { image: BRIDGESTONE, name: "BRIDGESTONE" },
    { image: MRF, name: "MRF" },
    { image: CEAT, name: "CEAT" },
    { image: MRF, name: "MRF" },
  ];

  // State and ref for current position and slides per page
  const [currentPosition, setCurrentPosition] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(4);
  const sliderRef = useRef(null);

  // Check viewport width and adjust slides per page
  const checkWidth = () => {
    const containerWidth = window.innerWidth;
    if (containerWidth < 551) {
      setSlidesPerPage(1);
    } else if (containerWidth < 901) {
      setSlidesPerPage(2);
    } else if (containerWidth < 1101) {
      setSlidesPerPage(3);
    } else {
      setSlidesPerPage(4);
    }
  };

  useEffect(() => {
    checkWidth(); // Initial check
    window.addEventListener("resize", checkWidth); // Update on resize
    return () => {
      window.removeEventListener("resize", checkWidth); // Clean up
    };
  }, []);

  // Move slides left or right
  const slideRight = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const slideLeft = () => {
    if (currentPosition < deals.length - slidesPerPage) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  // Update margin to slide left/right
  useEffect(() => {
    const margin = -currentPosition * (100 / slidesPerPage);
    sliderRef.current.style.marginLeft = `${margin}%`;
  }, [currentPosition, slidesPerPage]);

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
      <Container className="carousel-container d-flex justify-content-center bg-light align-items-center my-4 py-4 rounded-3">
        <div className="slider-container" style={{ position: "relative" }}>
          {/* Left navigation button */}
          <i
            className={`bi bi-chevron-left btn no-outline ${
              currentPosition === 0 ? "inactive" : ""
            }`}
            onClick={slideRight}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          ></i>
          <div className="slider" ref={sliderRef} style={{ "--slides-per-page": slidesPerPage }}>
            {deals.map((service, index) => (
              <div className="slide" key={index}>
                <Card
                  className="testimonial-card d-flex flex-column justify-content-center align-items-center"
                  style={{
                    width: "220px",
                    height: "110px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={service.image}
                    alt={service.name}
                    style={{
                      height: "110px",
                      width: "110px",
                      objectFit: "contain",
                    }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title
                      style={{
                        fontSize: "1rem",
                        marginTop: "5px",
                        textAlign: "center",
                      }}
                    >
                      {service.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          {/* Right navigation button */}
          <i
            className={`bi bi-chevron-right btn no-outline ${
              currentPosition === deals.length - slidesPerPage
                ? "inactive"
                : ""
            }`}
            onClick={slideLeft}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          ></i>
        </div>
      </Container>
    </>
  );
};

export default CarouselComponent;
