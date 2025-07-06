import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <input placeholder="Username" defaultValue="john_doe"/><br/>
      <input type="password" placeholder="Password" defaultValue="password123"/><br/>
      <input placeholder="First Name" defaultValue="John"/><br/>
      <input placeholder="Last Name" defaultValue="Doe"/><br/>
      <input type="date" defaultValue="2000-01-01"/><br/>
      <input type="email" defaultValue="john@example.com"/><br/>
      <select defaultValue="Student">
        <option>User</option>
        <option>Admin</option>
        <option>Faculty</option>
        <option>Student</option>
      </select><br/>
      <Link to="/Kambaz/Account/Signin">Sign out</Link>
    </div>
  );
}
