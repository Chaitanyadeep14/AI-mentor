import React, { useEffect, useState } from 'react';

export default function MasteryProgress() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('masteryProgress'));
    setProgress(
      stored || [
        { topic: 'Arrays', percent: 80 },
        { topic: 'Graphs', percent: 50 },
        { topic: 'OOP', percent: 90 },
      ]
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('masteryProgress', JSON.stringify(progress));
  }, [progress]);

  const updatePercent = (index, value) => {
    const updated = [...progress];
    updated[index].percent = Number(value);
    setProgress(updated);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>📈 Topic Mastery</h3>
      {progress.map((p, i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <div>{p.topic}</div>
          <input
            type="range"
            min="0"
            max="100"
            value={p.percent}
            onChange={(e) => updatePercent(i, e.target.value)}
            style={{ width: '100%' }}
          />
          <div style={{
            width: '100%',
            background: '#ddd',
            borderRadius: '6px',
            height: '10px',
            marginTop: '5px',
          }}>
            <div style={{
              width: `${p.percent}%`,
              background: '#4caf50',
              height: '100%',
            }}></div>
          </div>
          <small>{p.percent}%</small>
        </div>
      ))}
    </div>
  );
}
