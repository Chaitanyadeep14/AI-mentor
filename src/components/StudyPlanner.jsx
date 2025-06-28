import React, { useEffect, useState } from 'react';

const defaultTasks = [
  { task: 'Revise Binary Trees', done: false },
  { task: 'Practice 5 LeetCode Problems', done: false },
  { task: 'Read OOPs Notes', done: false },
];

export default function StudyPlanner() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('studyTasks'));
    setTasks(stored || defaultTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('studyTasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const addTask = () => {
    const newTask = prompt('Enter new task:');
    if (newTask) {
      setTasks([...tasks, { task: newTask, done: false }]);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📅 Study Planner</h2>
      <ul style={{ paddingLeft: '1rem' }}>
        {tasks.map((t, i) => (
          <li key={i} style={{ marginBottom: '0.5rem' }}>
            <input type="checkbox" checked={t.done} onChange={() => toggleTask(i)} />
            <span style={{ marginLeft: '0.5rem', textDecoration: t.done ? 'line-through' : 'none' }}>
              {t.task}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={addTask} style={buttonStyle}>+ Add Task</button>
    </div>
  );
}

const buttonStyle = {
  marginTop: '1rem',
  padding: '10px 20px',
  background: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};
