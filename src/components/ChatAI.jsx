import React, { useState } from 'react';

export default function ChatAI() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'mistralai/mistral-7b-instruct', // ✅ Free and working
          messages: [
            { role: 'system', content: 'You are a helpful AI mentor for personalized education.' },
            { role: 'user', content: input }
          ]
        })
      });

      const data = await res.json();
      if (data.error) {
        setResponse(`❌ API Error: ${data.error.message}`);
      } else {
        const message = data?.choices?.[0]?.message?.content;
        setResponse(message || '⚠️ No valid response from AI.');
      }
    } catch (err) {
      console.error(err);
      setResponse('❌ API Error: Could not reach server.');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '700px', margin: '0 auto' }}>
      <h2>💬 Ask AI Mentor</h2>
      <textarea
        rows="4"
        placeholder="Type your question here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1rem'
        }}
      />
      <button
        onClick={handleAsk}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '6px',
        border: '1px solid #ddd',
        whiteSpace: 'pre-wrap',
        fontSize: '1rem'
      }}>
        <strong>AI Response:</strong>
        <div>{response}</div>
      </div>
    </div>
  );
}
