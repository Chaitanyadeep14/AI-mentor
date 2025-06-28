import React, { useEffect, useState } from 'react';

export default function StudyTimeline() {
  const [log, setLog] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('studyTimeline')) || [];
    setLog(stored);

    // Add log only once per day
    const today = new Date().toISOString().split('T')[0];
    const alreadyLogged = stored.some(e => e.date === today);

    const planner = JSON.parse(localStorage.getItem('studyTasks')) || [];
    const completedCount = planner.filter(t => t.done).length;

    if (!alreadyLogged && completedCount > 0) {
      const newEntry = {
        date: today,
        activity: `Completed ${completedCount} task${completedCount > 1 ? 's' : ''}`,
      };
      const updated = [newEntry, ...stored];
      setLog(updated);
      localStorage.setItem('studyTimeline', JSON.stringify(updated));
    }
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>🕒 Weekly Study Timeline</h3>
      <ul style={{ paddingLeft: '1rem', borderLeft: '3px solid #ccc' }}>
        {log.map((entry, i) => (
          <li key={i} style={{ marginBottom: '1rem', paddingLeft: '1rem', position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '-9px',
              top: '5px',
              width: '10px',
              height: '10px',
              background: '#4caf50',
              borderRadius: '50%'
            }}></span>
            <strong>{entry.date}</strong>: {entry.activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
