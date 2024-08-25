import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AskQuestion = () => {
  return (
    // Container with background color and padding, using fluid for full width
    <Container
      className="container mt-4 p-4 rounded-top-3"
      style={{ backgroundColor: "#FFEAAA" }}
      fluid
    >
      <Row className="d-flex align-items-center">
        {/* Text Section: Uses 50% width on all devices */}
        <Col xs={6} md={6}>
          <h3>Have a question about Tyres?</h3>
          <p>Get an answer in 24 hours from our experts.</p>
          <Form>
            <Form.Group controlId="formBasicInput">
              <Form.Label>Enter Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ask or search your question"
              />
            </Form.Group>
          </Form>
        </Col>

        {/* Image Section: Uses 50% width on all devices, centers image */}
        <Col xs={6} md={6} className="text-center">
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"
            alt="Have a Question"
            className="img-fluid"  // Ensures the image is responsive
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AskQuestion;
