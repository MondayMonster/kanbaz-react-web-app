// src/Kambaz/Courses/Home.tsx
import CourseStatus from "./Status";
import Modules from "./Modules";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const { courseId } = useParams();

  return (
    <Container fluid>
      <Row>
        {/* 1st column: (optional) Kanbaz Navigation sidebar handled in parent layout */}
        {/* 2nd column: Course Navigation sidebar handled in parent layout */}
        {/* 3rd column: Modules */}
        <Col xs={12} xl={7} className="p-3">
          <h2>Course {courseId}</h2>
          <Modules />
        </Col>
        {/* 4th column: Course Status, hidden on screens smaller than xl */}
        <Col xs={12} xl={5} className="p-3 d-none d-xl-block">
          <CourseStatus />
        </Col>
      </Row>
    </Container>
  );
}
