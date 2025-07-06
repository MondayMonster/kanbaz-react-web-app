import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // After signup, navigate to profile
    navigate("../Profile");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Username" defaultValue="john_doe"/><br/>
      <input type="password" placeholder="Password" defaultValue="pwe"/><br/>
      <input type="password" placeholder="Verify Password" defaultValue="pwe"/><br/>
      <button onClick={handleSignup}>Sign up</button><br/><br/>
      <Link to="/Kambaz/Account/Signin">Already have an account? Sign in</Link>
    </div>
  );
}
