import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; // Import assignments from database
import { Container, Form, Row, Col, Card } from "react-bootstrap";
import "./assignmenteditor.css";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get cid and assignmentId from URL
  const assignments = db.assignments || []; // Ensure assignments data exists

  // Find the selected assignment
  const assignment = assignments.find((a) => a._id === aid);

  if (!assignment) {
    return <p className="text-muted p-3">Assignment not found.</p>;
  }

  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={8} lg={6} className="assignment-editor">
          {/* Assignment Name */}
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Assignment Name</strong>
            </Form.Label>
            <Form.Control type="text" defaultValue={assignment.title} />
          </Form.Group>

          {/* Description Box */}
          <Card className="mb-3 p-3">
            <p>
              The assignment is <a href="#">available online</a>
            </p>
            <p>
              Submit a link to the landing page of your Web application running
              on <a href="#">Netlify</a>.
            </p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>
                Link to the <a href="#">Kanbas</a> application
              </li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>
              The <a href="#">Kanbas</a> application should include a link to
              navigate back to the landing page.
            </p>
          </Card>

          {/* Points */}
          <Form.Group as={Row} className="mb-3 justify-content-end">
            <Form.Label column sm={4} className="text-end">
              Points
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="number" defaultValue={assignment.points || 100} className="small-input" />
            </Col>
          </Form.Group>

          {/* Assignment Group */}
          <Form.Group as={Row} className="mb-3 justify-content-end">
            <Form.Label column sm={4} className="text-end">
              Assignment Group
            </Form.Label>
            <Col sm={6}>
              <Form.Select>
                <option>ASSIGNMENTS</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Display Grade As */}
          <Form.Group as={Row} className="mb-3 justify-content-end">
            <Form.Label column sm={4} className="text-end">
              Display Grade as
            </Form.Label>
            <Col sm={6}>
              <Form.Select>
                <option>Percentage</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Submission Type */}
          <Form.Group as={Row} className="mb-3 justify-content-end">
            <Form.Label column sm={4} className="text-end">
              Submission Type
            </Form.Label>
            <Col sm={6}>
              <Form.Select>
                <option>Online</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Online Entry Options */}
          <div className="d-flex justify-content-end">
            <Card className="p-3 mb-3 online-entry-card">
              <strong>Online Entry Options</strong>
              <Form.Check type="checkbox" label="Text Entry" />
              <Form.Check type="checkbox" label="Website URL" defaultChecked />
              <Form.Check type="checkbox" label="Media Recordings" />
              <Form.Check type="checkbox" label="Student Annotation" />
              <Form.Check type="checkbox" label="File Uploads" />
            </Card>
          </div>

          <div className="d-flex justify-content-end">
            <Card className="p-3 mb-3 assign-to-card">
              <Form.Group as={Row} className="justify-content-end">
                <Form.Label column sm={4} className="text-end">
                  <strong>Assign to</strong>
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="text" value="Everyone" readOnly />
                </Col>
              </Form.Group>

              {/* Due Date */}
              <Form.Group as={Row} className="mt-3 justify-content-end">
                <Form.Label column sm={4} className="text-end">
                  Due
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="date" defaultValue="2024-05-13" />
                </Col>
              </Form.Group>

              {/* Available From & Until */}
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group as={Row} className="justify-content-end">
                    <Form.Label column sm={6} className="text-end">
                      Available from
                    </Form.Label>
                    <Col sm={6}>
                      <Form.Control type="date" defaultValue="2024-05-06" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group as={Row} className="justify-content-end">
                    <Form.Label column sm={6} className="text-end">
                      Until
                    </Form.Label>
                    <Col sm={6}>
                      <Form.Control type="date" defaultValue="" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Card>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-2 mt-3">
            <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">
              Cancel
            </Link>
            <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
              Save
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
