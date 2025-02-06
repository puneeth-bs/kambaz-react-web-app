import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      className="position-fixed bottom-0 top-0 d-none d-md-block z-2 bg-black"
      style={{ width: 110 }}
    >
      {/* Northeastern Logo */}
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center mt-3"
      >
        <img src="/images/northeastern1.png" width="75px" alt="Northeastern Logo" />
      </a>

      {/* Navigation Links */}
      <NavLink
        to="/Kambaz/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white mt-3"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "white" : "black",
          color: isActive ? "red" : "white",
        })}
      >
        <FaRegCircleUser className="fs-1" />
        <br />
        Account
      </NavLink>

      <NavLink
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0 mt-3"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "white" : "black",
          color: isActive ? "red" : "white",
        })}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </NavLink>

      <NavLink
        to="/Kambaz/Courses"
        id="wd-course-link"
        className="list-group-item text-center border-0 mt-3"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "white" : "black",
          color: isActive ? "red" : "white",
        })}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </NavLink>

      <NavLink
        to="/Kambaz/Calendar"
        id="wd-calendar-link"
        className="list-group-item text-center border-0 mt-3"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "white" : "black",
          color: isActive ? "red" : "white",
        })}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </NavLink>

      <NavLink
        to="/Kambaz/Inbox"
        id="wd-inbox-link"
        className="list-group-item text-center border-0 mt-3"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "white" : "black",
          color: isActive ? "red" : "white",
        })}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </NavLink>

      <NavLink
        to="/Kambaz/Labs"
        id="wd-labs-link"
        className="list-group-item text-center border-0 mt-3"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "white" : "black",
          color: isActive ? "red" : "white",
        })}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </NavLink>
    </div>
  );
}
