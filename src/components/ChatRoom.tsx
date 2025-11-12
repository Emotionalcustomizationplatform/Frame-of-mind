import { useState } from 'react';
import axios from 'axios';

export default function ChatRoom() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input) return;
    setMessages(prev => [...prev, `You: ${input}`]);

    try {
      const res = await axios.post('/api/chat', { message: input });
      setMessages(prev => [...prev, `AI: ${res.data.reply}`]);
    } catch (err) {
      setMessages(prev => [...prev, `AI: Error occurred`]);
    }

    setInput('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '1rem' }}>
        {messages.map((msg, idx) => <div key={idx}>{msg}</div>)}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}