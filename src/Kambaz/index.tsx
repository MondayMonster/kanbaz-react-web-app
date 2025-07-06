import { Routes, Route, Navigate } from 'react-router-dom';
import KambazNavigation from './Navigation';
import Account from './Account';
import Dashboard from './Dashboard';
import Courses from './Courses';

export default function Kambaz() {
  return (
    <div style={{ display: 'flex' }}>
      <KambazNavigation />
      <div style={{ marginLeft: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="Account" replace />} />
          <Route path="Account/*" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:cid/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
