import React from 'react';
import QuickLinks from '../components/QuickLinks';
import AITip from '../components/AITip';
import DashboardCards from '../components/DashboardCards';
import ProgressChart from '../components/ProgressChart';
import RecentActivity from '../components/RecentActivity';
import StudyPlanner from '../components/StudyPlanner';
import MasteryProgress from '../components/MasteryProgress';
import StudyTimeline from '../components/StudyTimeline';

export default function Dashboard() {
  return (
    <div className="section">
      <h1>📚 Personalized Learning Dashboard</h1>
      <QuickLinks />
      <AITip />
      <DashboardCards />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <ProgressChart />
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <RecentActivity />
        </div>
      </div>
      <StudyPlanner />
      <MasteryProgress />
      <StudyTimeline />
    </div>
  );
}
