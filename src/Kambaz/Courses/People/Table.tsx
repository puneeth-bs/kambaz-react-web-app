import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
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
          {/* Tony Stark */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Tony Stark
            </td>
            <td>001234561S</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-10-01</td>
            <td>10:21:32</td>
          </tr>

          {/* Bruce Wayne */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Bruce Wayne
            </td>
            <td>001234562B</td>
            <td>S102</td>
            <td>STUDENT</td>
            <td>2020-10-02</td>
            <td>15:45:10</td>
          </tr>

          {/* Steve Rogers */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Steve Rogers
            </td>
            <td>001234563C</td>
            <td>S103</td>
            <td>STUDENT</td>
            <td>2020-09-29</td>
            <td>20:30:50</td>
          </tr>

          {/* Natasha Romanoff */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Natasha Romanoff
            </td>
            <td>001234564N</td>
            <td>S104</td>
            <td>STUDENT</td>
            <td>2020-10-03</td>
            <td>18:12:40</td>
          </tr>

          {/* Clark Kent */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Clark Kent
            </td>
            <td>001234565K</td>
            <td>S105</td>
            <td>STUDENT</td>
            <td>2020-09-28</td>
            <td>25:10:15</td>
          </tr>

          {/* Diana Prince */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Diana Prince
            </td>
            <td>001234566D</td>
            <td>S106</td>
            <td>STUDENT</td>
            <td>2020-10-05</td>
            <td>12:45:33</td>
          </tr>

          {/* Peter Parker */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Peter Parker
            </td>
            <td>001234567P</td>
            <td>S107</td>
            <td>TA</td>
            <td>2020-10-07</td>
            <td>8:55:20</td>
          </tr>

          {/* Wade Wilson */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Wade Wilson
            </td>
            <td>001234568W</td>
            <td>S108</td>
            <td>TA</td>
            <td>2020-10-08</td>
            <td>30:20:45</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
