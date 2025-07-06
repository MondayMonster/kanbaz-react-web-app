import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div>
      <h2>Signin</h2>
      <input placeholder="Username" /><br/>
      <input type="password" placeholder="Password" /><br/>
      <Link to="/Kambaz/Dashboard"><button>Sign in</button></Link>
    </div>
  );
}
