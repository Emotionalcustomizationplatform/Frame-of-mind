'use client';
import { useState } from 'react';
import axios from 'axios';

export default function ChatRoom() {
  const [messages, setMessages] = useState<{ role: string, content: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const res = await axios.post('/api/chat', { messages: [...messages, userMessage] });
      setMessages([...messages, userMessage, { role: 'assistant', content: res.data.message }]);
    } catch (err) {
      alert('Failed to send message');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <div style={{ minHeight: '300px', border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <input
          style={{ flex: 1, padding: '0.5rem' }}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>Send</button>
      </div>
    </div>
  );
}