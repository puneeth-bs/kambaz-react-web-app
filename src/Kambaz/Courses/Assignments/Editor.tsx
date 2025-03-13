import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams,Link } from "react-router-dom";
// import { assignments } from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, setAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
export default function AssignmentEditor(
  // { show, handleClose, dialogTitle,}: {
  //   show: boolean; handleClose: () => void; dialogTitle: string; }
) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
   const handleClose = () => setShow(false);
  const { cid } = useParams();
  const { aid } = useParams();
  const dispatch = useDispatch();
  const { assignment } = useSelector((state: any) => state.assignmentReducer);
  const handleSaveButton = () => {
    if (aid === "new") {
        dispatch(addAssignment({
            ...assignment
        }));
    } else {
        dispatch(updateAssignment({
            ...assignment
        }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
};
console.log(assignment);
  return (
    <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title></Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <div id="wd-assignments-editor" >

      <Form>
        {/* {assignments
          .filter((assignment: any) => assignment.course === cid && assignment._id===aid)
          .map((assignment: any) => ( */}
            <FormGroup>
              <FormGroup>
                <FormLabel htmlFor="wd-name">
                  <h3>{assignment.title}</h3>
                </FormLabel>
                <FormControl type="text" id="wd-name" value={assignment.title} onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))} >

                </FormControl>
              </FormGroup>
              <FormGroup><br />
                <FormControl as="textarea" id="wd-description" rows={5} value={assignment.description} onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}>
                  
                </FormControl>
              </FormGroup><br />
              <FormGroup as={Row}>
                <Col md="3" className="text-end">
                  <FormLabel htmlFor="wd-points" className="mb-0">
                    Points
                  </FormLabel>
                </Col>
                <Col md="9">
                  <FormControl type="text" id="wd-points" value={assignment.points} onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))} />
                </Col>
              </FormGroup><br />
              <FormGroup as={Row}>
                <Col md="3" className="text-end">
                  <FormLabel htmlFor="wd-group" className="mb-0">
                    Assignment Group
                  </FormLabel>
                </Col>
                <Col md="9">
                  <Form.Select id="wd-group">
                    <option value={"ASSIGNMENTS"}>ASSIGNMENTS</option>
                    <option value={"PROJECT"}>PROJECT</option>
                    <option value={"QUIZZES"}>QUIZZES</option>
                    <option value={"EXAMS"}>EXAMS</option>
                  </Form.Select>
                </Col>
              </FormGroup><br />
              <FormGroup as={Row}>
                <Col md="3" className="text-end">
                  <FormLabel htmlFor="wd-display-grade-as" className="mb-0">
                    Display Grade as
                  </FormLabel>
                </Col>
                <Col md="9">
                  <Form.Select id="wd-display-grade-as">
                    <option value={"Percentage"}>Percentage</option>
                    <option value={"Marks"}>Marks</option>
                    <option value={"Percentile"}>Percentile</option>
                  </Form.Select>
                </Col>
              </FormGroup><br />
              <FormGroup as={Row}>
                <Col md="3" className="text-end">
                  <FormLabel htmlFor="wd-submission-type" className="mb-0">
                    Submission Type
                  </FormLabel>
                </Col>
                <Col md="9" >
                  <div className="border px-2">
                    <Form.Select id="wd-submission-type" className="mt-2">
                      <option value={"Online"}>Online</option>
                      <option value={"Offline"}>Offline</option>
                      <option value={"Hybrid"}>Hybrid</option>
                    </Form.Select><br />
                    <FormGroup>
                      <span><strong>Online Entry Options</strong></span><br /><br />
                      <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" /><br />
                      <FormCheck type="checkbox" id="wd-website-url" label="Website URL" defaultChecked /><br />
                      <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" /><br />
                      <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" /><br />
                      <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" /><br />
                    </FormGroup>
                  </div>
                </Col>
              </FormGroup><br />
              <FormGroup as={Row}>
                <Col md="3" className="text-end">
                  <FormLabel htmlFor="wd-assign-to" className="mb-0">
                    Assign
                  </FormLabel>
                </Col>
                <Col md="9" >
                  <div className="border px-2 pb-4">
                    <br />
                    <FormLabel htmlFor="wd-assign-to" className="mb-0">
                      <strong>Assign to</strong>
                    </FormLabel>
                    <FormControl type="text" id="wd-assign-to" className="mt-2" value={"Everyone"}>

                    </FormControl><br />
                    <FormLabel htmlFor="wd-due-date" className="mb-0">
                      <strong>Due</strong>
                    </FormLabel>
                    <FormControl type="date" value={assignment.dueDate} id="wd-due-date" onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}></FormControl>
                    <br />
                    <Row>
                      <Col>
                        <FormLabel htmlFor="wd-available-from" className="mb-0">
                          <strong>Available From</strong>
                        </FormLabel><br />
                        <FormControl type="date" value={assignment.fromDate} id="wd-available-from" onChange={(e) => dispatch(setAssignment({ ...assignment, fromDate: e.target.value }))}></FormControl>
                      </Col>
                      <Col>
                        <FormLabel htmlFor="wd-available-until" className="mb-0">
                          <strong>Until</strong>
                        </FormLabel>
                        <FormControl type="date" value={assignment.untilDate} id="wd-available-until" onChange={(e) => dispatch(setAssignment({ ...assignment, untilDate: e.target.value }))}></FormControl>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </FormGroup><br />
              <hr></hr>
              <Modal.Footer>
              <FormGroup as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <div className="d-flex justify-content-end">
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                    <Button variant="secondary" className="me-2">
                      Cancel
                    </Button>
                    </Link>
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                    <Button variant="danger" onClick={handleSaveButton}>
                      Save
                    </Button>
                    </Link>
                  </div>
                </Col>
              </FormGroup>
              </Modal.Footer>
            </FormGroup>
          {/* ))} */}
      </Form>
    </div>
    </Modal.Body>
    </Modal>
  );
}
