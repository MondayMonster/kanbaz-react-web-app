// src/Kambaz/Navigation.tsx (or wherever your nav is)
import { Link } from 'react-router-dom';

export default function KambazNavigation() {
  return (
    <nav>
      <Link to="/kambaz/account">Account</Link><br />
      <Link to="/kambaz/dashboard">Dashboard</Link><br />
      <Link to="/labs/lab1">Lab1</Link><br />
    </nav>
  );
}
