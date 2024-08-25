import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported globally
import APOLLO from "../assets/images/apollo.png";
import Apollo_Tyre from "../assets/images/apollo_tyre.png";

const TyreSold = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const initialTyreSoldByDealers = Array(42).fill({ price: "3,660" }); // Simplified array creation

  // State to manage the number of items displayed
  const [visibleCount, setVisibleCount] = useState(8);

  // Function to load more items
  const loadMore = () => setVisibleCount((prevCount) => prevCount + 4);

  // Dropdown items for filtering
  const items = [
    "Apollo",
    "Bedrock",
    "Birla",
    "CEAT",
    "Bringstone",
    "JK Tyre",
    "MRF",
  ];
  const item2 = ["Most Popular", "Price High to Low", "Price Low to High"];

  // Filter items based on search terms
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredItems2 = item2.filter((item) =>
    item.toLowerCase().includes(searchTerm2.toLowerCase())
  );

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
        Tyres sold by this Dealer
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
        className="container rounded-3 my-4 p-2 py-4"
        style={{ backgroundColor: "#f8f9fa", padding: "20px 0" }}
      >
        <Container>
          {/* Dropdowns for filtering */}
          <div className="d-flex justify-content-end gap-4 mb-4">
            {/* First Dropdown */}
            <Dropdown
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            >
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Filter By
              </Dropdown.Toggle>
              <Dropdown.Menu
                show={showDropdown}
                className="w-100 dropdown-menu-custom"
              >
                <FormControl
                  type="text"
                  placeholder="Search..."
                  className="mb-2"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
                <ListGroup>
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <ListGroup.Item
                        key={index}
                        onClick={() => {
                          console.log(item); // Action on click
                          setSearchTerm("");
                          setShowDropdown(false);
                        }}
                        className="dropdown-item"
                      >
                        {item}
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>No results found</ListGroup.Item>
                  )}
                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>

            {/* Second Dropdown */}
            <Dropdown
              onClick={() => setShowDropdown2(!showDropdown2)}
              onBlur={() => setTimeout(() => setShowDropdown2(false), 200)}
            >
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Most Popular
              </Dropdown.Toggle>
              <Dropdown.Menu show={showDropdown2} className="w-100">
                <FormControl
                  type="text"
                  placeholder="Search..."
                  className="mb-2"
                  onChange={(e) => setSearchTerm2(e.target.value)}
                  value={searchTerm2}
                />
                <ListGroup>
                  {filteredItems2.length > 0 ? (
                    filteredItems2.map((item, index) => (
                      <ListGroup.Item
                        key={index}
                        onClick={() => {
                          console.log(item); // Action on click
                          setSearchTerm2("");
                          setShowDropdown2(false);
                        }}
                        className="dropdown-item"
                      >
                        {item}
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>No results found</ListGroup.Item>
                  )}
                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Cards Display */}
          <Row>
            {initialTyreSoldByDealers
              .slice(0, visibleCount)
              .map((tyre, index) => (
                <Col lg={3} md={6} sm={12} key={index} className="mb-4">
                  <Card className="border-0 shadow-sm rounded-3 position-relative overflow-hidden card-hover">
                    <Card.Body>
                      {/* Warranty Badge */}
                      <div className="position-absolute top-0 end-0">
                        <span className="d-flex align-items-center bg-warning-subtle text-dark rounded-2 px-2">
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
                          height: "300px",
                          objectFit: "contain",
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                          transform: "translate(40%, 25%)",
                        }}
                      />

                      {/* Card Content */}
                      <div className="d-flex align-items-start">
                        <div className="pe-3 pt-3">
                          <Card.Img
                            variant="top"
                            src={APOLLO}
                            alt="logo"
                            style={{ height: "20px", objectFit: "contain" }}
                          />
                          <Card.Text className="mt-2">AMAZER 4G LIFE</Card.Text>
                          <Card.Text className="text-secondary">
                            145/80 R12
                          </Card.Text>
                          <div className="d-flex gap-2 align-items-center">
                            <div className="d-flex align-items-center bg-success text-white rounded-2 px-2">
                              <i className="bi bi-star-fill"></i>
                              <span className="ms-1">4</span>
                            </div>
                            <p className="text-secondary mb-0">320 Reviews</p>
                          </div>
                          <Card.Text className="mt-2">₹ {tyre.price}</Card.Text>
                          <Card.Text className="text-success">
                            Offer available
                          </Card.Text>
                          <Card.Text className="text-secondary">
                            Tubeless
                          </Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>

          {/* View More Button */}
          {visibleCount < initialTyreSoldByDealers.length && (
            <Button
              variant="outline-secondary"
              className="d-block mx-auto"
              onClick={loadMore}
            >
              View More
            </Button>
          )}
        </Container>

        <style jsx>{`
          @media (max-width: 768px) {
            .testimonial-card {
              margin: 0 10px;
            }
          }
          .dropdown-menu-custom {
            max-height: 200px;
            overflow-y: auto;
            scrollbar-width: none;
            padding: 0;
            border-radius: 0.25rem;
          }

          .dropdown-menu-custom::-webkit-scrollbar {
            display: none;
          }

          .dropdown-item {
            outline: none;
          }

          .dropdown-item:hover,
          .dropdown-item:focus {
            color: #fff;
            box-shadow: none;
            outline: none;
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

export default TyreSold;
