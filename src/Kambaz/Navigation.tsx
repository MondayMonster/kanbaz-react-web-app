import { Link } from 'react-router-dom';

export default function KambazNavigation() {
  return (
    <nav>
      <Link to="/Kambaz/Account">Account</Link><br />
      <Link to="/Kambaz/Dashboard">Dashboard</Link><br />
      <Link to="/Labs/Lab1">Labs</Link><br />
    </nav>
  );
}
