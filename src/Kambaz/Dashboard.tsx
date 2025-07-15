import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "1234",
    title: "CS1234 React JS",
    description: "Full Stack software developer",
    image: "/images/dashboard.svg",
  },
  {
    id: "2345",
    title: "CS2345 Node JS",
    description: "Backend development with Node",
    image: "/images/dashboard.svg",
  },
  {
    id: "3456",
    title: "CS3456 Database Systems",
    description: "Relational and NoSQL databases",
    image: "/images/dashboard.svg",
  },
  {
    id: "4567",
    title: "CS4567 Algorithms",
    description: "Algorithm design and analysis",
    image: "/images/dashboard.svg",
  },
  {
    id: "5678",
    title: "CS5678 Web Security",
    description: "Web application security",
    image: "/images/dashboard.svg",
  },
  {
    id: "6789",
    title: "CS6789 Mobile Apps",
    description: "Building mobile applications",
    image: "/images/dashboard.svg",
  },
  {
    id: "7890",
    title: "CS7890 Cloud Computing",
    description: "Cloud infrastructure and services",
    image: "/images/dashboard.svg",
  },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {courses.map((course) => (
            <Col key={course.id} className="wd-dashboard-course" style={{ minWidth: 250, maxWidth: 270 }}>
              <Card className="h-100 shadow-sm">
                <Link
                  to={`/kambaz/courses/${course.id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image}
                    style={{ height: 160, objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "60px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
