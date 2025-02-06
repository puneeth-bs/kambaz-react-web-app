import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // External CSS for styling

export default function Dashboard() {
  return (
    <Container id="wd-dashboard">
      {/* Dashboard Title */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />

      {/* Responsive Grid for Courses */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Course 1 */}
        <Col className="wd-dashboard-course">
          <Card className="shadow">
            <Link
              to="/Kambaz/Courses/12631/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img variant="top" src="/images/course_1.jpg" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS4550 12631 Web Development
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description bg-white text-dark p-2 rounded">
                  202410_1 Fall 2023 Semester Full Term
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        {/* Course 2 */}
        <Col className="wd-dashboard-course">
          <Card className="shadow">
            <Link
              to="/Kambaz/Courses/19753/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img variant="top" src="/images/course_2.jpg" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS4550 19753 Programming in Java
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description bg-white text-dark p-2 rounded">
                  202410_1 Fall 2023 Semester Full Term
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        {/* Course 3 */}
        <Col className="wd-dashboard-course">
          <Card className="shadow">
            <Link
              to="/Kambaz/Courses/20040/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img variant="top" src="/images/course_3.webp" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS5610 20040 Programming in SQL
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description bg-white text-dark p-2 rounded">
                  202310_2 Fall 2022 Semester Full Term
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        {/* Course 4 */}
        <Col className="wd-dashboard-course">
          <Card className="shadow">
            <Link
              to="/Kambaz/Courses/41752/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img variant="top" src="/images/course_4.webp" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS5610 41752 R Programming
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description bg-white text-dark p-2 rounded">
                  202340_2 Summer 1 2023 Semester Full Term
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        {/* Course 5 */}
        <Col className="wd-dashboard-course">
          <Card className="shadow">
            <Link
              to="/Kambaz/Courses/11550/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img variant="top" src="/images/course_5.webp" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS5610 11550 Mobile App Development
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description bg-white text-dark p-2 rounded">
                  202410_2 Fall 2023 Semester Full Term
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        {/* Course 6 */}
        <Col className="wd-dashboard-course">
          <Card className="shadow">
            <Link
              to="/Kambaz/Courses/17387/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img variant="top" src="/images/course_6.webp" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS5610 17387 Advanced Operating Systems
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description bg-white text-dark p-2 rounded">
                  202410_1 Fall 2023 Semester Full Term
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        {/* Course 7 */}
        <Col className="wd-dashboard-course">
          <Card className="shadow">
            <Link
              to="/Kambaz/Courses/17367/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img variant="top" src="/images/course_7.webp" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS5610 17367 Natural Language Processing
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description bg-white text-dark p-2 rounded">
                  202410_1 Fall 2023 Semester Full Term
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        {/* Course 8 */}
        <Col className="wd-dashboard-course">
          <Card className="shadow">
            <Link
              to="/Kambaz/Courses/30086/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img variant="top" src="/images/course_8.webp" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS4550 30086 Machine Learning
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description bg-white text-dark p-2 rounded">
                  202330_1 Spring 2023 Semester Full Term
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
