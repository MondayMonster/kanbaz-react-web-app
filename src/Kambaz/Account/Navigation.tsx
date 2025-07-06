import { Link } from 'react-router-dom';

export default function AccountNavigation() {
  return (
    <nav>
      <Link to=".src/Kambaz/Account/Signin.tsx">Signin</Link><br/>
      <Link to=".src/Kambaz/Account/Signup.tsx">Signup</Link><br/>
      <Link to=".src/Kambaz/Account/Profile.tsx">Profile</Link><br/>
    </nav>
  );
}
