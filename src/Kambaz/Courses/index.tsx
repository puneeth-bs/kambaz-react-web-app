import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom"
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation"
import Modules from "./Modules"
import Home from "./Home"
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/Editor"
import PeopleTable from "./People/Table";
import ProtectedRouteCourse from "./ProtectedRouteCourse";
// import {courses} from "../Database";
export default function Courses({ courses }: { courses: any[]; }) {
  const {cid} = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
    return (
        <div id="wd-courses">
        <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
        </h2>
        <hr />
        {/* <table>
          <tr>
            <td valign="top"> */}
             <div className="d-flex">
             <div className="d-none d-md-block">
              <CourseNavigation />
              </div>
            {/* </td>
            <td valign="top"> */}
            <div className="flex-fill">
              <Routes>
                <Route path="/" element={<ProtectedRouteCourse><Navigate to="Home" /></ProtectedRouteCourse>} />
                <Route path="Home" element={<ProtectedRouteCourse><Home/></ProtectedRouteCourse>} />
                <Route path="Modules" element={<ProtectedRouteCourse><Modules /></ProtectedRouteCourse>} />
                <Route path="Assignments" element={<ProtectedRouteCourse><Assignments /></ProtectedRouteCourse>} />
                <Route path="Assignments/:aid" element={<ProtectedRouteCourse><AssignmentEditor/></ProtectedRouteCourse>} />
                <Route path="People" element={<ProtectedRouteCourse><PeopleTable /></ProtectedRouteCourse>} />
              </Routes>
              </div>
              </div>
            {/* </td>
          </tr>
        </table> */}
      </div>
  );}
  