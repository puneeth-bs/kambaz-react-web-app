import { Link } from "react-router-dom";
import { Row, Card, Button, Col, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import * as db from "./Database";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addStudentEnrollment, removeStudentEnrollment } from "./Courses/People/reducer";
export default function Dashboard(
  // { courses, course, setCourse, addNewCourse,
  // deleteCourse, updateCourse }: {
  // courses: any[]; course: any; setCourse: (course: any) => void;
  // addNewCourse: () => void; deleteCourse: (course: any) => void;
  // updateCourse: () => void; }
)
  {
    const [showCourses,setShowCourses] = useState(false);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courses } = useSelector((state: any) => state.courseReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const enrolledCourses = courses.filter((c:any)=>enrollments.some((enrollment:any)=> c._id===enrollment.course && enrollment.user === currentUser._id))
    const showEnrolledCourses = showCourses? courses:enrolledCourses;
    const dispatch = useDispatch();
    const courseToAdd={_id: uuidv4(),
          name: "New Course Name", 
          endDate: "2026-02-09", number: "New Course Number",description: "New Course Description",startDate: "2025-12-07",
          department: "D123",
      credits: 4,
      }
      const [course, setCourse] = useState(courseToAdd);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (<><h5>New Course<button className="btn btn-primary float-end" id="wd-add-new-course-click"
          onClick={() => { const duplicateCreateBugSolve={...course,_id: uuidv4()}
          setCourse(duplicateCreateBugSolve) 
          dispatch(addStudentEnrollment({course:course, user:currentUser}))
          dispatch(addCourse(course))}} > Add </button>
          <button className="btn btn-warning float-end me-2" onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update
        </button>
      </h5><hr />
      <FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <FormControl value={course.description} as="textarea" rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      </> )}
      <br/>
      {currentUser.role === "STUDENT" && <Button onClick={() => setShowCourses(!showCourses)} className="float-end">Enrollments</Button>}
      <h2 id="wd-dashboard-published">Published Courses ({showEnrolledCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {showEnrolledCourses.map((c:any) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <Card.Img variant="top" src="/images/course_2.jpg" width="100%" height={160} />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" >{c.name}</Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{c.description}</Card.Text>
                    <Button variant="primary">Go</Button>
                    {currentUser.role === "FACULTY" && (<>
                    <Button variant="danger" onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteCourse(c._id));
                    }} className="float-end"
                      id="wd-delete-course-click">
                      Delete
                    </Button>
                    <Button variant="warning" id="wd-edit-course-click"
                      onClick={(e) => {
                        e.preventDefault();
                        setCourse(c);
                      }}
                      className="me-2 float-end" >
                      Edit
                    </Button>
                    </>)}
                    {currentUser.role==="STUDENT" && (enrollments.some((enrollment: any) =>
                      enrollment.course === c._id && currentUser._id  ===  enrollment.user)?<Button 
                      onClick={(e)=>{e.preventDefault(); dispatch(removeStudentEnrollment({course:c, user:currentUser}))
                      }} variant="danger" className="float-end">Uneroll</Button>:
                      <Button onClick={(e)=>{e.preventDefault(); dispatch(addStudentEnrollment({course:c, user:currentUser}))
                    }} variant="success" className="float-end">Enroll</Button>)}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div></div>

  );
}


