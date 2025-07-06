import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/Kambaz/Courses/CS1234">Course CS1234</Link></li>
        <li><Link to="/Kambaz/Courses/CS5678">Course CS5678</Link></li>
        <li><Link to="/Kambaz/Courses/CS9101">Course CS9101</Link></li>
      </ul>
    </div>
  );
}
