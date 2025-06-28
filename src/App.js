import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Dashboard from './pages/Dashboard';
import ChatAI from './components/ChatAI';
import StudyPlanner from './components/StudyPlanner';
import Progress from './components/Progress';
import Recommender from './components/Recommender';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ask-ai" element={<ChatAI />} />
          <Route path="/study-planner" element={<StudyPlanner />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/resources" element={<Recommender />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
