import React from 'react';

export default function DashboardCards() {
  const stats = [
    { title: 'Questions Asked', value: 42 },
    { title: 'AI Responses', value: 41 },
    { title: 'Topics Mastered', value: 18 },
    { title: 'Study Streak', value: '5 days' },
  ];

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
      {stats.map((card, i) => (
        <div key={i} style={{
          flex: 1,
          minWidth: '200px',
          background: '#f0f2f5',
          padding: '1rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '0.5rem' }}>{card.title}</h3>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}
