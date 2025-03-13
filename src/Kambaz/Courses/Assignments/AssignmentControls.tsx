import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Link,  useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAssignment } from "./reducer";
export default function AssignmentControls() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const newAssignment={
    title:"New Title",
    course:cid,
    points:"100",
    description:"New Description",
        dueDate:"2025-06-26",
        fromDate:"2025-06-26",
        untilDate:"2025-06-26",
        notUntilDate:"2025-06-26"
}
const [show, setShow] = useState(false);
//  const handleClose = () => setShow(false);
 const handleShow = () => {
    dispatch(setAssignment(newAssignment));
    setShow(true); 
};
console.log(show);

    return (
        <div className="text-nowrap">
            <Link to={`/Kambaz/Courses/${cid}/Assignments/new`}>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment" onClick={handleShow}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            </Link>
            {/* <AssignmentEditor show={show} handleClose={handleClose} dialogTitle="Add Module" /> */}
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
            <span className="bg-white border-start border-top border-bottom" style={{ padding: "0.375rem 0.75rem", float: "left" }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <FormControl type="text" placeholder="Search..." id="wd-search-assignment" className="border-start-0" style={{float: "left",width: "33%"}}></FormControl>
        </div>
    );
}