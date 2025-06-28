import React from 'react';

export default function RecentActivity() {
  const history = [
    { question: 'Explain binary search', date: '2025-06-26' },
    { question: 'DSA 2-week plan', date: '2025-06-25' },
    { question: 'What is OOP?', date: '2025-06-24' },
  ];

  return (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px' }}>
      <h3>Recent Questions</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {history.map((entry, i) => (
          <li key={i} style={{ marginBottom: '0.5rem', borderBottom: '1px solid #eee' }}>
            <strong>{entry.question}</strong><br />
            <small>{entry.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
