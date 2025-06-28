import React, { useEffect, useState } from 'react';

const tips = [
  "🔁 Revise one topic twice within 24 hours.",
  "💡 Use flashcards for DSA concepts.",
  "🧘 Take a 5-min break every 45 minutes.",
  "🧠 Ask AI one hard question per day.",
];

export default function AITip() {
  const [tip, setTip] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const saved = JSON.parse(localStorage.getItem('dailyTip')) || {};

    if (saved.date === today) {
      setTip(saved.tip);
    } else {
      const newTip = tips[Math.floor(Math.random() * tips.length)];
      setTip(newTip);
      localStorage.setItem('dailyTip', JSON.stringify({ date: today, tip: newTip }));
    }
  }, []);

  return (
    <div style={{ background: '#e8f0fe', padding: '1rem', marginTop: '1rem', borderRadius: '10px' }}>
      <strong>🧠 AI Tip of the Day:</strong> {tip}
    </div>
  );
}
