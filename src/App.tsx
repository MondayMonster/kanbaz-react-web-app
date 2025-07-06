import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Labs from './Labs/Lab1';
import Kambaz from './Kambaz';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Labs/Lab1" replace />} />
        <Route path="/Labs/Lab1" element={<Labs />} />
        <Route path="/Kambaz/*" element={<Kambaz />} />
      </Routes>
    </HashRouter>
  );
}
