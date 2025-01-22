export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ padding: "20px" }}>
      <h2>Course Status</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button>Unpublish</button>
        <button>Publish</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button>Import Existing Content</button>
        <button>Import from Commons</button>
        <button>Choose Home Page</button>
        <button>View Course Stream</button>
        <button>New Announcement</button>
        <button>New Analytics</button>
        <button>View Course Notifications</button>
      </div>
    </div>
  );
}
