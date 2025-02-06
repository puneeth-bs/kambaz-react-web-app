import { Button, Container, Form, ListGroup, Row, Col, InputGroup } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import "./assignments.css"

export default function Assignments() {
  return (
    <Container fluid className="p-3">
      {/* Search and Buttons */}
      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <Form.Control type="text" placeholder="Search..." />
          </InputGroup>
        </Col>
        <Col md="auto">
          <Button variant="secondary" className="me-2">+ Group</Button>
          <Button variant="danger">+ Assignment</Button>
        </Col>
      </Row>

      {/* Assignments Header */}
      <div className="d-flex justify-content-between align-items-center p-2 bg-light border">
        <strong>ASSIGNMENTS</strong>
        <Button variant="light" size="sm">40% of Total</Button>
      </div>

      {/* Assignment List */}
      <ListGroup>
        {/* Assignment 1 */}
        <ListGroup.Item className="assignment-item d-flex justify-content-between align-items-center">
          <div>
            <a href="#/Kambaz/Courses/1234/Assignments/123" className="assignment-link">
              <strong>A1</strong>
            </a>
            <p className="text-muted mb-1">
              <span className="text-danger">Multiple Modules</span> | 
              <strong> Not available until</strong> May 6 at 12:00 AM
            </p>
            <p className="text-muted">Due May 13 at 11:59 PM | 100 pts</p>
          </div>
          <div>
            <FaCheckCircle className="text-success me-3 fs-5" />
            <FaEllipsisV className="text-muted fs-5" />
          </div>
        </ListGroup.Item>

        {/* Assignment 2 */}
        <ListGroup.Item className="assignment-item d-flex justify-content-between align-items-center">
          <div>
            <a href="#/Kambaz/Courses/1234/Assignments/124" className="assignment-link">
              <strong>A2</strong>
            </a>
            <p className="text-muted mb-1">
              <span className="text-danger">Multiple Modules</span> | 
              <strong> Not available until</strong> May 13 at 12:00 AM
            </p>
            <p className="text-muted">Due May 20 at 11:59 PM | 100 pts</p>
          </div>
          <div>
            <FaCheckCircle className="text-success me-3 fs-5" />
            <FaEllipsisV className="text-muted fs-5" />
          </div>
        </ListGroup.Item>

        {/* Assignment 3 */}
        <ListGroup.Item className="assignment-item d-flex justify-content-between align-items-center">
          <div>
            <a href="#/Kambaz/Courses/1234/Assignments/125" className="assignment-link">
              <strong>A3</strong>
            </a>
            <p className="text-muted mb-1">
              <span className="text-danger">Multiple Modules</span> | 
              <strong> Not available until</strong> May 20 at 12:00 AM
            </p>
            <p className="text-muted">Due May 27 at 11:59 PM | 100 pts</p>
          </div>
          <div>
            <FaCheckCircle className="text-success me-3 fs-5" />
            <FaEllipsisV className="text-muted fs-5" />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
