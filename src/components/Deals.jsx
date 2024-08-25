import React, { useState, useEffect, useRef } from "react";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons CSS
import "./Carousel.css"; // Custom styles
import CEAT from "../assets/images/ceat.png";
import APOLLO from "../assets/images/apollo.png";
import BRIDGESTONE from "../assets/images/bridgestone.png";
import GOODYEAR from "../assets/images/goodyear.png";
import JKTYRE from "../assets/images/jktyre.png";
import MRF from "../assets/images/MRF.png";

const CarouselComponent = () => {
  const services = [
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
  const [currentPosition, setCurrentPosition] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(4);
  const sliderRef = useRef(null);

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
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  const slideRight = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const slideLeft = () => {
    if (currentPosition < services.length - slidesPerPage) {
      setCurrentPosition(currentPosition + 1);
    }
  };

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
      <Container className="carousel-container d-flex justify-content-center bg-light align-items-center my-4 p-4">
        <div className="slider-container" style={{ position: "relative" }}>
          <i
            className={`bi bi-chevron-left btn ${
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
          <div className="slider" ref={sliderRef}>
            {services.map((service, index) => (
              <div className="slide" key={index}>
                <Card
                  className="testimonial-card p-2 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    width: "200px",
                    height: "120px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={service.image}
                    alt={service.name}
                    style={{
                      height: "120px",
                      width: "120px",
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
          <i
            className={`bi bi-chevron-right btn ${
              currentPosition === services.length - slidesPerPage
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
