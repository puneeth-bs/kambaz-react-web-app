import Modules from "../Modules";
import CourseStatus from "./Status";
import "./home.css"

export default function Home() {
  return (
    <div className="home-container">
      <div className="modules">
        <Modules />
      </div>
      <div className="course-status">
        <CourseStatus />
      </div>
    </div>
  );
}
