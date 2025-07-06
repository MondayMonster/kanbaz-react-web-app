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
      <input placeholder="Username" /><br/>
      <input type="password" placeholder="Password" /><br/>
      <input type="password" placeholder="Verify Password" /><br/>
      <button onClick={handleSignup}>Sign up</button><br/><br/>
      <Link to="../Signin">Already have an account? Sign in</Link>
    </div>
  );
}
