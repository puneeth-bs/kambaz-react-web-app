import { useParams } from "react-router";
import * as db from "../../Database"; // Import users and enrollments from the database
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const { cid } = useParams(); // Get Course ID from URL
  const users = db.users || []; // Ensure users data exists
  const enrollments = db.enrollments || []; // Ensure enrollments data exists

  // Filter users who are enrolled in the selected course
  const enrolledUsers = users.filter((user) =>
    enrollments.some((enrollment) => enrollment.user === user._id && enrollment.course === cid)
  );

  return (
    <div id="wd-people-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.length > 0 ? (
            enrolledUsers.map((user) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.loginId}</td>
                <td>{user.section}</td>
                <td>{user.role}</td>
                <td>{user.lastActivity}</td>
                <td>{user.totalActivity}</td>
              </tr>
            ))
          ) : (
            <tr>
              {/* <td colSpan="6" className="text-center text-muted">
                No users enrolled in this course.
              </td> */}
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
