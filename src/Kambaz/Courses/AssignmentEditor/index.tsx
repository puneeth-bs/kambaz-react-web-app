export default function AssignmentEditor() {
  return (
    <div id="wd-assignments">
      <h3 id="wd-assignment-name">Assignment Name</h3>
      <table style={{ borderSpacing: "10px" }}>
        <tbody>
          <tr>
            <td>Title:</td>
            <td>
              <input
                type="text"
                id="wd-assignment-title"
                placeholder="Assignment Title"
                value="A1 - ENV + HTML"
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>
              <textarea
                id="wd-assignment-description"
                style={{ width: "400px", height: "150px" }}
                placeholder="Assignment Description"
                defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page."
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Points:</td>
            <td>
              <input
                type="number"
                id="wd-assignment-points"
                value="100"
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>Assignment Group:</td>
            <td>
              <select id="wd-assignment-group">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Display Grade as:</td>
            <td>
              <select id="wd-display-grade">
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Submission Type:</td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <div id="wd-online-entry-options" style={{ display: "flex", flexDirection: "column" }}>
                <label>
                  <text>Online Option Entry</text>
                </label>
                <label>
                  <input type="checkbox" /> Text Entry
                </label>
                <label>
                  <input type="checkbox" /> Website URL
                </label>
                <label>
                  <input type="checkbox" /> Media Recordings
                </label>
                <label>
                  <input type="checkbox" /> Student Annotation
                </label>
                <label>
                  <input type="checkbox" /> File Uploads
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>Assign To:</td>
            <td>
              <input type="text" id="wd-assign-to" value="Everyone" readOnly />
            </td>
          </tr>
          <tr>
            <td>Due:</td>
            <td>
              <input type="date" id="wd-due-date" value="2024-05-13" readOnly />
            </td>
          </tr>
          <tr>
            <td>Availability:</td>
            <td>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <label htmlFor="wd-available-from">Available from:</label>
                  <input
                    type="date"
                    id="wd-available-from"
                    value="2024-05-06"
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="wd-available-until">Until:</label>
                  <input
                    type="date"
                    id="wd-available-until"
                    value="2024-05-20"
                    readOnly
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr style={{ marginTop: "20px", border: "1px solid #ccc" }} />
      <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button id="wd-cancel-button">Cancel</button>
        <button id="wd-save-button">Save</button>
      </div>
    </div>
  );
}