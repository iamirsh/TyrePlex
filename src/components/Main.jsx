import React from "react";
import shop1 from "../assets/images/shop.jpg";
import shop2 from "../assets/images/shop2.jpg";
import shop3 from "../assets/images/shop3.jpg";
import shop4 from "../assets/images/shop4.jpg";
import Carousel from "react-bootstrap/Carousel";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <>
      <div className="container bg-light p-2 pt-4 rounded-3">
        {/* Store Details and Images Section */}
        <div className="row align-items-start py-2">
          {/* Store Details */}
          <div className="col-md-5 order-md-1 order-2 mb-md-0 p-4">
            <div className="d-flex flex-column">
              <h2
                className="mb-3"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "#333",
                  position: "relative",
                }}
              >
                SHREE HEMKUNT TYRES AND SERVICES
              </h2>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-shield-fill-check text-success fs-4 me-2"></i>
                <p className="text-success mb-0">Verified</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <p className="mb-0 me-2 fs-5">4.9</p>
                <div className="d-flex me-2">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>
                <p className="mb-0 me-2">227 Reviews</p>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                >
                  Rate
                </button>
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-4 me-2"></i>
                  <p className="mb-0">
                    PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA
                    KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-clock fs-4 me-2"></i>
                  <p className="mb-0">
                    Open - Monday to Sunday - 10:00AM to 8:00PM
                  </p>
                </div>
              </div>
              <button type="button" className="btn btn-danger">
                Get Directions
              </button>
            </div>
          </div>

          {/* Store Images */}
          <div className="col-md-7 order-md-2 order-1">
            <Carousel className="d-flex justify-content-center">
              {[shop1, shop2, shop3, shop4].map((src, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 rounded-3"
                    src={src}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default Main;
