import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Dashboard from './pages/Dashboard';
import ChatAI from './components/ChatAI';
import StudyPlanner from './components/StudyPlanner';
import Progress from './components/Progress';
import Recommender from './components/Recommender';

import Login from './pages/Login';
import Signup from './pages/Signup';

// ✅ Check if user is logged in (based on token)
const isAuthenticated = () => !!localStorage.getItem('token');

// ✅ Protected route component
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* Protected Routes */}
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/ask-ai" element={<PrivateRoute><ChatAI /></PrivateRoute>} />
          <Route path="/study-planner" element={<PrivateRoute><StudyPlanner /></PrivateRoute>} />
          <Route path="/progress" element={<PrivateRoute><Progress /></PrivateRoute>} />
          <Route path="/resources" element={<PrivateRoute><Recommender /></PrivateRoute>} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
