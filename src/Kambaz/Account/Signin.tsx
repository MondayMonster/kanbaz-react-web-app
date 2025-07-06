import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();

  const handleSignin = () => {
    // Normally you'd do validation here
    navigate("../Profile"); // relative navigation from /Kambaz/Account/Signin to /Kambaz/Account/Profile
  };

  return (
    <div>
      <h2>Signin</h2>
      <input placeholder="Username" defaultValue="john_doe"/><br/>
      <input type="password" placeholder="Password" defaultValue="pwewpwpwp"/><br/>
      <button onClick={handleSignin}>Sign in</button><br/><br/>
      <Link to="/Kambaz/Account/Signup">Don't have an account? Sign up</Link>
    </div>
  );
}
