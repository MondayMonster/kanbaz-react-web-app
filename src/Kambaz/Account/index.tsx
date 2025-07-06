import { Routes, Route, Navigate } from 'react-router-dom';
import AccountNavigation from './Navigation';
import Signin from './Signin';
import Signup from './Signup';
import Profile from './Profile';

export default function Account() {
  return (
    <div style={{ display: 'flex' }}>
      <AccountNavigation />
      <div style={{ marginLeft: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="Signin" replace />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
