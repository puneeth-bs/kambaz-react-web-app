import { NavLink } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import "../styles.css";

export default function CourseNavigation() {
  const { cid } = useParams(); // Retrieve the course ID from the URL
  const location = useLocation(); // Get the current path

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink
          key={link}
          to={`/Kambaz/Courses/${cid}/${link}`}
          className={`list-group-item border border-0 ${location.pathname.includes(link) ? "text-danger" : ""}`}
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
}
