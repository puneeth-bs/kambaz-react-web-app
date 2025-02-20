import { useParams } from "react-router";
import * as db from "../../Database"; // Import assignments from database
import { Button, Container, Form, ListGroup, Row, Col, InputGroup } from "react-bootstrap";
import { FaCheckCircle, FaEllipsisV, FaSearch, FaRegFileAlt } from "react-icons/fa"; // Import document icon
import { BsGripVertical } from "react-icons/bs"; // Import drag handle icon
import "./assignments.css";

export default function Assignments() {
  const { cid } = useParams(); // Get Course ID from URL
  const assignments = db.assignments || []; // Ensure assignments data exists

  // Filter assignments based on selected course
  const filteredAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <Container fluid className="p-3">
      {/* Search and Buttons */}
      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text className="bg-white text-muted">
              <FaSearch />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Search..." />
          </InputGroup>
        </Col>
        <Col md="auto">
          <Button variant="light" className="me-2">+ Group</Button>
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
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <ListGroup.Item key={assignment._id} className="assignment-item d-flex align-items-center">
              {/* Left-side Icons: BsGripVertical + Document Icon */}
              <div className="d-flex align-items-center me-3">
                <BsGripVertical className="text-secondary fs-5" />
                <FaRegFileAlt className="text-success ms-2 fs-5" /> {/* Document Icon */}
              </div>

              {/* Assignment Content */}
              <div className="flex-fill">
                <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="assignment-link">
                  <strong>{assignment.title}</strong>
                </a>
                <p className="text-muted mb-1">
                  <span className="text-danger">Multiple Modules</span> | 
                  <strong> Not available until</strong> May 6 at 12:00 AM
                </p>
                <p className="text-muted">Due May 13 at 11:59 PM | 100 pts</p>
              </div>

              {/* Right-side Icons */}
              <div>
                <FaCheckCircle className="text-success me-3 fs-5" />
                <FaEllipsisV className="text-muted fs-5" />
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <p className="text-muted p-3">No assignments available for this course.</p>
        )}
      </ListGroup>
    </Container>
  );
}
