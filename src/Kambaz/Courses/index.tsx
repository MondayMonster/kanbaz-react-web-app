// src/Kambaz/Courses/index.tsx
import { Routes, Route, Navigate, Outlet, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Quizzes from "./Quizzes";
import Assignments from "./Assignments";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import AssignmentEditor from "./AssignmentEditor";
import { Container, Row, Col } from "react-bootstrap";

function CourseLayout() {
  const { courseId } = useParams();

  return (
    <Container fluid>
      <Row>
        {/* Sidebar: hidden on xs screens */}
        <Col xs={12} md={3} lg={2} className="d-none d-md-block p-0">
          <Navigation courseId={courseId!} />
        </Col>
        {/* Main content */}
        <Col xs={12} md={9} lg={10} className="p-3">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default function Courses() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="1/Home" replace />} />
      <Route path=":courseId" element={<CourseLayout />}>
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Piazza" element={<Piazza />} />
        <Route path="Zoom" element={<Zoom />} />
        <Route path="Quizzes" element={<Quizzes />} />
        <Route path="Assignments" element={<Assignments />} />
        <Route path="Grades" element={<Grades />} />
        <Route path="People" element={<PeopleTable />} />
        <Route path="Assignments/:assignmentId/Edit" element={<AssignmentEditor />} />
      </Route>
    </Routes>
  );
}
