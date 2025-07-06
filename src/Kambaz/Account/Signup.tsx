import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Username" /><br/>
      <input type="password" placeholder="Password" /><br/>
      <input type="password" placeholder="Verify Password" /><br/>
      <Link to="/Kambaz/Account/Profile"><button>Sign up</button></Link>
    </div>
  );
}
