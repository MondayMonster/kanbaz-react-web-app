import { Link } from 'react-router-dom';

export default function AccountNavigation() {
  return (
    <nav>
      <Link to="Signin">Signin</Link><br/>
      <Link to="Signup">Signup</Link><br/>
      <Link to="Profile">Profile</Link><br/>
    </nav>
  );
}
