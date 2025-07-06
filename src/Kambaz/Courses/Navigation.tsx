import { Link, useParams } from 'react-router-dom';

export default function CourseNavigation() {
  const { cid } = useParams();
  return (
    <nav>
      <Link to={`/Kambaz/Courses/${cid}/Modules`}>Modules</Link><br/>
      <Link to={`/Kambaz/Courses/${cid}/Assignments`}>Assignments</Link><br/>
    </nav>
  );
}
