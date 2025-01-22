export default function Modules() {
  return (
    <div id="wd-modules" style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>Publish All</button>
        <button>+ Module</button>
      </div>
      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
        <li style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: "bold" }}>Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <div style={{ fontWeight: "bold" }}>LEARNING OBJECTIVES</div>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Introduction to the course</li>
                <li>Learn what is Web Development</li>
              </ul>
            </li>
            <li>
              <div style={{ fontWeight: "bold" }}>READING</div>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Full Stack Developer - Chapter 1 - Introduction</li>
                <li>Full Stack Developer - Chapter 2 - Creating Us</li>
              </ul>
            </li>
            <li>
              <div style={{ fontWeight: "bold" }}>SLIDES</div>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Introduction to Web Development</li>
                <li>Creating an HTTP server with Node.js</li>
                <li>Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>
        <li style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: "bold" }}>Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <div style={{ fontWeight: "bold" }}>LEARNING OBJECTIVES</div>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Learn how to create user interfaces with HTML</li>
                <li>Deploy the assignment to Netlify</li>
              </ul>
            </li>
            <li>
              <div style={{ fontWeight: "bold" }}>SLIDES</div>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Introduction to HTML and the DOM</li>
                <li>Formatting Web content with Headings and Tables</li>
                <li>Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}