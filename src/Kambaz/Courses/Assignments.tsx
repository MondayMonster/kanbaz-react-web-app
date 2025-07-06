import { Link, useParams } from 'react-router-dom';

export default function Assignments() {
  const { cid } = useParams();
  return (
    <div>
      <h3>Assignments</h3>
      <ul>
        <li><Link to={`/Kambaz/Courses/${cid}/Assignments/1`}>Assignment 1</Link></li>
        <li><Link to={`/Kambaz/Courses/${cid}/Assignments/2`}>Assignment 2</Link></li>
      </ul>
    </div>
  );
}
