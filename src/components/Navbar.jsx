import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2 className="logo">AI Mentor</h2>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/ask-ai">Ask AI</Link></li>
            <li><Link to="/study-planner">Planner</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
