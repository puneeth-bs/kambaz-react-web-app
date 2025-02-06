import { NavLink } from "react-router-dom";
import "../styles.css";

export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        to="/Kambaz/Courses/1234/Home"
        id="wd-course-home-link"
        className="list-group-item border border-0"
      >
        Home
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Modules"
        id="wd-course-modules-link"
        className="list-group-item border border-0 text-danger"
      >
        Modules
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className="list-group-item border border-0 text-danger"
      >
        Piazza
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className="list-group-item border border-0 text-danger"
      >
        Zoom
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className="list-group-item border border-0 text-danger"
      >
        Assignments
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className="list-group-item border border-0 text-danger"
      >
        Quizzes
      </NavLink>
      <NavLink
        to="/Kambaz/Courses/1234/People"
        id="wd-course-people-link"
        className="list-group-item border border-0 text-danger"
      >
        People
      </NavLink>
    </div>
  );
}
