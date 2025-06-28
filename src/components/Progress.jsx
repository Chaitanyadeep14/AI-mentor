import React, { useEffect, useState } from 'react';

export default function Progress() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('masteryProgress'));
    setTopics(
      stored || [
        { topic: 'Arrays', percent: 70 },
        { topic: 'Graphs', percent: 40 },
        { topic: 'OOPs', percent: 80 },
      ]
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('masteryProgress', JSON.stringify(topics));
  }, [topics]);

  const updateProgress = (i, value) => {
    const updated = [...topics];
    updated[i].percent = Number(value);
    setTopics(updated);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📈 Your Progress</h2>
      {topics.map((t, i) => (
        <div key={i} style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontWeight: '500' }}>{t.topic}</div>
          <input
            type="range"
            min="0"
            max="100"
            value={t.percent}
            onChange={(e) => updateProgress(i, e.target.value)}
            style={{ width: '100%' }}
          />
          <div style={{
            height: '10px',
            background: '#ddd',
            borderRadius: '6px',
            marginTop: '5px',
          }}>
            <div style={{
              width: `${t.percent}%`,
              height: '100%',
              background: '#28a745',
              borderRadius: '6px'
            }}></div>
          </div>
          <small>{t.percent}%</small>
        </div>
      ))}
    </div>
  );
}
    