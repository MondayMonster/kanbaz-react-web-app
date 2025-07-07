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
import AssignmentEditor from "./AssignmentEditor";

// This will be your layout route where courseId is defined
function CourseLayout() {
  const { courseId } = useParams();

  return (
    <div style={{ display: 'flex' }}>
      <Navigation courseId={courseId!} />
      <div style={{ marginLeft: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="1/Home" replace />} />
      
      {/* layout wrapper for all course pages */}
      <Route path=":courseId" element={<CourseLayout />}>
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Piazza" element={<Piazza />} />
        <Route path="Zoom" element={<Zoom />} />
        <Route path="Quizzes" element={<Quizzes />} />
        <Route path="Assignments" element={<Assignments />} />
        <Route path="Grades" element={<Grades />} />
        <Route path="Assignments/:assignmentId/Edit" element={<AssignmentEditor />} />
      </Route>
    </Routes>
  );
}
