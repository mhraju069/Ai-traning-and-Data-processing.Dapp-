
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/pages/navbar';
import Home from './components/pages/home';
import LandingPage from './components/pages/landingPage';
import Login from './components/pages/login';
import { useAuthCheck } from './components/assets/toolpits/useAuthCheck';
import Dashboard from './components/pages/dashboard';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </>
  );
}

export default App;
