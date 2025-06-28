import React, { useState, useEffect } from 'react';

const allResources = [
  { title: 'DSA Playlist by Abdul Bari', link: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAwclYyPq6JpysF3qX9W4pGm', category: 'DSA' },
  { title: 'GeeksforGeeks Practice', link: 'https://practice.geeksforgeeks.org/', category: 'DSA' },
  { title: 'LeetCode Top Questions', link: 'https://leetcode.com/problemset/top-interview-questions/', category: 'DSA' },
  { title: 'Java OOP Concepts', link: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/', category: 'OOP' },
  { title: 'Frontend Developer Roadmap', link: 'https://roadmap.sh/frontend', category: 'Web Development' },
  { title: 'MongoDB Crash Course', link: 'https://www.youtube.com/watch?v=-56x56UppqQ', category: 'Database' },
  { title: 'CS50 Web Track', link: 'https://cs50.harvard.edu/web/', category: 'Web Development' },
  { title: 'DBMS Made Easy', link: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ', category: 'Database' },
];

export default function Recommender() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [tab, setTab] = useState('All');

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favResources')) || [];
    setFavorites(fav);
  }, []);

  const toggleFavorite = (link) => {
    let updated;
    if (favorites.includes(link)) {
      updated = favorites.filter((l) => l !== link);
    } else {
      updated = [...favorites, link];
    }
    setFavorites(updated);
    localStorage.setItem('favResources', JSON.stringify(updated));
  };

  const filtered = allResources.filter((res) => {
    const matchSearch = res.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || res.category === category;
    const matchTab = tab === 'All' || favorites.includes(res.link);
    return matchSearch && matchCategory && matchTab;
  });

  const categories = ['All', 'DSA', 'OOP', 'Web Development', 'Database'];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📚 Learning Resources</h2>

      {/* Tabs */}
      <div style={{ margin: '1rem 0' }}>
        {['All', 'Favorites'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: '8px 16px',
              marginRight: '1rem',
              background: tab === t ? '#007bff' : '#ddd',
              color: tab === t ? 'white' : 'black',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Filters */}
      <input
        type="text"
        placeholder="🔍 Search resources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }}
      />

      <div style={{ marginBottom: '1rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: '8px 14px',
              marginRight: '0.5rem',
              marginTop: '0.5rem',
              background: category === cat ? '#28a745' : '#f0f0f0',
              color: category === cat ? 'white' : 'black',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource List */}
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {filtered.length === 0 && <p>❌ No resources found.</p>}
        {filtered.map((r, i) => (
          <li key={i} style={{
            marginBottom: '1rem',
            background: '#f9f9f9',
            padding: '10px',
            borderRadius: '8px',
            borderLeft: '4px solid #007bff',
            position: 'relative'
          }}>
            <a href={r.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#007bff', textDecoration: 'none' }}>
              {r.title}
            </a>
            <div style={{ fontSize: '0.9rem', color: '#555' }}>Category: {r.category}</div>
            <button
              onClick={() => toggleFavorite(r.link)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
                cursor: 'pointer',
                color: favorites.includes(r.link) ? '#ffc107' : '#999'
              }}
              title="Toggle Favorite"
            >
              ★
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
