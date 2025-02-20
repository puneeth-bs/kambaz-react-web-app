import { Button, Dropdown, Container } from "react-bootstrap";
import { FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../Database";
import "./modules.css"; // Custom styles for necessary enhancements
import { useParams } from "react-router";
import { FaBan } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function Modules() {
  const { cid } = useParams(); // Get course ID from URL
  const modules = db.modules || []; // Ensure modules data exists

  console.log("Course ID from URL (cid):", cid);
  console.log("Modules Data:", modules);

  const filteredModules = modules.filter(
    (module: any) => module.course === cid
  );
  console.log("Filtered Modules:", filteredModules);
  return (
    <Container fluid className="p-3">
      {/* Header Controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <Button variant="secondary" className="me-2">
            Collapse All
          </Button>
          <Button variant="secondary" className="me-2">
            View Progress
          </Button>

          {/* Publish Dropdown */}
          <Dropdown className="d-inline-block me-2">
            <Dropdown.Toggle variant="secondary">
              <GreenCheckmark /> Publish All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <GreenCheckmark /> Publish all modules and items
              </Dropdown.Item>
              <Dropdown.Item>
                <GreenCheckmark /> Publish modules only
              </Dropdown.Item>
              <Dropdown.Item>
                <FaBan className="text-muted me-2" /> Unpublish all modules and
                items
              </Dropdown.Item>
              <Dropdown.Item>
                <FaBan className="text-muted me-2" /> Unpublish modules only
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Add Module Button */}
          <Button variant="danger">
            <FaPlus /> Module
          </Button>
        </div>
      </div>

      {/* Modules List */}
      <ul id="wd-modules" className="list-group rounded-0">
        {filteredModules.length > 0 ? (
          filteredModules.map((module: any) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              {/* Module Title */}
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                {/* Left Side: Drag Handle + Module Name */}
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" /> {module.name}
                </div>

                {/* Right Side: Icons aligned to the end */}
                {/* Right Side: Icons aligned to the end */}
                <div className="d-flex align-items-center">
                  <FaPlus className="text-dark me-3" /> {/* Black Plus Icon */}
                  <FaCheckCircle className="text-success fs-4" />{" "}
                  {/* <GreenCheckmark /> */}
                  {/* Normal Green Check Circle */}
                </div>
              </div>

              {/* Lessons inside the module */}
              {module.lessons && module.lessons.length > 0 ? (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                    >
                      {/* Left Side: Drag Handle + Lesson Name */}
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                      </div>

                      {/* Right Side: Icons aligned to the end */}
                      <div className="d-flex align-items-center">
                        <FaCheckCircle className="text-success me-3" />
                        <FaEllipsisV />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-3 text-muted">
                  No lessons available for this module.
                </p>
              )}
            </li>
          ))
        ) : (
          <p className="text-muted p-3">
            No modules available for this course.
          </p>
        )}
      </ul>
    </Container>
  );
}
