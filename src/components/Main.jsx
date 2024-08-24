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
      <div className="container bg-light p-4">
      
      <div className="row align-items-start my-5">
        <div className="col-md-5 order-md-1 order-2 mb-4 mb-md-0">
          {/* Store Details */}
          <div className="d-flex flex-column">
            <h3 className="mb-3">SHREE HEMKUNT TYRES AND SERVICES</h3>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-shield-fill-check text-success fs-4 me-2"></i>
              <p className="text-success mb-0">Verified</p>
            </div>
            {/* Rating */}
            <div className="d-flex align-items-center mb-3">
              <p className="mb-0 me-2 fs-5">4.9</p>
              <div className="d-flex me-2">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
              </div>
              <p className="mb-0 me-2">227 Reviews</p>
              <button type="button" className="btn btn-secondary btn-sm">
                Rate
              </button>
            </div>
            {/* Address */}
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-geo-alt fs-4 me-2"></i>
                <p className="mb-0">
                  PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                  INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </p>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-clock fs-4 me-2"></i>
                <p className="mb-0">Open - Monday to Sunday - 10:00AM to 8:00PM</p>
              </div>
            </div>
            <button type="button" className="btn btn-outline-danger">
              Get Directions
            </button>
          </div>
        </div>
        <div className="col-md-7 order-md-2 order-1">
          {/* Store Images */}
          <Carousel className="d-flex justify-content-center">
            <Carousel.Item>
              <img className="d-block w-100" src={shop1} alt="First Slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={shop2} alt="Second Slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={shop3} alt="Third Slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={shop4} alt="Fourth Slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      
    </div>

        {/* Testimonials */}
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default Main;
