'use client';
import { useState } from 'react';
import ResponsiveContainer from '@/components/ui/ResponsiveContainer';

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, `You: ${input}`, `AI: I'm here to listen ❤️`]);
    setInput('');
  };

  return (
    <ResponsiveContainer>
      <h2>Emotional Chatroom</h2>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 10,
        height: 300,
        overflowY: 'auto',
        marginBottom: 10
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 5 }}>{m}</div>
        ))}
      </div>

      <input
        style={{ width: '80%', padding: 10 }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Say something..."
      />
      <button onClick={handleSend}>Send</button>
    </ResponsiveContainer>
  );
}