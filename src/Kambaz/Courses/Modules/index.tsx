import {
  Button,
  Dropdown,
  ListGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import "./Modules.css"; // Custom styles for necessary enhancements

export default function Modules() {
  return (
    <Container fluid className="p-3">
      {/* Header Controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <Button variant="light" className="me-2">Collapse All</Button>
          <Button variant="light" className="me-2">View Progress</Button>

          {/* Publish Dropdown */}
          <Dropdown className="d-inline-block me-2">
            <Dropdown.Toggle variant="success">✅ Publish All</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Publish all modules and items</Dropdown.Item>
              <Dropdown.Item>Publish modules only</Dropdown.Item>
              <Dropdown.Item>Unpublish all modules and items</Dropdown.Item>
              <Dropdown.Item>Unpublish modules only</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Add Module Button */}
          <Button variant="danger"><FaPlus /> Module</Button>
        </div>
      </div>

      {/* Modules List */}
      <ListGroup className="modules-list">
        {/* Week 1 */}
        <ListGroup.Item className="module-header">
          <Row className="w-100">
            <Col md={10}><strong>Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</strong></Col>
            <Col md={2} className="text-end">
              <FaCheckCircle className="text-success me-2" />
              <FaPlus className="text-secondary me-2" />
              <FaEllipsisV />
            </Col>
          </Row>
        </ListGroup.Item>

        {/* Learning Objectives */}
        <ListGroup.Item className="sub-header">LEARNING OBJECTIVES</ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Introduction to the course
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Learn what is Web Development
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>

        {/* Reading */}
        <ListGroup.Item className="sub-header">READING</ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Full Stack Developer - Chapter 1 - Introduction
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>

        {/* Slides */}
        <ListGroup.Item className="sub-header">SLIDES</ListGroup.Item>
        <ListGroup.Item className="sub-item text-danger d-flex justify-content-between align-items-center">
          Introduction to Web Development
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Creating an HTTP server with Node.js
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>
        <ListGroup.Item className="sub-item text-danger d-flex justify-content-between align-items-center">
          Creating a React Application
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>

        {/* Week 2 */}
        <ListGroup.Item className="module-header">
          <Row className="w-100">
            <Col md={10}><strong>Week 1, Lecture 2 - Formatting User Interfaces with HTML</strong></Col>
            <Col md={2} className="text-end">
              <FaCheckCircle className="text-success me-2" />
              <FaPlus className="text-secondary me-2" />
              <FaEllipsisV />
            </Col>
          </Row>
        </ListGroup.Item>

        {/* Learning Objectives */}
        <ListGroup.Item className="sub-header">LEARNING OBJECTIVES</ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Learn how to create user interfaces with HTML
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Deploy the assignment to Netlify
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>

        {/* Slides */}
        <ListGroup.Item className="sub-header">SLIDES</ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Introduction to HTML and the DOM
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Formatting Web content with Headings and Tables
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>
        <ListGroup.Item className="sub-item d-flex justify-content-between align-items-center">
          Formatting content with Lists and Tables
          <FaCheckCircle className="text-success" />
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
