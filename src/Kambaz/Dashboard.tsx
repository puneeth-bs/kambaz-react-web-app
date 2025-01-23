import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ padding: '20px' }}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div
        id="wd-dashboard-courses"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}
      >
        <div
          className="wd-dashboard-course"
          style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px' }}
        >
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src="/images/course_1.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
          <hr />
        </div>
        <div
          className="wd-dashboard-course"
          style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px' }}
        >
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src="/images/course_1.jpg" width={200} />
            <div>
              <h5>CS1234 Python</h5>
              <p className="wd-dashboard-course-title">Basics of Python</p>
              <button>Go</button>
            </div>
          </Link>
          <hr />
        </div>
        <div
          className="wd-dashboard-course"
          style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px' }}
        >
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src="/images/course_1.jpg" width={200} />
            <div>
              <h5>CS1234 Java</h5>
              <p className="wd-dashboard-course-title">Basics of Java</p>
              <button>Go</button>
            </div>
          </Link>
          <hr />
        </div>
        <div
          className="wd-dashboard-course"
          style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px' }}
        >
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src="/images/course_1.jpg" width={200} />
            <div>
              <h5>CS1234 SQL</h5>
              <p className="wd-dashboard-course-title">Basics of SQL</p>
              <button>Go</button>
            </div>
          </Link>
          <hr />
        </div>
        <div
          className="wd-dashboard-course"
          style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px' }}
        >
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src="/images/course_1.jpg" width={200} />
            <div>
              <h5>CS1234 JavaScript</h5>
              <p className="wd-dashboard-course-title">Basics of JavaScript</p>
              <button>Go</button>
            </div>
          </Link>
          <hr />
        </div>
        <div
          className="wd-dashboard-course"
          style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px' }}
        >
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src="/images/course_1.jpg" width={200} />
            <div>
              <h5>CS1234 GoLang</h5>
              <p className="wd-dashboard-course-title">Basics of GoLang</p>
              <button>Go</button>
            </div>
          </Link>
          <hr />
        </div>
        <div
          className="wd-dashboard-course"
          style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px' }}
        >
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src="/images/course_1.jpg" width={200} />
            <div>
              <h5>CS1234 Rust</h5>
              <p className="wd-dashboard-course-title">Basics of Rust</p>
              <button>Go</button>
            </div>
          </Link>
          <hr />
        </div>
        {/* Add more courses as needed */}
      </div>
    </div>
  );
}