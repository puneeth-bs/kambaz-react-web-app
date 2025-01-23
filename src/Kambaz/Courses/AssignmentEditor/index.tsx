export default function AssignmentEditor() {
  return (
    <div id="wd-assignments">
      <h3 id="wd-name">Assignment Name</h3>
      <table style={{ borderSpacing: "10px" }}>
        <tbody>
          <tr>
            <td>
              <label htmlFor="wd-assignment-title">Title:</label>
            </td>
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
            <td>
              <label htmlFor="wd-assignment-description">Description:</label>
            </td>
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
            <td>
              <label htmlFor="wd-points">Points:</label>
            </td>
            <td>
              <input
                type="number"
                id="wd-points"
                value="100"
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-group">Assignment Group:</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-display-grade-as">Display Grade as:</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-submission-type">Submission Type:</label>
            </td>
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
              Online Entry Options
                <label htmlFor="wd-text-entry">
                  <input type="checkbox" id="wd-text-entry" /> Text Entry
                </label>
                <label htmlFor="wd-website-url">
                  <input type="checkbox" id="wd-website-url" /> Website URL
                </label>
                <label htmlFor="wd-media-recordings">
                  <input type="checkbox" id="wd-media-recordings" /> Media Recordings
                </label>
                <label htmlFor="wd-student-annotation">
                  <input type="checkbox" id="wd-student-annotation" /> Student Annotation
                </label>
                <label htmlFor="wd-file-upload">
                  <input type="checkbox" id="wd-file-upload" /> File Uploads
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-assign-to">Assign To:</label>
            </td>
            <td>
              <input type="text" id="wd-assign-to" value="Everyone" readOnly />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-due-date">Due:</label>
            </td>
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