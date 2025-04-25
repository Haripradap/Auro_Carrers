import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';
import SkillsGap from './pages/SkillsGap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="applications" element={<Applications />} />
          <Route path="skills-gap" element={<SkillsGap />} />
          <Route path="resources" element={<div className="p-4">Learning Resources page</div>} />
          <Route path="interviews" element={<div className="p-4">Interview Prep page</div>} />
          <Route path="calendar" element={<div className="p-4">Calendar page</div>} />
          <Route path="settings" element={<div className="p-4">Settings page</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;