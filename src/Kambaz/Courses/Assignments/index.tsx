import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdEditDocument } from "react-icons/md";
import { useParams } from "react-router";
// import { assignments } from "../../Database";
import { parse, format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setAssignment } from "./reducer";
import IndividualAssignmentControlButtons from "./IndividualAssignmentControlButtons";
export default function Assignments() {
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const {cid} = useParams();
  const dispatch = useDispatch();
  const formatDate = (dateString: string) => {
    const parsedDate = parse(dateString, "yyyy-MM-dd", new Date());
    return format(parsedDate, "MMMM d, yyyy");
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-assignments">
      {currentUser.role === "FACULTY" && <AssignmentControls />}<br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary1" id="wd-assignments-title"><BsGripVertical className="me-2 fs-3" /><FontAwesomeIcon icon={faCaretDown} /> ASSIGNMENTS<AssignmentControlButtons />
          </div>
          <ListGroup className="wd-lesson rounded-0" id="wd-assignment-list">
          {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-assignment-list-item">
              <div className="d-flex">
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BsGripVertical className="me-2 fs-3" />
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MdEditDocument className="me-2 fs-3" style={{ color: '#008000' }} />
                </span>
                <div className="position-relative flex-grow-1">
                  <IndividualAssignmentControlButtons deleteAssignmentId={assignment._id}/>
                  {currentUser.role === "FACULTY" ? (<a className="wd-assignment-link text-black link-underline link-underline-opacity-0" href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} onClick={() => dispatch(setAssignment(assignment))}>
                    <b>{assignment.title}</b>
                  </a>):(
                    <b>{assignment.title}</b>
                  )}
                  <div>
                    <p><text className="text-danger">Multiple Modules</text> | <b>Not Available until</b> {formatDate(assignment.notUntilDate)} at {assignment.time} | <b>Due</b> {formatDate(assignment.dueDate)} at {assignment.time} | {assignment.points} pts</p>
                  </div>
                </div></div>
            </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>

      </ListGroup>

    </div>
  );
}
