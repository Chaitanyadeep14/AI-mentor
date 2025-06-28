import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuickLinks() {
  const navigate = useNavigate();

  const links = [
    { label: 'Ask AI', path: '/ask-ai' },
    { label: 'Study Planner', path: '/study-planner' },
    { label: 'Progress', path: '/progress' },
    { label: 'Resources', path: '/resources' },
  ];

  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem',
      marginBottom: '1rem',
      flexWrap: 'wrap'
    }}>
      {links.map((link, i) => (
        <button
          key={i}
          onClick={() => navigate(link.path)}
          style={{
            background: '#007bff',
            color: 'white',
            padding: '10px 18px',
            borderRadius: '8px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            minWidth: '140px'
          }}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
