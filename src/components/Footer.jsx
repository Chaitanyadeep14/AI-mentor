import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AI Mentor. Built with 💡 for personalized education.</p>
    </footer>
  );
}
