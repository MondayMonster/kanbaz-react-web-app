import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import CourseNavigation from './Navigation';
import Modules from './Modules';
import Assignments from './Assignments';
import AssignmentEditor from './AssignmentEditor';

export default function Courses() {
  const { cid } = useParams();
  return (
    <div style={{ display: 'flex' }}>
      <CourseNavigation />
      <div style={{ marginLeft: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="Modules" replace />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
        </Routes>
      </div>
    </div>
  );
}
