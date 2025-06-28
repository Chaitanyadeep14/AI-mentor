import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ProgressChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Study Minutes',
        data: [30, 45, 60, 40, 70, 20, 50],
        fill: false,
        borderColor: '#007bff',
        tension: 0.3
      }
    ]
  };

  return (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px' }}>
      <h3>Weekly Learning Progress</h3>
      <Line data={data} />
    </div>
  );
}
