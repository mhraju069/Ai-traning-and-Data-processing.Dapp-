import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/pages/navbar';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Dashboard from './components/pages/dashboard';

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
